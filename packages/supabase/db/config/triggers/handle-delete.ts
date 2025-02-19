import { db } from "@/lib/drizzle/db";
import { sql } from "drizzle-orm";

export const createOrReplaceDeleteTrigger = async () => {
    await db.execute(sql`
        -- First, create the deleted_record table if it doesn't exist
        CREATE TABLE IF NOT EXISTS deleted_record (
            id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
            data jsonb NOT NULL,
            deleted_at timestamptz NOT NULL DEFAULT current_timestamp,
            object_id uuid NOT NULL,
            table_name varchar(200) NOT NULL,
            updated_at timestamptz NOT NULL DEFAULT current_timestamp
        );

        -- Create the function that will handle the deletion record
        CREATE OR REPLACE FUNCTION deleted_record_insert()
        RETURNS TRIGGER
        LANGUAGE plpgsql
        SECURITY DEFINER
        AS $$
        BEGIN
            -- Insert the deleted record
            INSERT INTO deleted_record (
                data,
                object_id,
                table_name
            )
            VALUES (
                to_jsonb(OLD.*),
                OLD.id,
                TG_TABLE_NAME
            );

            RETURN OLD;
        END;
        $$;

        -- Drop existing function if it exists
        DROP FUNCTION IF EXISTS create_delete_trigger(text);

        -- Function to create the trigger for a specific table
        CREATE OR REPLACE FUNCTION create_delete_trigger(target_table_name text)
        RETURNS void
        LANGUAGE plpgsql
        SECURITY DEFINER
        AS $$
        BEGIN
            -- Create trigger if table exists and has an id column
            IF EXISTS (
                SELECT 1
                FROM information_schema.columns
                WHERE table_schema = 'public'
                AND table_name = target_table_name
                AND column_name = 'id'
            ) THEN
                EXECUTE format('
                    DROP TRIGGER IF EXISTS handle_delete ON %I;
                    CREATE TRIGGER handle_delete
                        AFTER DELETE ON %I
                        FOR EACH ROW
                        EXECUTE FUNCTION deleted_record_insert();
                ', target_table_name, target_table_name);
                
                RAISE NOTICE 'Created delete trigger for table: %', target_table_name;
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
                AND t.tablename != 'deleted_record'  -- Skip the deleted_record table itself
            LOOP
                PERFORM create_delete_trigger(table_record.table_name);
            END LOOP;
        END;
        $$;
    `);

    console.log('✅ Delete triggers configured');
};
