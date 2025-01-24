import { db } from "@/lib/drizzle/db"
import { sql } from "drizzle-orm"

export const createOrReplaceAuditFieldsTrigger = async () => {
    await db.execute(sql`
        -- First, create a function that will handle the audit fields
        CREATE OR REPLACE FUNCTION handle_audit_fields()
        RETURNS TRIGGER
        LANGUAGE plpgsql
        SECURITY DEFINER
        AS $$
        DECLARE
            _user_id uuid;
        BEGIN
            -- Get the current user ID, defaulting to a system user ID if none exists
            _user_id := COALESCE(auth.uid()::uuid, '00000000-0000-0000-0000-000000000000'::uuid);

            -- For inserts, set all audit fields
            IF (TG_OP = 'INSERT') THEN
                NEW.created_at = CURRENT_TIMESTAMP;
                NEW.updated_at = CURRENT_TIMESTAMP;
                NEW.created_by = _user_id;
                NEW.updated_by = _user_id;
                
            -- For updates, only set updated_at and updated_by
            ELSIF (TG_OP = 'UPDATE') THEN
                NEW.updated_at = CURRENT_TIMESTAMP;
                NEW.updated_by = _user_id;
                
                -- Prevent changes to created_at and created_by
                NEW.created_at = OLD.created_at;
                NEW.created_by = OLD.created_by;
            END IF;

            RETURN NEW;
        END;
        $$;

        -- Drop existing function if it exists
        DROP FUNCTION IF EXISTS create_audit_trigger(text);

        -- Function to create the trigger for a specific table
        CREATE FUNCTION create_audit_trigger(target_table_name text)
        RETURNS void
        LANGUAGE plpgsql
        SECURITY DEFINER
        AS $$
        DECLARE
            column_exists boolean;
        BEGIN
            -- Check if all required columns exist using pg_attribute
            SELECT EXISTS (
                SELECT 1
                FROM pg_attribute a
                JOIN pg_class t ON t.oid = a.attrelid
                JOIN pg_namespace s ON s.oid = t.relnamespace
                WHERE s.nspname = 'public'
                AND t.relname = target_table_name
                AND NOT a.attisdropped  -- Ensure column hasn't been dropped
                AND a.attnum > 0        -- Exclude system columns
                AND a.attname IN ('created_at', 'updated_at', 'created_by', 'updated_by')
                GROUP BY t.relname
                HAVING COUNT(DISTINCT a.attname) = 4
            ) INTO column_exists;

            -- Create trigger if all columns exist
            IF column_exists THEN
                EXECUTE format('
                    DROP TRIGGER IF EXISTS handle_audit_fields ON %I;
                    CREATE TRIGGER handle_audit_fields
                        BEFORE INSERT OR UPDATE ON %I
                        FOR EACH ROW
                        EXECUTE FUNCTION handle_audit_fields();
                ', target_table_name, target_table_name);
                
                RAISE NOTICE 'Created audit trigger for table: %', target_table_name;
            END IF;
        END;
        $$;

        -- Apply triggers to all tables in public schema
        DO $$
        DECLARE
            table_record record;
        BEGIN
            FOR table_record IN 
                SELECT t.tablename::text as table_name
                FROM pg_tables t
                WHERE t.schemaname = 'public'
                AND t.tablename NOT LIKE 'pg_%'
                AND t.tablename NOT LIKE '_prisma_%'
            LOOP
                PERFORM create_audit_trigger(table_record.table_name);
            END LOOP;
        END;
        $$;
    `);

    console.log('✅ Audit triggers configured');
}; 