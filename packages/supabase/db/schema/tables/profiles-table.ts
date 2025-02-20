import { index, pgPolicy, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { authUsers } from "drizzle-orm/supabase";
import { sql } from "drizzle-orm";

export const profiles = pgTable('profiles', {
    // Required fields
    id: uuid('id').primaryKey().notNull().references(() => authUsers.id),
    createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
    email: text('email').notNull(),
    firstName: text('first_name'),
    lastName: text('last_name'),
    phoneNumber: text('phone_number'),    
    profilePictureUrl: text('profile_picture_url'),
}, (table) => [
    pgPolicy('profiles_update_policy', {
        'for': 'update',
        using: sql`auth.uid() = profiles.id`,
        withCheck: sql`true`
    }),
    pgPolicy('profiles_select_policy', {
        'for': 'select',
        using: sql`true`
    }),
    index('profiles_email_idx').on(table.email),
]);