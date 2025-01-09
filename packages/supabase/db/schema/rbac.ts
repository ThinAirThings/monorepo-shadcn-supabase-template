import { pgTable, uuid, text, unique, jsonb, check } from "drizzle-orm/pg-core"
import { base } from "./base"
import { sql } from "drizzle-orm";



export const userRoles = pgTable('user_roles', {
    ...base,
    userId: uuid('user_id').notNull(),
    roleId: uuid('role_id').references(() => roles.id).notNull(),
}, (table) => [
    unique('user_roles_unique').on(table.userId, table.roleId),
]);

export const roles = pgTable('roles', {
    ...base,
    name: text('name').notNull().unique(),
    description: text('description'),
});

export const rolePolicies = pgTable('role_policies', {
    ...base,
    roleId: uuid('role_id').references(() => roles.id).notNull(),
    policyId: uuid('policy_id').references(() => policies.id).notNull(),
}, (table) => [
    unique('role_policies_unique').on(table.roleId, table.policyId),
]);

export const policies = pgTable('policies', {
    ...base,
    name: text('name').notNull(),
    action: text('action').notNull(),
    resource: text('resource').notNull(),
    effect: text('effect').notNull().default('allow'),
    condition: jsonb('conditions'),
}, (table) => [
    check('effect_check', sql`${table.effect} IN ('allow', 'deny')`),
]);



