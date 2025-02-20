import { pgPolicy, pgTable, text, unique, uuid } from "drizzle-orm/pg-core";
import { base } from "../base";
import { sql } from "drizzle-orm";
import { isOrgMember } from "../rls/is-org-member";
import { isOrgManager } from "../rls/is-org-manager";

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
    pgPolicy('organizations_select_policy', {
        'for': 'select',
        using: sql`${isOrgMember('organizations.id')} OR organizations.created_by = auth.uid()`
    }),
    // Only owners and administrators can update their organization
    pgPolicy('organizations_update_policy', {
        'for': 'update',
        using: sql`${isOrgManager('organizations.id')}`,
        withCheck: sql`true`
    })
]);