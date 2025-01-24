import { boolean, check, index, integer, json, numeric, pgEnum, pgPolicy, pgTable, text, timestamp, unique, uuid, varchar } from "drizzle-orm/pg-core";
import { base, baseIndexes } from "./base";
import { authUsers } from "drizzle-orm/supabase";
import { sql } from "drizzle-orm";

export const profiles = pgTable('profiles', {
    // Required fields
    ...base,
    id: uuid('id').primaryKey().notNull().references(() => authUsers.id),
    email: text('email').notNull(),
    firstName: text('first_name'),
    lastName: text('last_name'),
    phoneNumber: text('phone_number'),    
}, (table) => [
    ...baseIndexes('profiles', table),
    pgPolicy('profiles_update_policy', {
        'for': 'update',
        using: sql`auth.uid() = id`,
        withCheck: sql`true`
    })
]);


