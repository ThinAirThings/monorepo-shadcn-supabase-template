ALTER TABLE "ai_chats" ADD COLUMN "component_id" uuid;--> statement-breakpoint
ALTER TABLE "ai_chats" ADD CONSTRAINT "ai_chats_component_id_components_id_fk" FOREIGN KEY ("component_id") REFERENCES "public"."components"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "ai_chat_component_id_idx" ON "ai_chats" USING btree ("component_id");--> statement-breakpoint
ALTER POLICY "ai_chat_select_policy" ON "ai_chats" TO public USING (
    EXISTS (
      SELECT 1 
      FROM ai_chats ac
      LEFT JOIN projects p ON p.id = ac.project_id
      LEFT JOIN components c ON c.id = ac.component_id
      LEFT JOIN projects cp ON cp.id = c.project_id
      LEFT JOIN organization_members om ON 
        om.organization_id = COALESCE(p.organization_id, cp.organization_id)
      WHERE ac.id = ai_chats.id
        AND (
          (
            ac.project_id IS NOT NULL 
            AND (
              (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
              OR (p.organization_id IS NULL AND p.profile_id = auth.uid())
            )
          )
          OR
          (
            ac.component_id IS NOT NULL 
            AND (
              (cp.organization_id IS NOT NULL AND om.profile_id = auth.uid())
              OR (cp.organization_id IS NULL AND cp.profile_id = auth.uid())
            )
          )
        )
    )
);--> statement-breakpoint
ALTER POLICY "ai_chat_insert_policy" ON "ai_chats" TO public WITH CHECK (
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
        );--> statement-breakpoint
ALTER POLICY "ai_chat_update_policy" ON "ai_chats" TO public USING (
    EXISTS (
      SELECT 1 
      FROM ai_chats ac
      LEFT JOIN projects p ON p.id = ac.project_id
      LEFT JOIN components c ON c.id = ac.component_id
      LEFT JOIN projects cp ON cp.id = c.project_id
      LEFT JOIN organization_members om ON 
        om.organization_id = COALESCE(p.organization_id, cp.organization_id)
      WHERE ac.id = ai_chats.id
        AND (
          (
            ac.project_id IS NOT NULL 
            AND (
              (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
              OR (p.organization_id IS NULL AND p.profile_id = auth.uid())
            )
          )
          OR
          (
            ac.component_id IS NOT NULL 
            AND (
              (cp.organization_id IS NOT NULL AND om.profile_id = auth.uid())
              OR (cp.organization_id IS NULL AND cp.profile_id = auth.uid())
            )
          )
        )
    )
);--> statement-breakpoint
ALTER POLICY "ai_chat_delete_policy" ON "ai_chats" TO public USING (
    EXISTS (
      SELECT 1 
      FROM ai_chats ac
      LEFT JOIN projects p ON p.id = ac.project_id
      LEFT JOIN components c ON c.id = ac.component_id
      LEFT JOIN projects cp ON cp.id = c.project_id
      LEFT JOIN organization_members om ON 
        om.organization_id = COALESCE(p.organization_id, cp.organization_id)
      WHERE ac.id = ai_chats.id
        AND (
          (
            ac.project_id IS NOT NULL 
            AND (
              (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
              OR (p.organization_id IS NULL AND p.profile_id = auth.uid())
            )
          )
          OR
          (
            ac.component_id IS NOT NULL 
            AND (
              (cp.organization_id IS NOT NULL AND om.profile_id = auth.uid())
              OR (cp.organization_id IS NULL AND cp.profile_id = auth.uid())
            )
          )
        )
    )
);--> statement-breakpoint
ALTER POLICY "ai_chat_messages_select_policy" ON "ai_chat_messages" TO public USING (
    EXISTS (
      SELECT 1 
      FROM ai_chats ac
      LEFT JOIN projects p ON p.id = ac.project_id
      LEFT JOIN components c ON c.id = ac.component_id
      LEFT JOIN projects cp ON cp.id = c.project_id
      LEFT JOIN organization_members om ON 
        om.organization_id = COALESCE(p.organization_id, cp.organization_id)
      WHERE ac.id = ai_chat_messages.chat_id
        AND (
          (
            ac.project_id IS NOT NULL 
            AND (
              (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
              OR (p.organization_id IS NULL AND p.profile_id = auth.uid())
            )
          )
          OR
          (
            ac.component_id IS NOT NULL 
            AND (
              (cp.organization_id IS NOT NULL AND om.profile_id = auth.uid())
              OR (cp.organization_id IS NULL AND cp.profile_id = auth.uid())
            )
          )
        )
    )
);--> statement-breakpoint
ALTER POLICY "ai_chat_messages_insert_policy" ON "ai_chat_messages" TO public WITH CHECK (
    EXISTS (
      SELECT 1 
      FROM ai_chats ac
      LEFT JOIN projects p ON p.id = ac.project_id
      LEFT JOIN components c ON c.id = ac.component_id
      LEFT JOIN projects cp ON cp.id = c.project_id
      LEFT JOIN organization_members om ON 
        om.organization_id = COALESCE(p.organization_id, cp.organization_id)
      WHERE ac.id = ai_chat_messages.chat_id
        AND (
          (
            ac.project_id IS NOT NULL 
            AND (
              (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
              OR (p.organization_id IS NULL AND p.profile_id = auth.uid())
            )
          )
          OR
          (
            ac.component_id IS NOT NULL 
            AND (
              (cp.organization_id IS NOT NULL AND om.profile_id = auth.uid())
              OR (cp.organization_id IS NULL AND cp.profile_id = auth.uid())
            )
          )
        )
    )
);--> statement-breakpoint
ALTER POLICY "ai_chat_messages_update_policy" ON "ai_chat_messages" TO public USING (
    EXISTS (
      SELECT 1 
      FROM ai_chats ac
      LEFT JOIN projects p ON p.id = ac.project_id
      LEFT JOIN components c ON c.id = ac.component_id
      LEFT JOIN projects cp ON cp.id = c.project_id
      LEFT JOIN organization_members om ON 
        om.organization_id = COALESCE(p.organization_id, cp.organization_id)
      WHERE ac.id = ai_chat_messages.chat_id
        AND (
          (
            ac.project_id IS NOT NULL 
            AND (
              (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
              OR (p.organization_id IS NULL AND p.profile_id = auth.uid())
            )
          )
          OR
          (
            ac.component_id IS NOT NULL 
            AND (
              (cp.organization_id IS NOT NULL AND om.profile_id = auth.uid())
              OR (cp.organization_id IS NULL AND cp.profile_id = auth.uid())
            )
          )
        )
    )
);--> statement-breakpoint
ALTER POLICY "ai_chat_messages_delete_policy" ON "ai_chat_messages" TO public USING (
    EXISTS (
      SELECT 1 
      FROM ai_chats ac
      LEFT JOIN projects p ON p.id = ac.project_id
      LEFT JOIN components c ON c.id = ac.component_id
      LEFT JOIN projects cp ON cp.id = c.project_id
      LEFT JOIN organization_members om ON 
        om.organization_id = COALESCE(p.organization_id, cp.organization_id)
      WHERE ac.id = ai_chat_messages.chat_id
        AND (
          (
            ac.project_id IS NOT NULL 
            AND (
              (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
              OR (p.organization_id IS NULL AND p.profile_id = auth.uid())
            )
          )
          OR
          (
            ac.component_id IS NOT NULL 
            AND (
              (cp.organization_id IS NOT NULL AND om.profile_id = auth.uid())
              OR (cp.organization_id IS NULL AND cp.profile_id = auth.uid())
            )
          )
        )
    )
);