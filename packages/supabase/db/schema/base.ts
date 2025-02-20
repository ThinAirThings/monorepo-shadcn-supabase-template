import { sql, type ColumnBaseConfig, type ColumnDataType } from "drizzle-orm";
import { uuid, timestamp, index, ExtraConfigColumn, pgPolicy } from "drizzle-orm/pg-core";
import { profiles } from "./tables/profiles-table";

export const base = {
    id: uuid().default(sql`uuid_generate_v4()`).primaryKey().notNull(),
    createdBy: uuid("created_by").references(() => profiles.id).notNull(),
    updatedBy: uuid("updated_by").references(() => profiles.id).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
    deletedAt: timestamp("deleted_at", { withTimezone: true, mode: 'string' }),
} as const


export const baseIndexes = (tableName: string, table: {
    deletedAt: ExtraConfigColumn<ColumnBaseConfig<ColumnDataType, string>>
}) => [
    index(`${tableName}_deleted_at_index`).on(table.deletedAt),
    pgPolicy(`${tableName}_deleted_at_policy`, {
        'for': 'select',
        as: 'restrictive',
        'using': sql`deleted_at is null`
    })
]

