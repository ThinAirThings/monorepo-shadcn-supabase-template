import { NodeKeyProvider, useNodeKey } from "@/context/node-key-provider";
import { graphql } from "@/gql";
import { cn } from "@/lib/utils";
import { useApolloClient, useFragment } from "@apollo/client";
import { Separator } from "@thinair-monorepo-template/ui/components/separator";
import { useChat } from "@ai-sdk/react"
import { produce } from "immer";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { AiChatMessage } from "../ai-chat-messages/ai-chat-message";
import { MessageProvider } from "../ai-chats/ai-chat-message-provider";
import { UIMessage } from "../ai-chats/types/UIMessage";
import { ChatInput } from "../ai-chats/ai-chats-input";
import { useIFrame } from "@/app/(app)/dashboard/component-editor/[componentId]/page";


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
    const componentNodeKey = useNodeKey('Components');
    const aiChatNodeKey = useNodeKey('AiChats');
    const {data, complete} = useFragment({
        from: aiChatNodeKey,
        fragment: ComponentChatFragment,
        fragmentName: 'ComponentChatFragment',
    })
    const cacheMessages = complete ? 
        data?.aiChatMessagesCollection?.edges?.map(edge => edge?.node) ?? []
        : []
    const {
        id: chatId, 
        messages: aiSdkChatMessages,
        input,
        handleInputChange,
        handleSubmit,
        status
    } = useChat({
        api: '/api/component-chat',
        id: aiChatNodeKey.id,
        initialMessages: cacheMessages?.length > 0 ? cacheMessages : [{id: '1', role: 'assistant', content: 'Hello, how can I help you today?'}],
        body: {
            componentId: componentNodeKey.id,
        }
    })
    const [scrollRef, setScrollRef] = useState<HTMLDivElement | null>(null);
    const iframe = useIFrame()
    useEffect(() => {
        if (!iframe || status !== 'ready') return;
        iframe.contentWindow?.postMessage({type: 'reload'}, '*')
    }, [iframe, status])
    return (
        <NodeKeyProvider node={{__typename: 'AiChats', id: chatId}}>
            <div className="grid grid-rows-[auto_auto_1fr_auto] h-full">
                <div className="p-4">
                    <h1 className="text-md font-semibold">Component Chat</h1>
                </div>
                <Separator className="mb-4" />
                {/* Scrollable Chat Messages */}
                <div 
                    ref={setScrollRef}
                    className={cn(
                        "flex flex-col flex-1 px-2 py-6 overflow-y-auto gap-4",
                        "scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent",
                        "hover:scrollbar-thumb-white/20 transition-colors",
                        "w-full h-full"
                    )}
                >
                    {aiSdkChatMessages.map((message) => (
                        <MessageProvider key={message.id} message={message as UIMessage}>
                            <AiChatMessage />
                        </MessageProvider>
                    ))}
                </div>
                <ChatInput 
                    input={input}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                />
            </div>
        </NodeKeyProvider>
    )
}