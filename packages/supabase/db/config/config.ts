import { createOrReplaceHandleNewUserTrigger } from './triggers/handle-new-auth-user'
import { createOrReplaceAuditFieldsTrigger } from './triggers/handle-audit-fields'
import { enableTotalCountForAllTables } from './flags/enableTotalCount'
import { enableGraphqlInflection } from './flags/graphql-inflection'
import { createOrReplaceViewerFunction } from './functions/viewer'
import { sql } from 'drizzle-orm'
import { db } from '@/lib/drizzle/db'

console.log(process.env.DATABASE_URL)
async function configureDatabase() {
    try {
        console.log('🔄 Starting database configuration...')

        // Enable required extensions
        console.log('📦 Configuring database extensions...')
        await db.execute(sql`
            -- Enable UUID extension
            CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
            
            -- Enable Vector extension
            CREATE EXTENSION IF NOT EXISTS "vector";
        `)

        // Configure GraphQL
        console.log('🔧 Configuring GraphQL settings...')
        await enableGraphqlInflection()

        // Configure triggers
        console.log('🔧 Configuring database triggers...')
        await createOrReplaceAuditFieldsTrigger()
        await createOrReplaceHandleNewUserTrigger()

        // Enable total count for all tables
        console.log('📊 Enabling total count for all tables...')
        await enableTotalCountForAllTables()

        // Create database functions
        console.log('🔧 Creating database functions...')
        await createOrReplaceViewerFunction()

        console.log('✅ Database configuration completed successfully')

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