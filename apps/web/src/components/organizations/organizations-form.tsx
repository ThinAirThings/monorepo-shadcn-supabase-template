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
import { useEffect, useCallback } from "react"
import { DocumentType, graphql } from "@/gql"
import { zodResolver } from "@hookform/resolvers/zod"
import { Skeleton } from "@thinair-monorepo-template/ui/components/skeleton"
import { FileUpload } from '@ark-ui/react/file-upload'
import { Camera } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@thinair-monorepo-template/ui/components/avatar"
import { UseUIFormReturn } from "@/hooks/use-ui-form"

const formSchema = z.object({
    name: z.string().min(2, "Organization name must be at least 2 characters"),
    profilePicture: z.instanceof(File).optional(),
})

export type OrganizationFormValues = z.infer<typeof formSchema>

const OrganizationFormFragment = graphql(`
    fragment OrganizationFormFragment on Organizations {
        id
        name
        profilePictureUrl
    }
`)

const CreateOrganizationMutation = graphql(`
    mutation CreateOrganization($name: String!, $profilePicture: File) {
        organizationCreate(input: { name: $name, profilePicture: $profilePicture }) {
            id,
            name,
            profilePictureUrl
        }
    }
`)

const UpdateOrganizationMutation = graphql(`
    mutation UpdateOrganization($id: UUID!, $name: String!) {
        updateOrganizationsCollection(
            filter: { id: { eq: $id } }
            set: { 
                name: $name
            }
        ) {
            records {
                ...OrganizationFormFragment
            }
        }
    }
`)

export function OrganizationsForm({ 
    parentFragment,
    mode = "create",
    form,
}: {
    parentFragment?: {__typename: "Organizations"}
    mode?: "create" | "update"
    form: UseUIFormReturn<OrganizationFormValues>
}) {
    const { data } = useFragment({
        fragment: OrganizationFormFragment,
        from: parentFragment ?? null,
    })

    const rhfForm = useForm<OrganizationFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            profilePicture: data?.profilePictureUrl ? new File([], data.profilePictureUrl) : undefined,
        },
        values: {
            name: data?.name ?? "",
            profilePicture: data?.profilePictureUrl ? new File([], data.profilePictureUrl) : undefined,
        }
    })

    const [createOrganization] = useMutation(CreateOrganizationMutation, {
        update: (cache, {data}) => {
            cache.modify({
                fields: {
                    organizationsCollection: (existing) => {
                        return {
                            ...existing,
                            edges: [...existing.edges, {node: data?.organizationCreate}]
                        }
                    }
                }
            })
        }
    })
    const [updateOrganization] = useMutation(UpdateOrganizationMutation)

    useEffect(() => {
        form.setSubmit(async (options) => {
            try {
                form.setMutationLoading(true)
                const values = await rhfForm.trigger()
                if (!values) return

                const formValues = rhfForm.getValues()
                console.log(formValues)
                if (mode === "update") {
                    if (!data?.id) throw new Error("Organization ID not found")
                    await updateOrganization({
                        variables: {
                            id: data.id,
                            ...formValues,
                        },
                    })
                    options?.onSuccess?.()
                } else {
                    await createOrganization({
                        variables: {
                            name: formValues.name,
                            profilePicture: formValues.profilePicture || null,
                        },
                    })
                    options?.onSuccess?.()
                }
            } catch (error) {
                options?.onError?.(error as ApolloError)
            } finally {
                form.setMutationLoading(false)
            }
        })
    }, [rhfForm, createOrganization, data, updateOrganization, mode, form])

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
                                                                            alt={data?.name}
                                                                        />
                                                                        <AvatarFallback className="text-xl relative">
                                                                            {data?.name?.[0]?.toUpperCase() ?? (
                                                                                <Camera className="h-8 w-8 text-muted-foreground" />
                                                                            )}
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
                                                    Click or drag to update logo
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
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Organization Name</FormLabel>
                            <FormControl>
                                <Input 
                                    placeholder="Acme Corporation" 
                                    {...field} 
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

export function OrganizationsFormSkeleton() {
    return (
        <div className="space-y-6 px-2">
            <div className="space-y-2">
                <Skeleton className="h-4 w-[120px]" /> {/* Label */}
                <Skeleton className="h-10 w-full rounded-md" /> {/* Input */}
            </div>
        </div>
    )
}
