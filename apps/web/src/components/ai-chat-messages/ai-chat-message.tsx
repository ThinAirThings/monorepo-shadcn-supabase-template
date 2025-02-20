"use client";

import { Sparkles } from "lucide-react";
import { MemoizedMarkdown } from "./memoized-markdown";
import { useFragment } from "@apollo/client";
import { graphql } from "@/gql";
import { useNodeKey } from "@/context/node-key-provider";

const AiChatMessageFragment = graphql(`
    fragment AiChatMessageFragment on AiChatMessages {
        id
        content
        role
    }
`)
export function AiChatMessage() {
    const aiChatMessageNodeKey = useNodeKey('AiChatMessages')
    const {data: message} = useFragment({
        fragment: AiChatMessageFragment,
        fragmentName: 'AiChatMessageFragment',
        from: aiChatMessageNodeKey,
    })
    console.log(message)
    return (
        <div
            key={message.id}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
        >
            <div className="flex items-start gap-3 max-w-[80%]">
                {message.role === "assistant" && (
                    <div className="flex-shrink-0 mt-1">
                        <Sparkles className="w-4 h-4 text-white/60" />
                    </div>
                )}
                <div
                    className={
                    message.role === "assistant"
                        ? "text-white/90 text-sm"
                        : "bg-gradient-to-r from-orange-900/40 to-orange-500/20 text-orange-200 rounded-lg px-4 py-2"
                    }
                >
                    {message.role === "assistant" 
                        ? (
                            <MemoizedMarkdown
                                key={message.id}
                                content={message.content ?? ''}
                                id={message.id ?? ''}
                            />
                        ) 
                        : (
                            <div className="text-sm">{message.content}</div>
                        )
                    }
                </div>
            </div>
      </div>
    );
}
