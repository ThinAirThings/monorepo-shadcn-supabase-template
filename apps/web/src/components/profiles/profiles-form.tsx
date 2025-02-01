import { useForm } from "react-hook-form"
import { z } from "zod"
import { ApolloError, useFragment, useMutation } from "@apollo/client"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@thinair-monorepo-template/ui/components/form"
import { Input } from "@thinair-monorepo-template/ui/components/input"
import { useEffect } from "react"
import { DocumentType, graphql } from "@/gql"
import { zodResolver } from "@hookform/resolvers/zod"
import { Skeleton } from "@thinair-monorepo-template/ui/components/skeleton"
import { FileUpload } from '@ark-ui/react/file-upload'
import { Camera } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@thinair-monorepo-template/ui/components/avatar"
import { formatPhoneNumber } from "@/lib/format-phone-number"
import { UseUIFormReturn } from "@/hooks/use-ui-form"

const formSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 characters"),
    profilePicture: z.instanceof(File).optional(),
})

export type ProfileFormValues = z.infer<typeof formSchema>

const ProfilesFormFragment = graphql(`
    fragment ProfilesFormFragment on Profiles {
        id
        firstName
        lastName
        phoneNumber
        profilePictureUrl
    }
`)

const UpdateProfileMutation = graphql(`
    mutation UpdateProfile(
        $firstName: String
        $lastName: String
        $phoneNumber: String
        $profilePicture: File
    ) {
        profileUpdate(input: {
            firstName: $firstName
            lastName: $lastName
            phoneNumber: $phoneNumber
            profilePicture: $profilePicture
        }) {
            id
            firstName
            lastName
            phoneNumber
            profilePictureUrl
        }
    }
`)

export function ProfilesForm({ 
    parentFragment,
    form,
}: {
    parentFragment: {__typename: "Profiles"}
    form: UseUIFormReturn<ProfileFormValues>
}) {
    const { data } = useFragment({
        fragment: ProfilesFormFragment,
        from: parentFragment,
    })

    const rhfForm = useForm<ProfileFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            profilePicture: data?.profilePictureUrl ? new File([], data.profilePictureUrl) : undefined,
        },
        values: {
            firstName: data?.firstName ?? "",
            lastName: data?.lastName ?? "",
            phoneNumber: data?.phoneNumber ?? "",
            profilePicture: data?.profilePictureUrl ? new File([], data.profilePictureUrl) : undefined,
        }
    })

    const [updateProfile] = useMutation(UpdateProfileMutation)

    useEffect(() => {
        form.setSubmit(async (options) => {
            try {
                form.setMutationLoading(true)
                const values = await rhfForm.trigger()
                if (!values) return

                const formValues = rhfForm.getValues()
                await updateProfile({
                    variables: {
                        ...formValues
                    },
                })
                options?.onSuccess?.()
            } catch (error) {
                options?.onError?.(error as ApolloError)
            } finally {
                form.setMutationLoading(false)
            }
        })
    }, [rhfForm, updateProfile, form])

    const initials = `${data?.firstName?.[0] ?? ''}${data?.lastName?.[0] ?? ''}`

    return (
        <Form {...rhfForm}>
            <div className="space-y-6 px-2">
                {/* Centered Profile Picture Upload */}
                <div className="flex justify-center mb-8">
                    <FormField
                        control={rhfForm.control}
                        name="profilePicture"
                        render={({ field: { onChange, value, ...field } }) => (
                            <FormItem>
                                <FormControl>
                                    <FileUpload.Root
                                        maxFiles={1}
                                        accept="image/*"
                                        onFileAccept={(details) => {
                                            onChange(details.files[0])
                                        }}
                                    >
                                        <FileUpload.Dropzone className="cursor-pointer">
                                            <div className="flex flex-col items-center">
                                                <FileUpload.ItemGroup>
                                                    <FileUpload.Context>
                                                        {({ acceptedFiles }) => (
                                                            <>
                                                                {acceptedFiles.length > 0 ? (
                                                                    <FileUpload.Item file={acceptedFiles[0] as File}>
                                                                        <FileUpload.ItemPreview type="image/*">
                                                                            <Avatar className="h-24 w-24">
                                                                                <FileUpload.ItemPreviewImage className="h-24 w-24 object-cover rounded-full" />
                                                                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-full opacity-0 hover:opacity-100 transition-opacity">
                                                                                    <Camera className="h-6 w-6 text-white" />
                                                                                </div>
                                                                            </Avatar>
                                                                        </FileUpload.ItemPreview>
                                                                    </FileUpload.Item>
                                                                ) : (
                                                                    <Avatar className="h-24 w-24">
                                                                        <AvatarImage 
                                                                            src={data?.profilePictureUrl ?? undefined} 
                                                                            alt={initials}
                                                                        />
                                                                        <AvatarFallback className="text-xl">
                                                                            {initials || <Camera className="h-8 w-8 text-muted-foreground" />}
                                                                        </AvatarFallback>
                                                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-full opacity-0 hover:opacity-100 transition-opacity">
                                                                            <Camera className="h-6 w-6 text-white" />
                                                                        </div>
                                                                    </Avatar>
                                                                )}
                                                            </>
                                                        )}
                                                    </FileUpload.Context>
                                                </FileUpload.ItemGroup>
                                                <p className="mt-2 text-sm text-muted-foreground">
                                                    Click or drag to update profile picture
                                                </p>
                                            </div>
                                        </FileUpload.Dropzone>
                                        <FileUpload.HiddenInput {...field} />
                                    </FileUpload.Root>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={rhfForm.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={rhfForm.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={rhfForm.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input 
                                    placeholder="(555) 555-5555"
                                    {...field}
                                    onChange={(e) => {
                                        const formatted = formatPhoneNumber(e.target.value)
                                        field.onChange(formatted)
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </Form>
    )
}

export function ProfilesFormSkeleton() {
    return (
        <div className="space-y-6 px-2">
            <div className="space-y-2">
                <Skeleton className="h-4 w-[60px]" />
                <Skeleton className="h-10 w-full rounded-md" />
            </div>

            <div className="space-y-2">
                <Skeleton className="h-4 w-[60px]" />
                <Skeleton className="h-10 w-full rounded-md" />
            </div>

            <div className="space-y-2">
                <Skeleton className="h-4 w-[90px]" />
                <Skeleton className="h-10 w-full rounded-md" />
            </div>
        </div>
    )
}