'use client'
import { ComponentChat } from "@/components/components/component-chat"
import { ChatInput } from "@/components/ai-chats/ai-chats-input"
import { NodeKeyProvider } from "@/context/node-key-provider"
import { graphql } from "@/gql"
import { useApolloClient, useFragment, useQuery } from "@apollo/client"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@thinair-monorepo-template/ui/components/resizable"
import { useParams } from "next/navigation"
import invariant from "tiny-invariant"
import { useChat } from "ai/react"
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react"
import { produce } from "immer"

const ComponentEditorPageQuery = graphql(`
    query ComponentEditorPageQuery($componentId: UUID!) {
        componentsCollection(filter: {id: {eq: $componentId}}) {
            edges {
                node {
                    id
                    name
                    aiChatsCollection {
                        edges {
                            node {
                                id
                                ...ComponentChatFragment
                            }
                        }
                    }
                }
            }
        }
    }
`)

export default function ComponentEditorPage() {
    const { componentId } = useParams()
    const {cache} = useApolloClient()
    invariant(componentId, "Component ID is required")
    const { data, loading } = useQuery(ComponentEditorPageQuery, {
        variables: { componentId: componentId as string },
    })
    const aiChatNodeKey = data?.componentsCollection?.edges[0]?.node?.aiChatsCollection?.edges?.[0]?.node
    const {id: chatId} = useChat({
        id: aiChatNodeKey && 'id' in aiChatNodeKey ? aiChatNodeKey.id : undefined,
        generateId: () => uuidv4()
    })

    useEffect(() => {
        if (loading) return
        cache.updateQuery({
            query: ComponentEditorPageQuery,
            variables: { componentId: componentId as string },
        }, (existingData) => produce(existingData, (draft) => {
            const componentDraft = draft?.componentsCollection?.edges[0]?.node
            invariant(componentDraft, "Component not found")
            if (componentDraft.aiChatsCollection?.edges.length) return
            componentDraft.aiChatsCollection = {
                __typename: 'AiChatsConnection',
                edges: [{
                    __typename: 'AiChatsEdge',
                    node: {
                        __typename: 'AiChats',
                        id: chatId as string,
                        aiChatMessagesCollection: {
                            __typename: 'AiChatMessagesConnection',
                            edges: []
                        }
                    }
                }]
            }
            return draft
        }))
    }, [chatId, data, loading])
    if (!data) return null
    return (
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={15} minSize={10} maxSize={30}>
                <NodeKeyProvider node={{__typename: 'AiChats', id: chatId}}>
                    <ComponentChat />
                </NodeKeyProvider>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
                <div className="h-full w-full flex items-center justify-center">Hello</div>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}