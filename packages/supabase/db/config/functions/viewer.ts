import { db } from "@/lib/drizzle/db"
import { sql } from "drizzle-orm"

export const createOrReplaceViewerFunction = async () => {
    await db.execute(sql/*sql*/`
        DROP FUNCTION IF EXISTS public.viewer();
        
        CREATE OR REPLACE FUNCTION public.viewer()
        RETURNS public.profiles AS $$
            SELECT profiles.*
            FROM public.profiles
            WHERE id = auth.uid()
            LIMIT 1;
        $$ LANGUAGE sql STABLE;
    `)
}
