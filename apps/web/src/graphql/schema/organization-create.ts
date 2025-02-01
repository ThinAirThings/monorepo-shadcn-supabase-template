import { builder } from '../builder';
import { organizations, organizationMembers } from '@usepulse/supabase/schema';
import { createServerClient } from '@usepulse/supabase/createServerClient';

// Create the mutation
builder.mutationField('organizationCreate', t => 
    t.field({
        args: {
            input: t.arg({
                type: builder.inputType('OrganizationCreateInput', {
                    fields: (t) => ({
                        name: t.string({ required: true }),
                        profilePicture: t.field({
                            type: 'File',
                            required: false,
                        }),
                    }),
                }),
                required: true,
            })
        },
        type: builder.simpleObject('OrganizationCreateResult', {
            fields: (t) => ({
                id: t.field({ type: 'UUID', nullable: false }),
                name: t.string({ nullable: false }),
                profilePictureUrl: t.string({ nullable: true }),
            })
        }),
        resolve: async (_, args, { user, db }) => {
            try {
                if (!user?.id) {
                    throw new Error('Unauthorized')
                }

                const supabase = await createServerClient()
                let profilePictureUrl = undefined

                // Handle profile picture upload if provided
                if (args.input.profilePicture) {
                    const file = args.input.profilePicture
                    const timestamp = Date.now()
                    const extension = file.name.split('.').pop()
                    const fileName = `${timestamp}.${extension}`

                    const { error: uploadError } = await supabase.storage
                        .from('organization_profile_pictures')
                        .upload(fileName, file, {
                            upsert: true,
                            contentType: file.type,
                        })

                    if (uploadError) {
                        throw new Error('Failed to upload organization logo')
                    }

                    const { data: { publicUrl } } = supabase.storage
                        .from('organization_profile_pictures')
                        .getPublicUrl(fileName)

                    profilePictureUrl = publicUrl
                }

                // Create organization with all data
                const [organization] = await db.rls(async (tx) => {
                    const [org] = await tx
                        .insert(organizations)
                        .values({
                            name: args.input.name,
                            profilePictureUrl,
                        })
                        .returning();

                    if (!org) {
                        throw new Error('Failed to create organization');
                    }

                    await tx.insert(organizationMembers).values({
                        profileId: user.id,
                        organizationId: org.id,
                        role: 'Owner',
                        createdBy: user.id,
                        updatedBy: user.id,
                    })

                    return [org];
                });

                if (!organization) {
                    throw new Error('Failed to create organization')
                }

                return organization
            } catch (error) {
                console.error('Error creating organization', error)
                throw error
            }
        },
    })
)