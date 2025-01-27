import { db } from "@/lib/drizzle/db"
import { sql } from "drizzle-orm"

interface StorageBucketConfig {
    id: string
    public?: boolean
    policies?: {
        select?: string
        insert?: string
        update?: string
    }
}

export const createStorageBucket = async (config: StorageBucketConfig) => {
    const { id, public: isPublic = false, policies } = config

    // Create bucket
    await db.execute(sql.raw(`
        insert into storage.buckets (id, name, public)
        values ('${id}', '${id}', ${isPublic})
        on conflict (id) do nothing;
    `))

    // Drop existing policies
    await db.execute(sql.raw(`
        drop policy if exists "${id}_select" on storage.objects;
        drop policy if exists "${id}_insert" on storage.objects;
        drop policy if exists "${id}_update" on storage.objects;
    `))

    // Create policies
    if (policies?.select) {
        await db.execute(sql.raw(`
            create policy "${id}_select" on storage.objects
            for select using (${policies.select});
        `))
    }

    if (policies?.insert) {
        await db.execute(sql.raw(`
            create policy "${id}_insert" on storage.objects
            for insert with check (${policies.insert});
        `))
    }

    if (policies?.update) {
        await db.execute(sql.raw(`
            create policy "${id}_update" on storage.objects
            for update using (${policies.update});
        `))
    }

    console.log(`✅ Storage bucket "${id}" configured`)
}