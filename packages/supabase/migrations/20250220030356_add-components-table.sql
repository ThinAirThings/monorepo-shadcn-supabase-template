CREATE TABLE "components" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"created_by" uuid DEFAULT '00000000-0000-0000-0000-000000000000' NOT NULL,
	"updated_by" uuid DEFAULT '00000000-0000-0000-0000-000000000000' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone,
	"name" text NOT NULL,
	"project_id" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "components" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "components" ADD CONSTRAINT "components_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE POLICY "components_select_policy" ON "components" AS PERMISSIVE FOR SELECT TO public USING (EXISTS (
            SELECT 1 FROM projects p
            LEFT JOIN organization_members om ON om.organization_id = p.organization_id
            WHERE p.id = components.project_id
            AND (
                (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
                OR
                (p.organization_id IS NULL AND p.profile_id = auth.uid())
            )
        ));--> statement-breakpoint
CREATE POLICY "components_insert_policy" ON "components" AS PERMISSIVE FOR INSERT TO public WITH CHECK (EXISTS (
            SELECT 1 FROM projects p
            LEFT JOIN organization_members om ON om.organization_id = p.organization_id
            WHERE p.id = components.project_id
            AND (
                (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
                OR
                (p.organization_id IS NULL AND p.profile_id = auth.uid())
            )
        ));--> statement-breakpoint
CREATE POLICY "components_update_policy" ON "components" AS PERMISSIVE FOR UPDATE TO public USING (EXISTS (
            SELECT 1 FROM projects p
            LEFT JOIN organization_members om ON om.organization_id = p.organization_id
            WHERE p.id = components.project_id
            AND (
                (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
                OR
                (p.organization_id IS NULL AND p.profile_id = auth.uid())
            )
        )) WITH CHECK (true);--> statement-breakpoint
CREATE POLICY "components_delete_policy" ON "components" AS PERMISSIVE FOR DELETE TO public USING (EXISTS (
            SELECT 1 FROM projects p
            LEFT JOIN organization_members om ON om.organization_id = p.organization_id
            WHERE p.id = components.project_id
            AND (
                (
                    p.organization_id IS NOT NULL 
                    AND om.profile_id = auth.uid()
                    AND om.role IN ('Owner', 'Administrator')
                )
                OR
                (p.organization_id IS NULL AND p.profile_id = auth.uid())
            )
        ));