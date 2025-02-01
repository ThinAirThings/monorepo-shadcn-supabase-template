import { profiles } from '@usepulse/supabase/schema';
import { builder } from '../builder';
import { eq } from "drizzle-orm";
import { createServerClient } from '@usepulse/supabase/createServerClient';


builder.mutationField('profileUpdate', t => 
    t.field({
        args: {
            input: t.arg({
                type: builder.inputType('ProfileUpdateInput', {
                    fields: (t) => ({
                        firstName: t.string({ required: false }),
                        lastName: t.string({ required: false }),
                        phoneNumber: t.string({ required: false }),
                        profilePicture: t.field({
                            type: 'File',
                            required: false,
                        }),
                    }),
                }),
                required: true,
            }),
        },
        type: builder.simpleObject('ProfileUpdateResult', {
            fields: (t) => ({
                id: t.string({ nullable: false }),
                firstName: t.string({ nullable: true }),
                lastName: t.string({ nullable: true }),
                phoneNumber: t.string({ nullable: true }),
                profilePictureUrl: t.string({ nullable: true }),
            }),
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
                    const fileName = `${user.id}/${timestamp}.${extension}`

                    const { error: uploadError, data } = await supabase.storage
                        .from('profile_pictures')
                        .upload(fileName, file, {
                            upsert: true,
                            contentType: file.type,
                        })

                    if (uploadError) {
                        console.log(uploadError)
                        throw new Error('UploadFailed')
                    }

                    const { data: { publicUrl } } = supabase.storage
                        .from('profile_pictures')
                        .getPublicUrl(fileName)

                    profilePictureUrl = publicUrl
                }

                // Update profile with new data
                const [profile] = await db.rls(async (tx) => {
                    const [profile] = await tx.update(profiles).set({
                        firstName: args.input.firstName ?? '',
                        lastName: args.input.lastName ?? '',
                        phoneNumber: args.input.phoneNumber ?? '',
                        ...(profilePictureUrl && { profilePictureUrl }),
                    }).where(eq(profiles.id, user.id)).returning();
                    return [profile];
                });

                if (!profile) {
                    throw new Error('Failed to update profile')
                }

                return profile;
            } catch (error) {
                throw new Error('Failed to update profile')
            }
        }
    })
)