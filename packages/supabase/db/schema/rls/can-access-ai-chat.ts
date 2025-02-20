import { sql } from "drizzle-orm";



export const canAccessAiChat = (chatIdColumn: string) => sql`
    EXISTS (
      SELECT 1 
      FROM ai_chats ac
      LEFT JOIN projects p ON p.id = ac.project_id
      LEFT JOIN components c ON c.id = ac.component_id
      LEFT JOIN projects cp ON cp.id = c.project_id
      LEFT JOIN organization_members om ON 
        om.organization_id = COALESCE(p.organization_id, cp.organization_id)
      WHERE ac.id = ${sql.raw(chatIdColumn)}
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
`