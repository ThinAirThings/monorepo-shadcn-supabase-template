import { NodeKeyProvider, useNodeKey } from "@/context/node-key-provider";
import { graphql } from "@/gql";
import { cn } from "@/lib/utils";
import { useApolloClient, useFragment } from "@apollo/client";
import { Separator } from "@thinair-monorepo-template/ui/components/separator";
import { useChat } from "ai/react"
import { produce } from "immer";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { AiChatMessage } from "../ai-chat-messages/ai-chat-message";


const ComponentChatFragment = graphql(`
    fragment ComponentChatFragment on AiChats {
        id
        aiChatMessagesCollection {
            edges {
                node {
                    id
                    content
                    role
                }
            }
        }
    }
`)

export function ComponentChat() {
    const {cache} = useApolloClient()
    const aiChatNodeKey = useNodeKey('AiChats');
    const {data, complete} = useFragment({
        from: aiChatNodeKey,
        fragment: ComponentChatFragment,
        fragmentName: 'ComponentChatFragment',
    })
    const cacheMessages = complete ? 
        data?.aiChatMessagesCollection?.edges?.map(edge => edge?.node) ?? []
        : []
    const {id: chatId, messages: aiSdkChatMessages} = useChat({
        id: aiChatNodeKey.id,
        initialMessages: cacheMessages?.length > 0 ? cacheMessages : [{id: '1', role: 'assistant', content: 'Hello, how can I help you today?'}]
    })
    useEffect(() => {
        if (aiSdkChatMessages.length === cacheMessages.length) return 
        cache.updateFragment({
            id: cache.identify(aiChatNodeKey),
            fragment: ComponentChatFragment,
            fragmentName: 'ComponentChatFragment',
        }, (existingData) => produce(existingData, (draft) => {
            if (!draft || !draft.aiChatMessagesCollection) return
            const messages = aiSdkChatMessages.map(message => ({
                __typename: 'AiChatMessagesEdge' as const,
                node: {
                    __typename: 'AiChatMessages' as const,
                    id: message.id,
                    content: message.content,
                    role: message.role
                }
            }))
            messages.forEach(message => {
                if (!draft.aiChatMessagesCollection) return
                draft.aiChatMessagesCollection.edges.push(message)
            })
        }))
    }, [aiSdkChatMessages, cache, aiChatNodeKey, data, complete])
    const [scrollRef, setScrollRef] = useState<HTMLDivElement | null>(null);
    return (
        <NodeKeyProvider node={{__typename: 'AiChats', id: chatId}}>
            <div className="flex-1 flex flex-col">
                <div className="p-4">
                    <h1 className="text-md font-semibold">Component Chat</h1>
                </div>
                <Separator className="mb-4" />
                    {/* Scrollable Chat Messages */}
                    <div 
                        ref={setScrollRef}
                        className={cn(
                            "flex flex-col flex-1 px-8 py-6 overflow-y-auto gap-4",
                            "scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent",
                            "hover:scrollbar-thumb-white/20 transition-colors"
                        )}
                    >
                        {aiSdkChatMessages.map((message) => (
                            <NodeKeyProvider key={message.id} node={{__typename: 'AiChatMessages', id: message.id}}>
                                <AiChatMessage />
                            </NodeKeyProvider>
                        ))}
                    </div>
            </div>
        </NodeKeyProvider>
    )
}