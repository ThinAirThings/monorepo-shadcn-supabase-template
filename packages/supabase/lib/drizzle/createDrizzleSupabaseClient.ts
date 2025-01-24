import { sql } from "drizzle-orm";
import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import jwt from "jsonwebtoken";

type SupabaseToken = {
    iss?: string;
    sub?: string;
    aud?: string[] | string;
    exp?: number;
    nbf?: number;
    iat?: number;
    jti?: string;
    role?: string;
  };
  
  export function createDrizzleSupabaseClient(accessToken: string, { admin, client }: { admin: PostgresJsDatabase<any>; client: PostgresJsDatabase<any> }) {
    const token = jwt.decode(accessToken) as SupabaseToken;
    return {
      admin,
      rls: (async (transaction, ...rest) => {
        return await client.transaction(async (tx) => {
          // Supabase exposes auth.uid() and auth.jwt()
          // https://supabase.com/docs/guides/database/postgres/row-level-security#helper-functions
          try {
            await tx.execute(sql`
            -- auth.jwt()
            select set_config('request.jwt.claims', '${sql.raw(
              JSON.stringify(token)
            )}', TRUE);
            -- auth.uid()
            select set_config('request.jwt.claim.sub', '${sql.raw(
              token.sub ?? ""
            )}', TRUE);												
            -- set local role
            set local role ${sql.raw(token.role ?? "anon")};
            `);
            return await transaction(tx);
          } finally {
            await tx.execute(sql`
              -- reset
              select set_config('request.jwt.claims', NULL, TRUE);
              select set_config('request.jwt.claim.sub', NULL, TRUE);
              reset role;
              `);
          }
        }, ...rest);
      }) as typeof client.transaction,
    };
  }
  