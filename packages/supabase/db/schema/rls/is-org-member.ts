import { sql } from "drizzle-orm";


export const isOrgMember = (orgIdColumn: string) => sql`
    EXISTS (
        SELECT 1
        FROM organization_members om
        WHERE om.organization_id = ${sql.raw(orgIdColumn)}
        AND om.profile_id = auth.uid()
    )
`
