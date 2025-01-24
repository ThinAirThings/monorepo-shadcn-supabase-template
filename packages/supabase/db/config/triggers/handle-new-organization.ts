import { db } from "@/lib/drizzle/db"
import { sql } from "drizzle-orm"

export const createOrReplaceHandleNewOrganizationTrigger = async () => {
    await db.execute(sql`
        -- First, create a function that will handle the insertion
        CREATE OR REPLACE FUNCTION handle_new_organization()
        RETURNS TRIGGER
        LANGUAGE plpgsql
        SECURITY DEFINER  -- This makes the function run with the privileges of its creator
        AS $$
        BEGIN
            -- Disable RLS for this operation
            SET LOCAL rls.force_admin_check = false;
            
            INSERT INTO organization_members (
                id,
                organization_id,
                user_id,
                role,
                created_by,
                updated_by
            )
            VALUES (
                gen_random_uuid(),
                NEW.id,
                NEW.created_by,
                'Owner'::organization_roles,
                NEW.created_by,
                NEW.created_by
            );
            
            RETURN NEW;
        END;
        $$;

        -- Then create the trigger
        DROP TRIGGER IF EXISTS on_organization_created ON organizations;
        CREATE TRIGGER on_organization_created
            AFTER INSERT ON organizations
            FOR EACH ROW
            EXECUTE FUNCTION handle_new_organization();
    `);
};