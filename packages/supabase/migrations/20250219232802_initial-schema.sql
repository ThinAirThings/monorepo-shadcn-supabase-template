CREATE TYPE "public"."organization_roles" AS ENUM('Owner', 'Administrator', 'Member');--> statement-breakpoint
CREATE TABLE "organization_invites" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"created_by" uuid DEFAULT '00000000-0000-0000-0000-000000000000' NOT NULL,
	"updated_by" uuid DEFAULT '00000000-0000-0000-0000-000000000000' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone,
	"email" text NOT NULL,
	"organization_id" uuid NOT NULL,
	"organization_name" text NOT NULL,
	"role" "organization_roles" NOT NULL,
	"invited_by" uuid NOT NULL,
	"token" text NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"accepted_at" timestamp with time zone,
	CONSTRAINT "organization_invites_email_org_idx" UNIQUE("email","organization_id"),
	CONSTRAINT "organization_invites_token_idx" UNIQUE("token")
);
--> statement-breakpoint
ALTER TABLE "organization_invites" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "organization_members" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"created_by" uuid DEFAULT '00000000-0000-0000-0000-000000000000' NOT NULL,
	"updated_by" uuid DEFAULT '00000000-0000-0000-0000-000000000000' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone,
	"profile_id" uuid,
	"organization_id" uuid,
	"role" "organization_roles" NOT NULL,
	CONSTRAINT "org_member_unique_idx" UNIQUE("profile_id","organization_id")
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
	"profile_picture_url" text,
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
	"phone_number" text,
	"profile_picture_url" text
);
--> statement-breakpoint
ALTER TABLE "profiles" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "organization_invites" ADD CONSTRAINT "organization_invites_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "organization_invites" ADD CONSTRAINT "organization_invites_invited_by_profiles_id_fk" FOREIGN KEY ("invited_by") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "organization_members" ADD CONSTRAINT "organization_members_profile_id_profiles_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "organization_members" ADD CONSTRAINT "organization_members_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "profiles_email_idx" ON "profiles" USING btree ("email");--> statement-breakpoint
CREATE POLICY "organization_invites_select_policy" ON "organization_invites" AS PERMISSIVE FOR SELECT TO public USING (auth.role() IN ('anon', 'authenticated'));--> statement-breakpoint
CREATE POLICY "organization_invites_insert_policy" ON "organization_invites" AS PERMISSIVE FOR INSERT TO public WITH CHECK (EXISTS (
            SELECT 1 FROM organization_members
            WHERE organization_members.organization_id = organization_invites.organization_id
            AND organization_members.profile_id = auth.uid()
            AND organization_members.role IN ('Owner', 'Administrator')
        ));--> statement-breakpoint
CREATE POLICY "organization_members_insert_admin_policy" ON "organization_members" AS PERMISSIVE FOR INSERT TO public WITH CHECK (EXISTS (
            SELECT 1 FROM organization_members om
            WHERE om.organization_id = organization_members.organization_id
            AND om.profile_id = auth.uid()
            AND om.role IN ('Owner', 'Administrator')
        ));--> statement-breakpoint
CREATE POLICY "organization_members_insert_invited_policy" ON "organization_members" AS PERMISSIVE FOR INSERT TO public WITH CHECK (
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
        );--> statement-breakpoint
CREATE POLICY "organization_members_insert_no_members_policy" ON "organization_members" AS PERMISSIVE FOR INSERT TO public WITH CHECK (
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
        );--> statement-breakpoint
CREATE POLICY "organization_members_update_policy" ON "organization_members" AS PERMISSIVE FOR UPDATE TO public USING (EXISTS (
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
        ) WITH CHECK (true);--> statement-breakpoint
CREATE POLICY "organization_members_delete_policy" ON "organization_members" AS PERMISSIVE FOR DELETE TO public USING (EXISTS (
            SELECT 1 FROM organization_members om
            WHERE om.organization_id = organization_members.organization_id
            AND om.profile_id = auth.uid()
            AND om.role IN ('Owner', 'Administrator')
        ));--> statement-breakpoint
CREATE POLICY "organizations_insert_policy" ON "organizations" AS PERMISSIVE FOR INSERT TO public WITH CHECK (auth.uid() IS NOT NULL);--> statement-breakpoint
CREATE POLICY "organizations_read_policy" ON "organizations" AS PERMISSIVE FOR SELECT TO public USING (EXISTS (
            SELECT 1 FROM organization_members
            WHERE organization_members.organization_id = organizations.id
            AND organization_members.profile_id = auth.uid()
        ) OR organizations.created_by = auth.uid());--> statement-breakpoint
CREATE POLICY "organizations_update_policy" ON "organizations" AS PERMISSIVE FOR UPDATE TO public USING (EXISTS (
            SELECT 1 FROM organization_members
            WHERE organization_members.organization_id = organizations.id
            AND organization_members.profile_id = auth.uid()
            AND organization_members.role IN ('Owner', 'Administrator')
        )) WITH CHECK (true);--> statement-breakpoint
CREATE POLICY "profiles_update_policy" ON "profiles" AS PERMISSIVE FOR UPDATE TO public USING (auth.uid() = profiles.id) WITH CHECK (true);--> statement-breakpoint
CREATE POLICY "profiles_select_policy" ON "profiles" AS PERMISSIVE FOR SELECT TO public USING (true);