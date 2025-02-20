import { index, pgPolicy, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { base } from "../base";
import { projects } from "./projects-table";
import { canAccessProject } from "../rls/can-access-project";
import { components } from "./components-table";
import { canAccessAiChat } from "../rls/can-access-ai-chat";
import { sql } from "drizzle-orm";

// Parent table for chat sessions
export const aiChats = pgTable('ai_chats', {
    ...base,
    name: text('name').notNull(),
    projectId: uuid('project_id').references(() => projects.id),
    componentId: uuid('component_id').references(() => components.id),
}, (table) => [
    index('ai_chat_project_id_idx').on(table.projectId),
    index('ai_chat_component_id_idx').on(table.componentId),
    // RLS policies following project access patterns
    pgPolicy("ai_chat_select_policy", {
        for: "select",
        using: canAccessAiChat("ai_chats.id"),
    }),
    pgPolicy("ai_chat_insert_policy", {
        for: "insert",
        withCheck: sql`
        (
            ai_chats.project_id IS NOT NULL 
            AND ${canAccessProject("ai_chats.project_id")}
        )
        OR
        (
            ai_chats.component_id IS NOT NULL 
            AND ${canAccessProject("(SELECT project_id FROM components WHERE id = ai_chats.component_id)")}
        )
        `
    }),
    pgPolicy("ai_chat_update_policy", {
        for: "update",
        using: canAccessAiChat("ai_chats.id"),
    }),
    pgPolicy("ai_chat_delete_policy", {
        for: "delete",
        using: canAccessAiChat("ai_chats.id"),
    }),
])