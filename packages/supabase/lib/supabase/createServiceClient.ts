import { createClient } from '@supabase/supabase-js'
import { type Database } from 'database.types'
export function createServiceClient<Database>() {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
    );
}