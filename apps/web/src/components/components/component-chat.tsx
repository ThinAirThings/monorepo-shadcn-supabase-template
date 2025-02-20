import { NodeKeyProvider, useNodeKey } from "@/context/node-key-provider";
import { useChat } from "ai/react"
import { v4 as uuidv4 } from 'uuid';




export function ComponentChat() {
    const aiChatNodeKey = useNodeKey('AiChats', {isInvariant: false});
    const {id: chatId} = useChat({
        id: aiChatNodeKey?.id,
        generateId: () => uuidv4()
    })
    return (
        <NodeKeyProvider node={{__typename: 'AiChats', id: chatId}}>
            <div className="h-full w-full flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Component Chat</h1>
                    <p className="text-muted-foreground">
                        This is the component chat.
                    </p>
                </div>
            </div>
        </NodeKeyProvider>
    )
}