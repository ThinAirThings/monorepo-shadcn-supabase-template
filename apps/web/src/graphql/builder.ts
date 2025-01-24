import SchemaBuilder from '@pothos/core';
import DrizzlePlugin from '@pothos/plugin-drizzle';
import { db } from '@usepulse/supabase/drizzle/db';
import * as schema from '@usepulse/supabase/schema';
import { User } from '@supabase/supabase-js';
import { createDrizzleSupabaseClient } from '@usepulse/supabase/drizzle/createDrizzleSupabaseClient';
// Define the types for our schema builder
interface SchemaTypes {
    Context: {
        user: User | null;
        db: ReturnType<typeof createDrizzleSupabaseClient>
        accessToken: string;
    };
    DrizzleSchema: typeof schema;
}

export const builder = new SchemaBuilder<SchemaTypes>({
    plugins: [DrizzlePlugin],
    drizzle: {
        schema,
        client: db
    },
});

// Initialize the base query type with a placeholder field
builder.queryType({
    fields: (t) => ({
        placeholder: t.string({
            resolve: () => 'placeholder'
        })
    })
});
builder.mutationType();
