import { db } from "@/lib/drizzle/db"
import { sql } from "drizzle-orm"

export const createOrReplaceIsOrgManagerFunction = async () => {
    await db.execute(sql`
        CREATE OR REPLACE FUNCTION public.is_org_manager(
            _organization_id uuid,
            _profile_id uuid
        ) RETURNS boolean
        LANGUAGE sql
        STABLE
        SECURITY DEFINER
        SET search_path = ''
        AS $$
            -- This query runs as the function owner, bypassing RLS on organization_members
            SELECT EXISTS (
                SELECT 1
                FROM public.organization_members om
                WHERE om.organization_id = _organization_id
                  AND om.profile_id = _profile_id
                  AND om.role IN ('Owner', 'Administrator')
            );
        $$;
    `)
}
