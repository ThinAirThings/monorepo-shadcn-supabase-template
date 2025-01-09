import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { authUsers } from "drizzle-orm/supabase"
import { base, baseIndexes } from "./base";


export * from "./rbac"

export const users = pgTable('profiles', {
    // Required fields
    ...base,
    id: uuid('id').primaryKey().notNull().references(() => authUsers.id),
    firstName: text('first_name'),
    lastName: text('last_name'),
    phoneNumber: text('phone_number'),    
}, (table) => [
    ...baseIndexes(table),
]).enableRLS();


