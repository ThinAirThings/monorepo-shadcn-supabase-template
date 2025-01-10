import { createBrowserClient as _createBrowserClient } from '@supabase/ssr'
import { type Database } from 'database.types'
export function createBrowserClient<Database>() {
  return _createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

