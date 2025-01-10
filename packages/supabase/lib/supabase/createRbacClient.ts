import { type Database } from 'database.types'
import { createClient } from "@supabase/supabase-js";
export function createRbacClient<Database>() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
  )
}

