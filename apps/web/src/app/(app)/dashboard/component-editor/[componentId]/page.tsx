'use client'
import { ComponentChat } from "@/components/components/component-chat"
import { ChatInput } from "@/components/interface-chat/chat-input"
import { NodeKeyProvider } from "@/context/node-key-provider"
import { graphql } from "@/gql"
import { useFragment, useQuery } from "@apollo/client"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@thinair-monorepo-template/ui/components/resizable"
import { useParams } from "next/navigation"
import invariant from "tiny-invariant"


const ComponentEditorPageQuery = graphql(`
    query ComponentEditorPageQuery($componentId: UUID!) {
        componentsCollection(filter: {id: {eq: $componentId}}) {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
`)

const SingleComponentChatFragment = graphql(`
    fragment SingleComponentChatFragment on Components {
        id
        aiChatsCollection {
            edges {
                node {
                    id
                }
            }
        }
    }
`)


export default function ComponentEditorPage() {
    const { componentId } = useParams()
    invariant(componentId, "Component ID is required")
    const { data, loading } = useQuery(ComponentEditorPageQuery, {
        variables: { componentId: componentId as string },
    })
    const {data: componentData, complete} = useFragment(({
        fragment: SingleComponentChatFragment,
        from: data?.componentsCollection?.edges[0]?.node ?? null
    }))
    const aiChat = complete && componentData?.aiChatsCollection?.edges?.[0]?.node
    return (
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel>
                <NodeKeyProvider node={(aiChat) ? {__typename: 'AiChats', id: aiChat.id} : null}>
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