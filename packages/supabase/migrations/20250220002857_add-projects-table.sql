CREATE TABLE "projects" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"created_by" uuid DEFAULT '00000000-0000-0000-0000-000000000000' NOT NULL,
	"updated_by" uuid DEFAULT '00000000-0000-0000-0000-000000000000' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone,
	"name" text NOT NULL,
	"organization_id" uuid,
	"profile_id" uuid
);
--> statement-breakpoint
ALTER TABLE "projects" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE POLICY "projects_select_policy" ON "projects" AS PERMISSIVE FOR SELECT TO public USING (EXISTS (
            SELECT 1 FROM organization_members om
            WHERE om.organization_id = projects.organization_id
            AND om.profile_id = auth.uid()
        ));--> statement-breakpoint
CREATE POLICY "projects_select_policy_self" ON "projects" AS PERMISSIVE FOR SELECT TO public USING (projects.profile_id = auth.uid());--> statement-breakpoint
CREATE POLICY "projects_insert_policy" ON "projects" AS PERMISSIVE FOR INSERT TO public WITH CHECK (projects.organization_id IS NULL AND projects.profile_id = auth.uid());--> statement-breakpoint
CREATE POLICY "projects_insert_policy_org" ON "projects" AS PERMISSIVE FOR INSERT TO public WITH CHECK (EXISTS (
            SELECT 1 FROM organization_members om
            WHERE om.organization_id = projects.organization_id
            AND om.profile_id = auth.uid()
        ));--> statement-breakpoint
CREATE POLICY "projects_update_policy_self" ON "projects" AS PERMISSIVE FOR UPDATE TO public USING (projects.profile_id = auth.uid());--> statement-breakpoint
CREATE POLICY "projects_update_policy_org" ON "projects" AS PERMISSIVE FOR UPDATE TO public WITH CHECK (EXISTS (
            SELECT 1 FROM organization_members om
            WHERE om.organization_id = projects.organization_id
            AND om.profile_id = auth.uid()
        ));--> statement-breakpoint
CREATE POLICY "projects_delete_policy_org" ON "projects" AS PERMISSIVE FOR DELETE TO public USING (EXISTS (
            SELECT 1 FROM organization_members om
            WHERE om.organization_id = projects.organization_id
            AND om.profile_id = auth.uid()
            AND om.role IN ('Owner', 'Administrator')
        ));