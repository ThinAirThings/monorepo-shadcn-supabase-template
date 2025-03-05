import { Button } from "@thinair-monorepo-template/ui/components/button";
import { Textarea } from "@thinair-monorepo-template/ui/components/textarea";
import { cn } from "@/lib/utils";
import { SendHorizontal } from "lucide-react";
import { KeyboardEvent, useEffect, useRef } from "react";

export function ChatInput({
    input,
    handleInputChange,
    handleSubmit
}: {
    input: string;
    handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    // Auto-resize textarea
    useEffect(() => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        textarea.style.height = 'auto';
        const newHeight = Math.min(textarea.scrollHeight, 12 * 24); // 24px per line, max 12 lines
        textarea.style.height = `${newHeight}px`;
    }, [input]);

    return (
        <div className="border-t border-[#1A1A1A] bg-[#0A0A0A]/50 p-4">
            <div className="mx-auto max-w-3xl">
                <form onSubmit={handleSubmit} className="relative">
                    <Textarea
                        ref={textareaRef}
                        placeholder="Message..."
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              if (input.trim()) {
                                handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
                              }
                            }
                          }}
                        className={cn(
                            "min-h-[96px] w-full resize-none rounded-lg border border-zinc-800",
                            "bg-[#111111] px-4 py-[11px] pr-14",
                            "scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/30",
                            "focus:border-zinc-700 focus:ring-0",
                            "placeholder:text-zinc-400"
                        )}
                    />
                    <div className="absolute bottom-2 right-2">
                        <Button 
                            size="icon"
                            type="submit"
                            className={cn(
                                "h-8 w-8 rounded-lg bg-red-600 p-2 transition-colors text-white",
                                "hover:bg-red-500",
                                "disabled:bg-zinc-800 disabled:cursor-not-allowed"
                            )}
                        >
                            <SendHorizontal className="h-4 w-4" />
                            <span className="sr-only">Send message</span>
                        </Button>
                    </div>
                </form>
                <div className="mt-2 text-xs text-zinc-400 text-center">
                    Press <kbd className="px-1 py-0.5 rounded bg-zinc-800">⌘</kbd> + 
                    <kbd className="px-1 py-0.5 rounded bg-zinc-800">Enter</kbd> to send
                </div>
            </div>
        </div>
    );
}