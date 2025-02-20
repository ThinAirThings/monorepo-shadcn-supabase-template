import { useNodeKey } from "@/context/node-key-provider";
import { Input } from "@thinair-monorepo-template/ui/components/input"
import { useChat } from "ai/react";


export function ChatInput() {
    const aiChatNodeKey = useNodeKey('AiChats');
    const {handleInputChange, input, id} = useChat({
        id: aiChatNodeKey.id,
    })
    return (
        <div>
            <Input onChange={handleInputChange} value={input} />
        </div>
    )
}