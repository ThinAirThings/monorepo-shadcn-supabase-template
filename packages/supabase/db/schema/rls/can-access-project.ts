import { sql } from "drizzle-orm"



export const canAccessProject = (projectIdColumn: string) => {
    return sql`EXISTS (
        SELECT 1
        FROM projects p
        LEFT JOIN organization_members om ON om.organization_id = p.organization_id
        WHERE p.id = ${sql.raw(projectIdColumn)}
        AND (
            (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
            OR
            (p.organization_id IS NULL AND p.profile_id = auth.uid())
        )
    )
    `
}