import { createClient } from '@supabase/supabase-js'
import { type Database } from 'database.types'



export function createServiceClient<T extends Database>() {
    return createClient<T>(
        process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
    );
}