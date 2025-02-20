'use client'

import { useForm } from "react-hook-form"
import { z } from "zod"
import { ApolloError, DocumentNode, TypedDocumentNode, useMutation } from "@apollo/client"
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
import { UseUIFormReturn } from "@/hooks/use-ui-form"
import { useNodeKey } from "@/context/node-key-provider"
import { v4 as uuidv4 } from 'uuid';
import { produce } from "immer"
import { ComponentsCollectionFragment } from "@/fragments/components-collection-fragment"
import { Skeleton } from "@thinair-monorepo-template/ui/components/skeleton"

const formSchema = z.object({
    name: z.string().min(2, "Component name must be at least 2 characters"),
})

export type ComponentFormValues = z.infer<typeof formSchema>

const CreateComponentMutation = graphql(`
    mutation CreateComponent($input: ComponentsInsertInput!) {
        insertIntoComponentsCollection(objects: [$input]) {
            records {
                id
                name
                projectId
            }
        }
    }
`)

export function ComponentsForm({ 
    form,
}: {
    form: UseUIFormReturn<ComponentFormValues>
}) {
    const projectNodeKey = useNodeKey('Projects')

    const rhfForm = useForm<ComponentFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ""
        },
    })

    const [createComponent] = useMutation(CreateComponentMutation)

    useEffect(() => {
        form.setSubmit(async (options) => {
            try {
                form.setMutationLoading(true)
                const values = await rhfForm.trigger()
                if (!values) return
                const formValues = rhfForm.getValues()
                const newComponentId = uuidv4()
                await createComponent({
                    variables: {
                        input: {
                            id: newComponentId,
                            name: formValues.name,
                            projectId: projectNodeKey.id,
                        }
                    },
                    optimisticResponse: (data) => ({
                        __typename: 'Mutation',
                        insertIntoComponentsCollection: {
                            __typename: 'ComponentsInsertResponse',
                            records: [{
                                __typename: 'Components',
                                id: newComponentId,
                                name: formValues.name,
                                projectId: projectNodeKey.id,
                            }]
                        }
                    }),
                    update: (cache, { data: optimisticData }) => {
                        cache.updateFragment({
                            id: cache.identify(projectNodeKey),
                            fragment: ComponentsCollectionFragment,
                            fragmentName: 'ComponentsCollectionFragment',
                        }, (data) => produce(data, (draft) => {
                            const newComponent = optimisticData?.insertIntoComponentsCollection?.records[0]
                            if (!draft || !newComponent) return
                            draft.componentsCollection?.edges?.push({
                                __typename: 'ComponentsEdge',
                                node: newComponent,
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
    }, [form, rhfForm, createComponent, projectNodeKey])

    return (
        <Form {...rhfForm}>
            <form className="space-y-6">
                <FormField
                    control={rhfForm.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="My Component" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}

export function ComponentsFormSkeleton() {
    return (
        <div className="space-y-6">
            <div>
                <Skeleton className="h-4 w-[100px] mb-2" />
                <Skeleton className="h-10 w-full rounded-md" />
            </div>
        </div>
    )
}




