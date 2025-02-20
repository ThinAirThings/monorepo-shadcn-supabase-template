'use client'

import { useForm } from "react-hook-form"
import { z } from "zod"
import { ApolloError, useMutation } from "@apollo/client"
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
import { graphql } from "@/gql"
import { zodResolver } from "@hookform/resolvers/zod"
import { Skeleton } from "@thinair-monorepo-template/ui/components/skeleton"
import { UseUIFormReturn } from "@/hooks/use-ui-form"
import { useNodeKey } from "@/context/node-key-provider"
import { v4 as uuidv4 } from 'uuid';
import { produce } from "immer"
import { ProjectsQuery } from "./projects-combobox"
const formSchema = z.object({
    name: z.string().min(2, "Project name must be at least 2 characters"),
    notes: z.string().optional(),
    memberIds: z.array(z.string()).default([]),
    templateId: z.string().optional(),
})

export type ProjectFormValues = z.infer<typeof formSchema>

const CreateProjectMutation = graphql(`
    mutation CreateProject($input: ProjectsInsertInput!) {
        insertIntoProjectsCollection(objects: [$input]) {
            records {
                id
                name
                organizationId
                profileId
            }
        }
    }
`)

export function ProjectsForm({ 
    form,
}: {
    form: UseUIFormReturn<ProjectFormValues>
}) {
    const profileNodeKey = useNodeKey('Profiles')
    const organizationNodeKey = useNodeKey('Organizations', {isInvariant: false})

    const rhfForm = useForm<ProjectFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ""
        },
    })

    const [createProject] = useMutation(CreateProjectMutation)

    useEffect(() => {
        form.setSubmit(async (options) => {
            try {
                form.setMutationLoading(true)
                const values = await rhfForm.trigger()
                if (!values) return
                const formValues = rhfForm.getValues()
                const newProjectId = uuidv4()
                await createProject({
                    variables: {
                        input: {
                            id: newProjectId,
                            name: formValues.name,
                            ...(organizationNodeKey ? { organizationId: organizationNodeKey.id } : { profileId: profileNodeKey.id }),
                        }
                    },
                    optimisticResponse: () => ({
                        __typename: 'Mutation',
                        insertIntoProjectsCollection: {
                            __typename: 'ProjectsInsertResponse',
                            records: [{
                                __typename: 'Projects',
                                id: newProjectId,
                                name: formValues.name,
                                organizationId: organizationNodeKey?.id ?? null,
                                profileId: profileNodeKey.id,
                            }]
                        }
                    }),
                    update: (cache, { data: optimisticData }) => {
                        cache.updateQuery({
                            query: ProjectsQuery,
                            variables: {
                                ...(organizationNodeKey ? { organizationId: organizationNodeKey.id } : { profileId: profileNodeKey.id }),
                            },
                        }, (data) => produce(data, (draft) => {
                            const newProject = optimisticData?.insertIntoProjectsCollection?.records[0]
                            if (!draft || !newProject) return
                            draft.projectsCollection?.edges?.push({
                                __typename: 'ProjectsEdge',
                                node: newProject,
                            })
                        }))
                    }
                })
                options?.onSuccess?.()
            } catch (error) {
                options?.onError?.(error as ApolloError)
            } finally {
                form.setMutationLoading(false)
            }
        })
    }, [rhfForm, createProject, organizationNodeKey, form, profileNodeKey])

    return (
        <Form {...rhfForm}>
            <div className="space-y-6 px-2">
                <FormField
                    control={rhfForm.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Project Name</FormLabel>
                            <FormControl>
                                <Input 
                                    placeholder="My Project" 
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

export function ProjectsFormSkeleton() {
    return (
        <div className="space-y-6 px-2">
            <div className="space-y-2">
                <Skeleton className="h-4 w-[100px]" /> {/* Label */}
                <Skeleton className="h-10 w-full rounded-md" /> {/* Input */}
            </div>

            <div className="space-y-2">
                <Skeleton className="h-4 w-[100px]" /> {/* Label */}
                <Skeleton className="h-24 w-full rounded-md" /> {/* Textarea */}
            </div>

            <div className="space-y-2">
                <Skeleton className="h-4 w-[100px]" /> {/* Label */}
                <Skeleton className="h-10 w-full rounded-md" /> {/* Multiselect */}
            </div>
        </div>
    )
}
