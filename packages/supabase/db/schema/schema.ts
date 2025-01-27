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
    profilePictureUrl: text('profile_picture_url'),
}, (table) => [
    ...baseIndexes('profiles', table),
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
            WHERE organization_members.organization_id = organizations.id
            AND organization_members.user_id = auth.uid()
        ) OR organizations.created_by = auth.uid()`
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
            WHERE organization_members.organization_id = organizations.id
            AND organization_members.user_id = auth.uid()
            AND organization_members.role IN ('Owner', 'Administrator')
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
        using: sql`auth.uid() = organization_members.user_id`
    }),
    // Allow inserts if:
    // 1. Organization has no members (creator can add first members)
    // 2. User is an owner/admin of the organization
    pgPolicy('organization_members_insert_policy', {
        'for': 'insert',
        withCheck: sql`
            (
                NOT EXISTS (
                    SELECT 1 FROM organization_members om
                    WHERE om.organization_id = organization_members.organization_id
                    AND om.deleted_at IS NULL
                )
                AND EXISTS (
                    SELECT 1 FROM organizations o
                    WHERE o.id = organization_members.organization_id
                    AND o.created_by = auth.uid()
                )
            )
            OR
            EXISTS (
                SELECT 1 FROM organization_members om
                WHERE om.organization_id = organization_members.organization_id
                AND om.user_id = auth.uid()
                AND om.role IN ('Owner', 'Administrator')
                AND om.deleted_at IS NULL
            )
        `
    }),
    // Allow updates only if:
    // 1. Organization has no members and user is creator
    // 2. User is an owner (can modify any role)
    // 3. User is an admin (can only modify member/admin roles, cannot modify owner roles)
    pgPolicy('organization_members_update_policy', {
        'for': 'update',
        using: sql`
            (
                NOT EXISTS (
                    SELECT 1 FROM organization_members om
                    WHERE om.organization_id = organization_members.organization_id
                    AND om.deleted_at IS NULL
                )
                AND EXISTS (
                    SELECT 1 FROM organizations o
                    WHERE o.id = organization_members.organization_id
                    AND o.created_by = auth.uid()
                )
            )
            OR
            EXISTS (
                SELECT 1 FROM organization_members om
                WHERE om.organization_id = organization_members.organization_id
                AND om.user_id = auth.uid()
                AND om.deleted_at IS NULL
                AND (
                    om.role = 'Owner'
                    OR (
                        om.role = 'Administrator'
                        AND organization_members.role != 'Owner'
                    )
                )
            )
        `,
        withCheck: sql`true`
    })
]);
