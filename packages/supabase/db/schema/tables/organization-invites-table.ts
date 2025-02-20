import { pgPolicy, pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";
import { base } from "../base";
import { sql } from "drizzle-orm";
import { profiles } from "./profiles-table";
import { organizations } from "./organizations-table";
import { organizationRoles } from "./organization-members-table";
import { isOrgManager } from "../rls/is-org-manager";

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
        withCheck: sql`${isOrgManager('organization_invites.organization_id')}`
    }),
]);