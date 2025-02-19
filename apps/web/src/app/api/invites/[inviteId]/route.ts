import { createServerClient } from "@thinair-monorepo-template/supabase/createServerClient";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { organizationInvites, organizationMembers } from "@thinair-monorepo-template/supabase/schema";
import { eq, and, isNull } from "drizzle-orm";
import { db as drizzleDb } from "@thinair-monorepo-template/supabase/drizzle/db";
import { createDrizzleSupabaseClient } from "@thinair-monorepo-template/supabase/drizzle/createDrizzleSupabaseClient";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ inviteId: string }> }
) {
    const { inviteId } = await params;
    const supabase = await createServerClient();
    const { data: { session }, error: authError } = await supabase.auth.getSession();

    if (authError || !session) {
        // User not logged in - redirect to login with invite token in URL
        const redirectUrl = new URL('/login', request.url);
        redirectUrl.searchParams.set("inviteToken", inviteId);
        return NextResponse.redirect(redirectUrl);
    }

    const db = createDrizzleSupabaseClient(session.access_token, { 
        admin: drizzleDb, 
        client: drizzleDb 
    });

    try {
        // Find and validate the invite
        const [invite] = await db.rls(async (tx) => {
            const [existingInvite] = await tx
                .select()
                .from(organizationInvites)
                .where(
                    and(
                        eq(organizationInvites.token, inviteId),
                        eq(organizationInvites.email, session.user.email ?? ''),
                        isNull(organizationInvites.acceptedAt)
                    )
                );
            if (!existingInvite) {
                throw new Error("Invalid or expired invite");
            }

            // Check if invite is expired
            if (existingInvite.expiresAt < new Date()) {
                throw new Error("This invite has expired");
            }

            // Check if user is already a member
            const [existingMember] = await tx
                .select()
                .from(organizationMembers)
                .where(
                    and(
                        eq(organizationMembers.organizationId, existingInvite.organizationId),
                        eq(organizationMembers.profileId, session.user.id)
                    )
                );
            if (existingMember) {
                throw new Error("You are already a member of this organization");
            }

            // Add user to organization and mark invite as accepted
            await Promise.all([
                // Create organization member
                tx.insert(organizationMembers).values({
                    organizationId: existingInvite.organizationId,
                    profileId: session.user.id,
                    role: existingInvite.role,
                }),
                // Mark invite as accepted
                tx.update(organizationInvites)
                    .set({ acceptedAt: new Date() })
                    .where(eq(organizationInvites.id, existingInvite.id))
            ]);
            return [existingInvite];
        });

        // Redirect to dashboard on success
        const redirectUrl = new URL('/dashboard', request.url);
        return NextResponse.redirect(redirectUrl);

    } catch (error) {
        // Handle errors by redirecting to error page with message
        const errorMessage = error instanceof Error ? error.message : "An error occurred";
        const redirectUrl = new URL('/error', request.url);
        redirectUrl.searchParams.set("error", errorMessage);
        return NextResponse.redirect(redirectUrl);
    }
}
