import { createDrizzleSupabaseClient } from "@thinair-monorepo-template/supabase/drizzle/createDrizzleSupabaseClient";
import { db } from "@thinair-monorepo-template/supabase/drizzle/db";
import { NextRequest } from "next/server";
import invariant from "tiny-invariant";



export function createDrizzleSupabaseClientFromNextRequest(request: NextRequest) {
    const accessToken = request.headers.get('Authorization');

    if (!accessToken) {
        throw new Error('No access token found');
    }
    const token = accessToken.split(' ')[1];
    invariant(token, 'No access token found');
    return createDrizzleSupabaseClient(token, { admin: db, client: db });
}