CREATE TYPE "public"."organization_roles" AS ENUM('Owner', 'Administrator', 'Member');--> statement-breakpoint
CREATE TABLE "organization_members" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"created_by" uuid DEFAULT '00000000-0000-0000-0000-000000000000' NOT NULL,
	"updated_by" uuid DEFAULT '00000000-0000-0000-0000-000000000000' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone,
	"user_id" uuid,
	"organization_id" uuid,
	"role" "organization_roles" NOT NULL,
	CONSTRAINT "org_member_unique_idx" UNIQUE("user_id","organization_id")
);
--> statement-breakpoint
ALTER TABLE "organization_members" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "organizations" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"created_by" uuid DEFAULT '00000000-0000-0000-0000-000000000000' NOT NULL,
	"updated_by" uuid DEFAULT '00000000-0000-0000-0000-000000000000' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone,
	"name" text NOT NULL,
	"website" text,
	CONSTRAINT "organizations_name_unique_idx" UNIQUE("name")
);
--> statement-breakpoint
ALTER TABLE "organizations" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"created_by" uuid DEFAULT '00000000-0000-0000-0000-000000000000' NOT NULL,
	"updated_by" uuid DEFAULT '00000000-0000-0000-0000-000000000000' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone,
	"email" text NOT NULL,
	"first_name" text,
	"last_name" text,
	"phone_number" text
);
--> statement-breakpoint
ALTER TABLE "profiles" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "organization_members" ADD CONSTRAINT "organization_members_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "organization_members" ADD CONSTRAINT "organization_members_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "organization_members_deleted_at_index" ON "organization_members" USING btree ("deleted_at");--> statement-breakpoint
CREATE INDEX "organizations_deleted_at_index" ON "organizations" USING btree ("deleted_at");--> statement-breakpoint
CREATE INDEX "profiles_deleted_at_index" ON "profiles" USING btree ("deleted_at");--> statement-breakpoint
CREATE POLICY "organization_members_deleted_at_policy" ON "organization_members" AS PERMISSIVE FOR SELECT TO public USING (deleted_at is null);--> statement-breakpoint
CREATE POLICY "organization_members_read_policy" ON "organization_members" AS PERMISSIVE FOR SELECT TO public USING (auth.uid() = user_id);--> statement-breakpoint
CREATE POLICY "organization_members_insert_policy" ON "organization_members" AS PERMISSIVE FOR INSERT TO public WITH CHECK (
            EXISTS (
                SELECT 1 FROM organization_members 
                WHERE organization_id = organization_members.organization_id
                AND user_id = auth.uid()
                AND role IN ('Owner', 'Administrator')
            )
        );--> statement-breakpoint
CREATE POLICY "organization_members_update_policy" ON "organization_members" AS PERMISSIVE FOR UPDATE TO public USING (EXISTS (
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
        )) WITH CHECK (true);--> statement-breakpoint
CREATE POLICY "organizations_deleted_at_policy" ON "organizations" AS PERMISSIVE FOR SELECT TO public USING (deleted_at is null);--> statement-breakpoint
CREATE POLICY "organizations_read_policy" ON "organizations" AS PERMISSIVE FOR SELECT TO public USING (EXISTS (
            SELECT 1 FROM organization_members
            WHERE organization_id = id
            AND user_id = auth.uid()
        ));--> statement-breakpoint
CREATE POLICY "organizations_insert_policy" ON "organizations" AS PERMISSIVE FOR INSERT TO public WITH CHECK (auth.uid() IS NOT NULL);--> statement-breakpoint
CREATE POLICY "organizations_update_policy" ON "organizations" AS PERMISSIVE FOR UPDATE TO public USING (EXISTS (
            SELECT 1 FROM organization_members
            WHERE organization_id = id
            AND user_id = auth.uid()
            AND role IN ('Owner', 'Administrator')
        )) WITH CHECK (true);--> statement-breakpoint
CREATE POLICY "profiles_deleted_at_policy" ON "profiles" AS PERMISSIVE FOR SELECT TO public USING (deleted_at is null);--> statement-breakpoint
CREATE POLICY "profiles_update_policy" ON "profiles" AS PERMISSIVE FOR UPDATE TO public USING (auth.uid() = id) WITH CHECK (true);