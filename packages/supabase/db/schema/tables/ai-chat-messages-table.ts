import { pgEnum, pgPolicy, pgTable, uuid } from "drizzle-orm/pg-core";
import { base } from "../base";
import { aiChats } from "./ai-chats-table";
import { text, json, index } from "drizzle-orm/pg-core";
import { canAccessAiChat } from "../rls/can-access-ai-chat";


// Enum for message roles
export const messageRoles = pgEnum('message_roles', ['system', 'user', 'assistant', 'data']);

// Enum for message part types
export const messagePartTypes = pgEnum('message_part_types', ['text', 'reasoning', 'tool_invocation']);

// Enum for tool invocation states
export const toolInvocationStates = pgEnum('tool_invocation_states', ['partial_call', 'call', 'result']);


// Child table for individual messages
export const aiChatMessages = pgTable('ai_chat_messages', {
    ...base,
    chatId: uuid('chat_id').references(() => aiChats.id).notNull(),
    // Message fields
    role: messageRoles('role').notNull(),
    content: text('content').notNull(),
    annotations: json('annotations'),
    parts: json('parts').notNull(), // Array<MessagePart>
    attachments: json('attachments'), // Array<Attachment>
}, (table) => [
    index('ai_chat_messages_chat_id_idx').on(table.chatId),
    // RLS policies that check parent chat access
    pgPolicy('ai_chat_messages_select_policy', {
        'for': 'select',
        using: canAccessAiChat("ai_chat_messages.chat_id")
    }),
    pgPolicy('ai_chat_messages_insert_policy', {
        'for': 'insert',
        withCheck: canAccessAiChat("ai_chat_messages.chat_id")
    }),
    pgPolicy('ai_chat_messages_update_policy', {
        'for': 'update',
        using: canAccessAiChat("ai_chat_messages.chat_id")
    }),
    pgPolicy('ai_chat_messages_delete_policy', {
        'for': 'delete',
        using: canAccessAiChat("ai_chat_messages.chat_id")
    }),
]);