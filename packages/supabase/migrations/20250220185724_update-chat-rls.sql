DROP POLICY "ai_chat_select_policy" ON "ai_chats" CASCADE;--> statement-breakpoint
DROP POLICY "ai_chat_insert_policy" ON "ai_chats" CASCADE;--> statement-breakpoint
DROP POLICY "ai_chat_update_policy" ON "ai_chats" CASCADE;--> statement-breakpoint
DROP POLICY "ai_chat_delete_policy" ON "ai_chats" CASCADE;--> statement-breakpoint
CREATE POLICY "ai_chat_all_policy" ON "ai_chats" AS PERMISSIVE FOR ALL TO public USING (
            (
                ai_chats.project_id IS NOT NULL 
                AND EXISTS (
        SELECT 1
        FROM projects p
        LEFT JOIN organization_members om ON om.organization_id = p.organization_id
        WHERE p.id = ai_chats.project_id
        AND (
            (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
            OR
            (p.organization_id IS NULL AND p.profile_id = auth.uid())
        )
    )
    
            )
        OR
        (
            ai_chats.component_id IS NOT NULL 
            AND EXISTS (
        SELECT 1
        FROM projects p
        LEFT JOIN organization_members om ON om.organization_id = p.organization_id
        WHERE p.id = (SELECT project_id FROM components WHERE id = ai_chats.component_id)
        AND (
            (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
            OR
            (p.organization_id IS NULL AND p.profile_id = auth.uid())
        )
    )
    
        )
        );