import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import dotenv from 'dotenv'
import { createOrReplaceCanUserDo } from './rbac'
import { createOrReplaceHandleNewUserTrigger } from './triggers'
import { sql } from 'drizzle-orm'

// Get the directory path in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables from .env file
dotenv.config({ path: resolve(__dirname, '../../../.env') })

// Ensure DATABASE_URL is defined
if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not defined')
}

async function configureDatabase() {
    try {
        // Initialize database client
        const client = postgres(process.env.DATABASE_URL!, { max: 1 })
        const db = drizzle(client)

        console.log('🔄 Starting database configuration...')

        // Enable required extensions
        console.log('📦 Configuring database extensions...')
        await db.execute(sql`
            -- Enable UUID extension
            CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
            
            -- Enable Vector extension
            CREATE EXTENSION IF NOT EXISTS "vector";
        `)

        // Configure RBAC functions
        console.log('📚 Configuring RBAC functions...')
        await createOrReplaceCanUserDo()

        // Configure triggers
        console.log('🔧 Configuring database triggers...')
        await createOrReplaceHandleNewUserTrigger()

        console.log('✅ Database configuration completed successfully')

        // Close the client connection
        await client.end()
    } catch (error) {
        console.error('❌ Error configuring database:', error)
        throw error
    }
}

// Execute configuration if this file is run directly
if (require.main === module) {
    configureDatabase()
        .then(() => process.exit(0))
        .catch((error) => {
            console.error('Failed to configure database:', error)
            process.exit(1)
        })
}

// Export for use in other files
export { configureDatabase }
