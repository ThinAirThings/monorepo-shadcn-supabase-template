import { pgPolicy, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { base } from "../base";
import { sql } from "drizzle-orm";
import { projects } from "./projects-table";
import { canAccessProject } from "../rls/can-access-project";
import { canManageProject } from "../rls/can-manage-project";


export const components = pgTable('components', {
    ...base,
    name: text('name').notNull(),
    projectId: uuid('project_id').references(() => projects.id).notNull(),
}, (table) => [
    // Components are visible if:
    // 1. The component belongs to a project in an organization where the user is a member
    // 2. The component belongs to a project owned by the user (profileId)
    pgPolicy('components_select_policy', {
        'for': 'select',
        using: sql`${canAccessProject('components.project_id')}`
    }),
    // Insert policy follows the same logic as select
    pgPolicy('components_insert_policy', {
        'for': 'insert',
        withCheck: sql`${canAccessProject('components.project_id')}`
    }),
    // Update policy follows the same logic as select
    pgPolicy('components_update_policy', {
        'for': 'update',
        using: sql`${canAccessProject('components.project_id')}`
    }),
    // Delete policy follows the same logic but requires Owner/Admin role for org projects
    pgPolicy('components_delete_policy', {
        'for': 'delete',
        using: sql`${canManageProject('components.project_id')}`
    })
]);