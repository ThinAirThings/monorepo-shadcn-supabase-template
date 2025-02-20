import { pgEnum, pgPolicy, pgTable, unique, uuid } from "drizzle-orm/pg-core";
import { base } from "../base";
import { sql } from "drizzle-orm";
import { profiles } from "./profiles-table";
import { organizations } from "./organizations-table";
import { isOrgManager } from "../rls/is-org-manager";

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
        withCheck: sql`is_org_manager(organization_members.organization_id, auth.uid())`
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
        using: sql`${isOrgManager('organization_members.organization_id')}`,
    })
]);