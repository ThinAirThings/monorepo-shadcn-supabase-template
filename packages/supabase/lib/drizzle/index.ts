

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from "postgres";

export const db = drizzle({
    client: postgres(process.env.DATABASE_URL!, {
        prepare: false
    })
});

