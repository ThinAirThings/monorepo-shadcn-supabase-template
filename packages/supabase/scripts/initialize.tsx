#!/usr/bin/env bun
import { $ } from "bun";
import { parseArgs } from "util";
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import dotenv from 'dotenv'
import { createOrReplaceCanUserDo } from '../db/config/rbac'
import { createOrReplaceHandleNewUserTrigger } from '../db/config/triggers'
import { sql } from 'drizzle-orm'
import chalk from 'chalk'

// Get the directory path
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables
dotenv.config({ path: resolve(__dirname, '../../../.env') })

// Parse command line arguments
const { values: { reset } } = parseArgs({
    options: {
        reset: {
            type: 'boolean',
            short: 'r',
            default: false
        }
    }
})

async function enableExtensions(db: ReturnType<typeof drizzle>) {
    console.log(chalk.blue('📦 Enabling database extensions...'))
    await db.execute(sql`
        -- Enable UUID extension
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
        
        -- Enable Vector extension
        CREATE EXTENSION IF NOT EXISTS "vector";
    `)
}

async function generateMigrations() {
    console.log(chalk.blue('🔄 Generating migration files...'))
    await $`bunx drizzle-kit generate --name=initial-schema`
}

async function resetDatabase() {
    console.log(chalk.yellow('🗑️  Resetting database...'))
    await $`bunx supabase db reset`
}

async function runMigrations() {
    console.log(chalk.blue('⬆️  Running migrations...'))
    await $`bunx supabase migrations up`
}

async function configureFunctionsAndTriggers(db: ReturnType<typeof drizzle>) {
    console.log(chalk.blue('⚙️  Configuring database functions and triggers...'))
    
    console.log(chalk.gray('📚 Setting up RBAC functions...'))
    await createOrReplaceCanUserDo()
    
    console.log(chalk.gray('🔧 Setting up user triggers...'))
    await createOrReplaceHandleNewUserTrigger()
}

async function initialize() {
    try {
        // Ensure DATABASE_URL is defined
        if (!process.env.DATABASE_URL) {
            throw new Error('DATABASE_URL environment variable is not defined')
        }

        console.log(chalk.green('🚀 Starting database initialization...'))

        // Initialize database client
        const client = postgres(process.env.DATABASE_URL, { max: 1 })
        const db = drizzle(client)

        // Reset database if flag is set
        if (reset) {
            await resetDatabase()
        }

        // Enable required extensions
        await enableExtensions(db)

        // Generate and run migrations
        await generateMigrations()
        await runMigrations()

        // Configure functions and triggers
        await configureFunctionsAndTriggers(db)

        console.log(chalk.green('✅ Database initialization completed successfully'))

        // Close the client connection
        await client.end()
    } catch (error) {
        console.error(chalk.red('❌ Error initializing database:'), error)
        process.exit(1)
    }
}

// Execute if run directly
if (import.meta.main) {
    initialize()
        .then(() => process.exit(0))
        .catch((error) => {
            console.error(chalk.red('Failed to initialize database:'), error)
            process.exit(1)
        })
}

export { initialize }
