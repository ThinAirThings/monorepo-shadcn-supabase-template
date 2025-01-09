import { sql, type ColumnBaseConfig, type ColumnDataType } from "drizzle-orm";
import { uuid, timestamp, index, ExtraConfigColumn } from "drizzle-orm/pg-core";
import { authUsers } from "drizzle-orm/supabase";

export const base = {
    id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
    createdBy: uuid('created_by').references(() => authUsers.id).notNull(),
    updatedBy: uuid('updated_by').references(() => authUsers.id),
    createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
    deletedAt: timestamp("deleted_at", { withTimezone: true, mode: 'string' }),
} as const


export const baseIndexes = (table: {
    deletedAt: ExtraConfigColumn<ColumnBaseConfig<ColumnDataType, string>>
}) => [
    index('deleted_at_index').on(table.deletedAt),
]

