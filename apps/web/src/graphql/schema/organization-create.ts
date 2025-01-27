import { builder } from '../builder';
import { organizations, organizationMembers } from '@thinair-monorepo-template/supabase/schema';
import { Err, ErrType, Ok, Result } from '../types/Result';


type OrganizationCreateErrorSet = ErrType<'OrganizationExists'> | ErrType<'Unauthorized'> | ErrType<'Unknown'>

const OrganizationType = builder.drizzleObject('organizations', {
    name: 'Organization',
    fields: (t) => ({
        id: t.exposeID('id'),
        name: t.exposeString('name'),
    }),
})

// Create the mutation
builder.mutationField('organizationCreate', t => 
    t.field({
        args: {
            input: t.arg({
                type: builder.inputType('OrganizationCreateInput', {
                    fields: (t) => ({
                        name: t.string({ required: true }),
                    }),
                }),
                required: true,
            })
        },
        type: builder.objectRef<Result<typeof organizations.$inferSelect, OrganizationCreateErrorSet>>('OrganizationCreateResult').implement({
            description: 'The result of the organization create mutation',
            fields: (t) => ({
                data: t.field({
                    type: OrganizationType,
                    resolve: (parent) => parent.data,
                    nullable: true,
                }),
                error: t.field({
                    type: builder.objectRef<OrganizationCreateErrorSet>('OrganizationCreateError').implement({
                        fields: (t) => ({
                            type: t.field({
                                type: builder.enumType('OrganizationCreateErrorType', {
                                    values: ['OrganizationExists', 'Unauthorized', 'Unknown'],
                                }),
                                resolve: (parent) => parent.type,
                            }),
                            message: t.exposeString('message'),
                        })
                    }),
                    resolve: (parent) => parent.error,
                    nullable: true,
                })
            })
        }),
        resolve: async (_, args, { user, db }) => {
            try {
                if (!user?.id) {
                    return Err({
                        type: 'Unauthorized',
                        message: 'Unauthorized',
                    });
                }
                console.log(user)
                console.log('Creating organization')
                // First create the organization using RLS to respect policies
                const [organization] = await db.rls(async (tx) => {
                    const [org] = await tx
                        .insert(organizations)
                        .values({
                            name: args.input.name,
                        })
                        .returning();
                    if (!org) {
                        throw new Error('Failed to create organization');
                    }
                    await tx.insert(organizationMembers).values({
                        userId: user.id,
                        organizationId: org.id,
                        role: 'Owner',
                        createdBy: user.id,
                        updatedBy: user.id,
                    })
                    return [org];
                });
                console.log('Organization created', organization)
                if (!organization) {
                    return Err({
                        type: 'OrganizationExists',
                        message: 'Failed to create organization',
                    });
                }
                return Ok(organization);
            } catch (error) {
                console.error('Error creating organization', error)
                return Err({
                    type: 'Unknown',
                    message: error instanceof Error ? error.message : 'Unknown error',
                });
            }
        },
    })
)