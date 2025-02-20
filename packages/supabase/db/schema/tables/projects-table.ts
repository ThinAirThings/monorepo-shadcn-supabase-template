import { pgPolicy, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { base } from "../base";
import { sql } from "drizzle-orm";
import { organizations } from "./organizations-table";
import { profiles } from "./profiles-table";
import { isOrgMember } from "../rls/is-org-member";
import { isOrgManager } from "../rls/is-org-manager";

export const projects = pgTable('projects', {
    ...base,
    name: text('name').notNull(),
    organizationId: uuid('organization_id').references(() => organizations.id),
    profileId: uuid('profile_id').references(() => profiles.id),
}, (table) => [
    // Members of the organization can see organization projects
    pgPolicy('projects_select_policy', {
        'for': 'select',
        using: sql`${isOrgMember('projects.organization_id')}`
    }),
    // Users can see their own projects
    pgPolicy('projects_select_policy_self', {
        'for': 'select',
        using: sql`projects.profile_id = auth.uid()`
    }),
    // Any authenticated user can create a project in their personal organization
    pgPolicy('projects_insert_policy', {
        'for': 'insert',
        withCheck: sql`projects.organization_id IS NULL AND projects.profile_id = auth.uid()`
    }),
    // Users of an organization can create projects in that organization
    pgPolicy('projects_insert_policy_org', {
        'for': 'insert',
        withCheck: sql`${isOrgMember('projects.organization_id')}`
    }),
    // Users can update their own projects
    pgPolicy('projects_update_policy_self', {
        'for': 'update',
        using: sql`projects.profile_id = auth.uid()`
    }),
    // Users in an organization and update the projects in that organization
    pgPolicy('projects_update_policy_org', {
        'for': 'update',
        withCheck: sql`${isOrgMember('projects.organization_id')}`
    }),
    // Users in an organization can delete the projects in that organization
    pgPolicy('projects_delete_policy_org', {
        'for': 'delete',
        using: sql`${isOrgManager('projects.organization_id')}`
    }),
]);