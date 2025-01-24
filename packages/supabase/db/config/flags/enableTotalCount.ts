import { db } from "@/lib/drizzle/db"
import { sql } from "drizzle-orm"

export const enableTotalCountForAllTables = async () => {
    await db.execute(sql/*sql*/`
        DO $$
        DECLARE
            table_name text;
            current_comment text;
        BEGIN
            FOR table_name IN
                SELECT tablename
                FROM pg_tables
                WHERE schemaname = 'public'
            LOOP
                -- Get current comment
                SELECT obj_description(
                    (quote_ident(schemaname) || '.' || quote_ident(tablename))::regclass, 'pg_class'
                )
                INTO current_comment
                FROM pg_tables
                WHERE schemaname = 'public' AND tablename = table_name;

                -- Only update if totalCount is not already enabled
                IF current_comment IS NULL
                   OR current_comment NOT LIKE '%"totalCount": {"enabled": true}%' THEN
                    EXECUTE format(
                        'COMMENT ON TABLE %I IS ''@graphql({"totalCount": {"enabled": true}})'';',
                        table_name
                    );
                END IF;
            END LOOP;
        END;
        $$ LANGUAGE plpgsql;
    `)
}
