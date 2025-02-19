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
    profilePictureUrl: text('profile_picture_url')
}, (table) => [
    unique('organizations_name_unique_idx').on(table.name),
    // Users can only see organizations they are members of
    // Anyone authenticated can create an organization
    pgPolicy('organizations_insert_policy', {
        'for': 'insert',
        withCheck: sql`auth.uid() IS NOT NULL`
    }),
    pgPolicy('organizations_read_policy', {
        'for': 'select',
        using: sql`EXISTS (
            SELECT 1 FROM organization_members
            WHERE organization_members.organization_id = organizations.id
            AND organization_members.profile_id = auth.uid()
        ) OR organizations.created_by = auth.uid()`
    }),
    // Only owners and administrators can update their organization
    pgPolicy('organizations_update_policy', {
        'for': 'update',
        using: sql`EXISTS (
            SELECT 1 FROM organization_members
            WHERE organization_members.organization_id = organizations.id
            AND organization_members.profile_id = auth.uid()
            AND organization_members.role IN ('Owner', 'Administrator')
        )`,
        withCheck: sql`true`
    })
]);

export const organizationRoles = pgEnum('organization_roles', ['Owner', 'Administrator', 'Member']);

export const organizationMembers = pgTable('organization_members', {
    ...base,
    profileId: uuid('profile_id').references(() => profiles.id),
    organizationId: uuid('organization_id').references(() => organizations.id),
    role: organizationRoles('role').notNull(),
}, (table) => [
    unique('org_member_unique_idx').on(table.profileId, table.organizationId),
    pgPolicy('organization_members_select_policy', {
        'for': 'select',
        using: sql`is_org_member(organization_members.organization_id, auth.uid())`
    }),
    // Only org owners/admins can add other members directly
    pgPolicy('organization_members_insert_admin_policy', {
        'for': 'insert',
        withCheck: sql`EXISTS (
            SELECT 1 FROM organization_members om
            WHERE om.organization_id = organization_members.organization_id
            AND om.profile_id = auth.uid()
            AND om.role IN ('Owner', 'Administrator')
        )`
    }),
    // Allow users to add themselves if they have a valid invite
    pgPolicy('organization_members_insert_invited_policy', {
        'for': 'insert',
        withCheck: sql`
            EXISTS (
                SELECT 1 FROM organization_invites oi
                WHERE oi.organization_id = organization_members.organization_id
                AND oi.email = (
                    SELECT email FROM profiles WHERE profiles.id = auth.uid()
                )
                AND oi.role = organization_members.role
                AND oi.accepted_at IS NULL
                AND oi.expires_at > now()
            )
            AND auth.uid() = organization_members.profile_id
        `
    }),
    // Allow inserts if:
    // 1. Organization has no members (creator can add first members)
    // 2. User is an owner/admin of the organization
    pgPolicy('organization_members_insert_no_members_policy', {
        'for': 'insert',
        withCheck: sql`
            (
                NOT EXISTS (
                    SELECT 1 FROM organization_members om
                    WHERE om.organization_id = organization_members.organization_id
                )
                AND EXISTS (
                    SELECT 1 FROM organizations o
                    WHERE o.id = organization_members.organization_id
                    AND o.created_by = auth.uid()
                )
            )
        `
    }),
    // Allow updates only if:
    // 1. User is an owner (can modify any role)
    // 2. User is an admin (can only modify member/admin roles, cannot modify owner roles)
    pgPolicy('organization_members_update_policy', {
        'for': 'update',
        using: sql`EXISTS (
                SELECT 1 FROM organization_members om
                WHERE om.organization_id = organization_members.organization_id
                AND om.profile_id = auth.uid()
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
    }),
    pgPolicy('organization_members_delete_policy', {
        'for': 'delete',
        using: sql`EXISTS (
            SELECT 1 FROM organization_members om
            WHERE om.organization_id = organization_members.organization_id
            AND om.profile_id = auth.uid()
            AND om.role IN ('Owner', 'Administrator')
        )`
    })
]);

export const organizationInvites = pgTable('organization_invites', {
    ...base,
    // The email address being invited
    email: text('email').notNull(),
    // The organization they're being invited to
    organizationId: uuid('organization_id')
        .references(() => organizations.id)
        .notNull(),
    organizationName: text('organization_name').notNull(),
    // The role they'll receive upon accepting
    role: organizationRoles('role').notNull(),
    // The member who sent the invitation
    invitedBy: uuid('invited_by')
        .references(() => profiles.id)
        .notNull(),
    // Unique token for the invitation link
    token: text('token').notNull(),
    // When the invitation expires
    expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
    // When the invitation was accepted
    acceptedAt: timestamp('accepted_at', { withTimezone: true }),
}, (table) => [
    // Each email can only have one pending invite per organization
    unique('organization_invites_email_org_idx').on(table.email, table.organizationId),
    unique('organization_invites_token_idx').on(table.token),
    // Modified select policy to use profiles table instead of auth.users
    pgPolicy('organization_invites_select_policy', {
        'for': 'select',
        using: sql`auth.role() IN ('anon', 'authenticated')`
    }), 
    // Only owners/admins can create invites
    pgPolicy('organization_invites_insert_policy', {
        'for': 'insert',
        withCheck: sql`EXISTS (
            SELECT 1 FROM organization_members
            WHERE organization_members.organization_id = organization_invites.organization_id
            AND organization_members.profile_id = auth.uid()
            AND organization_members.role IN ('Owner', 'Administrator')
        )`
    }),
]);