CREATE TYPE "public"."message_part_types" AS ENUM('text', 'reasoning', 'tool-invocation');--> statement-breakpoint
CREATE TYPE "public"."message_roles" AS ENUM('system', 'user', 'assistant', 'data');--> statement-breakpoint
CREATE TYPE "public"."tool_invocation_states" AS ENUM('partial-call', 'call', 'result');--> statement-breakpoint
CREATE TABLE "ai_chats" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"created_by" uuid NOT NULL,
	"updated_by" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone,
	"name" text NOT NULL,
	"project_id" uuid
);
--> statement-breakpoint
ALTER TABLE "ai_chats" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "ai_chat_messages" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"created_by" uuid NOT NULL,
	"updated_by" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone,
	"chat_id" uuid NOT NULL,
	"role" "message_roles" NOT NULL,
	"content" text NOT NULL,
	"annotations" json,
	"parts" json NOT NULL,
	"attachments" json
);
--> statement-breakpoint
ALTER TABLE "ai_chat_messages" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "components" ALTER COLUMN "created_by" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "components" ALTER COLUMN "updated_by" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "organization_invites" ALTER COLUMN "created_by" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "organization_invites" ALTER COLUMN "updated_by" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "organization_members" ALTER COLUMN "created_by" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "organization_members" ALTER COLUMN "updated_by" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "organizations" ALTER COLUMN "created_by" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "organizations" ALTER COLUMN "updated_by" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "created_by" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "updated_by" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "ai_chats" ADD CONSTRAINT "ai_chats_created_by_profiles_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ai_chats" ADD CONSTRAINT "ai_chats_updated_by_profiles_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ai_chats" ADD CONSTRAINT "ai_chats_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ai_chat_messages" ADD CONSTRAINT "ai_chat_messages_created_by_profiles_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ai_chat_messages" ADD CONSTRAINT "ai_chat_messages_updated_by_profiles_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ai_chat_messages" ADD CONSTRAINT "ai_chat_messages_chat_id_ai_chats_id_fk" FOREIGN KEY ("chat_id") REFERENCES "public"."ai_chats"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "ai_chat_project_id_idx" ON "ai_chats" USING btree ("project_id");--> statement-breakpoint
CREATE INDEX "ai_chat_messages_chat_id_idx" ON "ai_chat_messages" USING btree ("chat_id");--> statement-breakpoint
ALTER TABLE "components" ADD CONSTRAINT "components_created_by_profiles_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "components" ADD CONSTRAINT "components_updated_by_profiles_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "organization_invites" ADD CONSTRAINT "organization_invites_created_by_profiles_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "organization_invites" ADD CONSTRAINT "organization_invites_updated_by_profiles_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "organization_members" ADD CONSTRAINT "organization_members_created_by_profiles_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "organization_members" ADD CONSTRAINT "organization_members_updated_by_profiles_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "organizations" ADD CONSTRAINT "organizations_created_by_profiles_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "organizations" ADD CONSTRAINT "organizations_updated_by_profiles_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_created_by_profiles_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_updated_by_profiles_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" DROP COLUMN "created_by";--> statement-breakpoint
ALTER TABLE "profiles" DROP COLUMN "updated_by";--> statement-breakpoint
ALTER TABLE "profiles" DROP COLUMN "deleted_at";--> statement-breakpoint
ALTER POLICY "organizations_read_policy" ON "organizations" RENAME TO "organizations_select_policy";--> statement-breakpoint
CREATE POLICY "ai_chat_select_policy" ON "ai_chats" AS PERMISSIVE FOR SELECT TO public USING (EXISTS (
        SELECT 1
        FROM projects p
        LEFT JOIN organization_members om ON om.organization_id = p.organization_id
        WHERE p.id = ai_chats.project_id
        AND (
            (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
            OR
            (p.organization_id IS NULL AND p.profile_id = auth.uid())
        )
    )
    );--> statement-breakpoint
CREATE POLICY "ai_chat_insert_policy" ON "ai_chats" AS PERMISSIVE FOR INSERT TO public WITH CHECK (EXISTS (
        SELECT 1
        FROM projects p
        LEFT JOIN organization_members om ON om.organization_id = p.organization_id
        WHERE p.id = ai_chats.project_id
        AND (
            (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
            OR
            (p.organization_id IS NULL AND p.profile_id = auth.uid())
        )
    )
    );--> statement-breakpoint
CREATE POLICY "ai_chat_update_policy" ON "ai_chats" AS PERMISSIVE FOR UPDATE TO public USING (EXISTS (
        SELECT 1
        FROM projects p
        LEFT JOIN organization_members om ON om.organization_id = p.organization_id
        WHERE p.id = ai_chats.project_id
        AND (
            (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
            OR
            (p.organization_id IS NULL AND p.profile_id = auth.uid())
        )
    )
    );--> statement-breakpoint
CREATE POLICY "ai_chat_delete_policy" ON "ai_chats" AS PERMISSIVE FOR DELETE TO public USING (EXISTS (
        SELECT 1
        FROM projects p
        LEFT JOIN organization_members om ON om.organization_id = p.organization_id
        WHERE p.id = ai_chats.project_id
        AND (
            (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
            OR
            (p.organization_id IS NULL AND p.profile_id = auth.uid())
        )
    )
    );--> statement-breakpoint
CREATE POLICY "ai_chat_messages_select_policy" ON "ai_chat_messages" AS PERMISSIVE FOR SELECT TO public USING (
    EXISTS (
      SELECT 1
      FROM ai_chats ac
      JOIN projects p ON p.id = ac.project_id
      LEFT JOIN organization_members om ON om.organization_id = p.organization_id
      WHERE ac.id = ai_chat_messages.chat_id
        AND (
          (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
          OR
          (p.organization_id IS NULL AND p.profile_id = auth.uid())
        )
    )
);--> statement-breakpoint
CREATE POLICY "ai_chat_messages_insert_policy" ON "ai_chat_messages" AS PERMISSIVE FOR INSERT TO public WITH CHECK (
    EXISTS (
      SELECT 1
      FROM ai_chats ac
      JOIN projects p ON p.id = ac.project_id
      LEFT JOIN organization_members om ON om.organization_id = p.organization_id
      WHERE ac.id = ai_chat_messages.chat_id
        AND (
          (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
          OR
          (p.organization_id IS NULL AND p.profile_id = auth.uid())
        )
    )
);--> statement-breakpoint
CREATE POLICY "ai_chat_messages_update_policy" ON "ai_chat_messages" AS PERMISSIVE FOR UPDATE TO public USING (
    EXISTS (
      SELECT 1
      FROM ai_chats ac
      JOIN projects p ON p.id = ac.project_id
      LEFT JOIN organization_members om ON om.organization_id = p.organization_id
      WHERE ac.id = ai_chat_messages.chat_id
        AND (
          (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
          OR
          (p.organization_id IS NULL AND p.profile_id = auth.uid())
        )
    )
);--> statement-breakpoint
CREATE POLICY "ai_chat_messages_delete_policy" ON "ai_chat_messages" AS PERMISSIVE FOR DELETE TO public USING (
    EXISTS (
      SELECT 1
      FROM ai_chats ac
      JOIN projects p ON p.id = ac.project_id
      LEFT JOIN organization_members om ON om.organization_id = p.organization_id
      WHERE ac.id = ai_chat_messages.chat_id
        AND (
          (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
          OR
          (p.organization_id IS NULL AND p.profile_id = auth.uid())
        )
    )
);--> statement-breakpoint
ALTER POLICY "components_select_policy" ON "components" TO public USING (EXISTS (
        SELECT 1
        FROM projects p
        LEFT JOIN organization_members om ON om.organization_id = p.organization_id
        WHERE p.id = components.project_id
        AND (
            (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
            OR
            (p.organization_id IS NULL AND p.profile_id = auth.uid())
        )
    )
    );--> statement-breakpoint
ALTER POLICY "components_insert_policy" ON "components" TO public WITH CHECK (EXISTS (
        SELECT 1
        FROM projects p
        LEFT JOIN organization_members om ON om.organization_id = p.organization_id
        WHERE p.id = components.project_id
        AND (
            (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
            OR
            (p.organization_id IS NULL AND p.profile_id = auth.uid())
        )
    )
    );--> statement-breakpoint
ALTER POLICY "components_update_policy" ON "components" TO public USING (EXISTS (
        SELECT 1
        FROM projects p
        LEFT JOIN organization_members om ON om.organization_id = p.organization_id
        WHERE p.id = components.project_id
        AND (
            (p.organization_id IS NOT NULL AND om.profile_id = auth.uid())
            OR
            (p.organization_id IS NULL AND p.profile_id = auth.uid())
        )
    )
    ) WITH CHECK  (true);--> statement-breakpoint
ALTER POLICY "components_delete_policy" ON "components" TO public USING (
    EXISTS (
        SELECT 1 
        FROM projects p
        LEFT JOIN organization_members om ON om.organization_id = p.organization_id
        WHERE p.id = components.project_id
        AND (
        (p.organization_id IS NULL AND p.profile_id = auth.uid())
        OR
        (
            p.organization_id IS NOT NULL
            AND om.profile_id = auth.uid()
            AND om.role IN ('Owner', 'Administrator')
        )
        )
    )
);--> statement-breakpoint
ALTER POLICY "organization_invites_insert_policy" ON "organization_invites" TO public WITH CHECK (
    EXISTS (
        SELECT 1
        FROM organization_members om
        WHERE om.organization_id = organization_invites.organization_id
        AND om.profile_id = auth.uid()
        AND om.role IN ('Owner', 'Administrator')
    )
);--> statement-breakpoint
ALTER POLICY "organization_members_insert_admin_policy" ON "organization_members" TO public WITH CHECK (is_org_manager(organization_members.organization_id, auth.uid()));--> statement-breakpoint
ALTER POLICY "organization_members_delete_policy" ON "organization_members" TO public USING (
    EXISTS (
        SELECT 1
        FROM organization_members om
        WHERE om.organization_id = organization_members.organization_id
        AND om.profile_id = auth.uid()
        AND om.role IN ('Owner', 'Administrator')
    )
);--> statement-breakpoint
ALTER POLICY "organizations_update_policy" ON "organizations" TO public USING (
    EXISTS (
        SELECT 1
        FROM organization_members om
        WHERE om.organization_id = organizations.id
        AND om.profile_id = auth.uid()
        AND om.role IN ('Owner', 'Administrator')
    )
) WITH CHECK (true);--> statement-breakpoint
ALTER POLICY "projects_select_policy" ON "projects" TO public USING (
    EXISTS (
        SELECT 1
        FROM organization_members om
        WHERE om.organization_id = projects.organization_id
        AND om.profile_id = auth.uid()
    )
);--> statement-breakpoint
ALTER POLICY "projects_insert_policy_org" ON "projects" TO public WITH CHECK (
    EXISTS (
        SELECT 1
        FROM organization_members om
        WHERE om.organization_id = projects.organization_id
        AND om.profile_id = auth.uid()
    )
);--> statement-breakpoint
ALTER POLICY "projects_update_policy_org" ON "projects" TO public WITH CHECK (
    EXISTS (
        SELECT 1
        FROM organization_members om
        WHERE om.organization_id = projects.organization_id
        AND om.profile_id = auth.uid()
    )
);--> statement-breakpoint
ALTER POLICY "projects_delete_policy_org" ON "projects" TO public USING (
    EXISTS (
        SELECT 1
        FROM organization_members om
        WHERE om.organization_id = projects.organization_id
        AND om.profile_id = auth.uid()
        AND om.role IN ('Owner', 'Administrator')
    )
);