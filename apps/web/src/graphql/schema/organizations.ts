import { builder } from '../builder';
import { organizations, organizationMembers } from '@thinair-monorepo-template/supabase/schema';

// Create the Organization type using drizzleObject
const OrganizationType = builder.drizzleObject('organizations', {
    name: 'Organization',
    fields: (t) => ({
        id: t.exposeID('id'),
        name: t.exposeString('name'),
    }),
});

// Create the mutation
builder.mutationFields((t) => ({
    createOrganization: t.drizzleField({
        type: OrganizationType,
        args: {
            name: t.arg.string({ required: true }),
            website: t.arg.string(),
        },
        resolve: async (query, _parent, args, { user, db }) => {
            if (!user?.id) {
                throw new Error('Unauthorized');
            }

            // First create the organization using RLS to respect policies
            const [organization] = await db.rls(async (tx) => {
                const [org] = await tx
                    .insert(organizations)
                    .values({
                        name: args.name,
                        createdBy: user.id,
                        updatedBy: user.id,
                    })
                    .returning();
                return [org];
            });

            if (!organization) {
                throw new Error('Failed to create organization');
            }

            // Then create the membership using admin to bypass RLS
            await db.admin.transaction(async (tx) => {
                await tx
                    .insert(organizationMembers)
                    .values({
                        userId: user.id,
                        organizationId: organization.id,
                        role: 'Owner',
                        createdBy: user.id,
                        updatedBy: user.id,
                    });
            });

            return organization;
        },
    }),
}));
