import { profiles } from '@thinair-monorepo-template/supabase/schema';
import { builder } from '../builder';
import { eq } from "drizzle-orm";
import { createServerClient } from '@thinair-monorepo-template/supabase/createServerClient';
import { Err, ErrType, Ok, Result } from '../types/Result';

type ProfileUpdateErrorSet = ErrType<'Unauthorized'> | ErrType<'Unknown'> | ErrType<'UploadFailed'>

const ProfileType = builder.drizzleObject('profiles', {
    name: 'Profile',
    fields: (t) => ({
        id: t.exposeID('id'),
        email: t.exposeString('email'),
        firstName: t.exposeString('firstName'),
        lastName: t.exposeString('lastName'),
        phoneNumber: t.exposeString('phoneNumber'),
        profilePictureUrl: t.exposeString('profilePictureUrl'),
    }),
})

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
        type: builder.objectRef<Result<typeof profiles.$inferSelect, ProfileUpdateErrorSet>>('ProfileUpdateResult').implement({
            description: 'The result of the profile update mutation',
            fields: (t) => ({
                data: t.field({
                    type: ProfileType,
                    resolve: (parent) => parent.data,
                    nullable: true,
                }),
                error: t.field({
                    type: builder.objectRef<ProfileUpdateErrorSet>('ProfileUpdateError').implement({
                        fields: (t) => ({
                            type: t.field({
                                type: builder.enumType('ProfileUpdateErrorType', {
                                    values: ['Unauthorized', 'Unknown', 'UploadFailed'],
                                }),
                                resolve: (parent) => parent.type,
                            }),
                            message: t.exposeString('message'),
                        })
                    }),
                    resolve: (parent) => parent.error,
                    nullable: true,
                })
            }),
        }),
        resolve: async (_, args, { user, db }) => {
            try {
                if (!user?.id) {
                    return Err({
                        type: 'Unauthorized',
                        message: 'Unauthorized',
                    });
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
                        return Err({
                            type: 'UploadFailed',
                            message: 'Failed to upload profile picture',
                        });
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
                    return Err({
                        type: 'Unauthorized',
                        message: 'Unauthorized',
                    });
                }

                return Ok(profile);
            } catch (error) {
                return Err({
                    type: 'Unknown',
                    message: error instanceof Error ? error.message : 'Unknown error',
                });
            }
        }
    })
)