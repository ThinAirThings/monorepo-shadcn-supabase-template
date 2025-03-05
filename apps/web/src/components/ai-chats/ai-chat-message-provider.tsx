"use client";

import { createContext, memo, useContext, useMemo } from 'react';
import { useChat } from 'ai/react';
import { UIMessage } from './types/UIMessage';
import { useNodeKey } from '@/context/node-key-provider';



const MessageContext = createContext<{
    message: UIMessage,
} | undefined>(undefined);

export function useMessage() {
    const context = useContext(MessageContext);
    if (!context) {
        throw new Error('useMessage must be used within a MessageProvider');
    }
    return context;
}


export function MessageProvider({ message, children }: {
    message: UIMessage
    children: React.ReactNode
}) {
    const memoizedMessage = useMemo(() => ({message}), [message])
    return (
        <MessageContext.Provider value={memoizedMessage}>
            {children}
        </MessageContext.Provider>
    );
}