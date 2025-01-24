import { createDrizzleSupabaseClient } from "@usepulse/supabase/drizzle/createDrizzleSupabaseClient";
import { db } from "@usepulse/supabase/drizzle/db";
import { NextRequest } from "next/server";



export function createDrizzleSupabaseClientFromNextRequest(request: NextRequest) {
    const accessToken = request.headers.get('Authorization');

    if (!accessToken) {
        throw new Error('No access token found');
    }
    return createDrizzleSupabaseClient(accessToken.split(' ')[1]!, { admin: db, client: db });
}