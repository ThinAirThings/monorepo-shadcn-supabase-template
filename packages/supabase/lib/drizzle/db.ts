

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from "postgres";

import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import dotenv from 'dotenv'
import * as schema from '../../db/schema/schema';
import invariant from 'tiny-invariant';
// Get the directory path in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables from .env file
dotenv.config({ path: resolve(__dirname, '../../.env') })

// Ensure DATABASE_URL is defined
if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not defined')
}

invariant(process.env.DATABASE_URL, 'DATABASE_URL is not defined')
export const db = drizzle({
    client: postgres(process.env.DATABASE_URL, {
        prepare: false
    }),
    schema: schema
});

