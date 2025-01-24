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

export const organizations = pgTable('organizations', {
    ...base,
    name: text('name').notNull(),
    website: text('website'),
}, (table) => [
    ...baseIndexes('organizations', table),
    unique('organizations_name_unique_idx').on(table.name),
    // Users can only see organizations they are members of
    pgPolicy('organizations_read_policy', {
        'for': 'select',
        using: sql`EXISTS (
            SELECT 1 FROM organization_members
            WHERE organization_id = id
            AND user_id = auth.uid()
        )`
    }),
    // Anyone authenticated can create an organization
    pgPolicy('organizations_insert_policy', {
        'for': 'insert',
        withCheck: sql`auth.uid() IS NOT NULL`
    }),
    // Only owners and administrators can update their organization
    pgPolicy('organizations_update_policy', {
        'for': 'update',
        using: sql`EXISTS (
            SELECT 1 FROM organization_members
            WHERE organization_id = id
            AND user_id = auth.uid()
            AND role IN ('Owner', 'Administrator')
        )`,
        withCheck: sql`true`
    })
]);

export const organizationRoles = pgEnum('organization_roles', ['Owner', 'Administrator', 'Member']);

export const organizationMembers = pgTable('organization_members', {
    ...base,
    userId: uuid('user_id').references(() => profiles.id),
    organizationId: uuid('organization_id').references(() => organizations.id),
    role: organizationRoles('role').notNull(),
}, (table) => [
    ...baseIndexes('organization_members', table),
    unique('org_member_unique_idx').on(table.userId, table.organizationId),
    // Members can read other members of their organizations
    pgPolicy('organization_members_read_policy', {
        'for': 'select',
        using: sql`auth.uid() = user_id`
    }),
    // Only owners and administrators can add new members
    pgPolicy('organization_members_insert_policy', {
        'for': 'insert',
        withCheck: sql`
            EXISTS (
                SELECT 1 FROM organization_members 
                WHERE organization_id = organization_members.organization_id
                AND user_id = auth.uid()
                AND role IN ('Owner', 'Administrator')
            )
        `
    }),
    // Allow updates only if:
    // 1. User is an owner (can modify any role)
    // 2. User is an admin (can only modify member/admin roles, cannot modify owner roles)
    pgPolicy('organization_members_update_policy', {
        'for': 'update',
        using: sql`EXISTS (
            SELECT 1 FROM organization_members 
            WHERE organization_id = organization_members.organization_id
            AND user_id = auth.uid()
            AND (
                role = 'Owner'
                OR (
                    role = 'Administrator'
                    AND organization_members.role != 'Owner'
                )
            )
        )`,
        withCheck: sql`true`
    })
]);
