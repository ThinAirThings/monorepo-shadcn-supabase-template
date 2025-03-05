"use client";

import { Sparkles } from "lucide-react";
import { MemoizedMarkdown } from "./memoized-markdown";
import { useMessage } from "../ai-chats/ai-chat-message-provider";
import { cn } from "@/lib/utils";



export function AiChatMessage() {
    const {message} = useMessage()
    return (
        <div
            key={message.id}
            className={cn(
                "flex",
                message.role === "user" ? "justify-end" : "justify-start",
                "w-full"
            )}
        >
            <div className="flex items-start gap-3 max-w-[95%] break-words">
                {message.role === "assistant" && (
                    <div className="flex-shrink-0 mt-1">
                        <Sparkles className="w-4 h-4 text-white/60" />
                    </div>
                )}
                <div
                    className={cn(
                        "whitespace-pre-wrap overflow-hidden",
                        message.role === "assistant"
                            ? "text-white/90 text-sm"
                            : "bg-gradient-to-r from-orange-900/40 to-orange-500/20 text-orange-200 rounded-lg px-4 py-2"
                    )}
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
