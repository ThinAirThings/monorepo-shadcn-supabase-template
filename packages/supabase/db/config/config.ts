import { createOrReplaceHandleNewUserTrigger } from './triggers/handle-new-auth-user'
import { createOrReplaceAuditFieldsTrigger } from './triggers/handle-audit-fields'
import { enableTotalCountForAllTables } from './flags/enableTotalCount'
import { enableGraphqlInflection } from './flags/graphql-inflection'
import { createOrReplaceViewerFunction } from './functions/viewer'
import { sql } from 'drizzle-orm'
import { db } from '@/lib/drizzle/db'
import { createStorageBucket } from './storage/create-storage-bucket'
import { createOrReplaceDeleteTrigger } from './triggers/handle-delete'
import { createOrReplaceIsOrgMemberFunction } from './functions/is-org-member'

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
        await createOrReplaceDeleteTrigger()

        // Enable total count for all tables
        console.log('📊 Enabling total count for all tables...')
        await enableTotalCountForAllTables()

        // Create database functions
        console.log('🔧 Creating database functions...')
        await createOrReplaceViewerFunction()
        await createOrReplaceIsOrgMemberFunction()

        // Configure storage buckets
        console.log('📦 Configuring storage buckets...')
        await createStorageBucket({
            id: 'profile_pictures',
            public: true,
            policies: {
                // Anyone can view profile pictures
                select: `bucket_id = 'profile_pictures'`,
                
                // Users can only upload to their own folder
                insert: `
                    bucket_id = 'profile_pictures'
                    and auth.uid() = owner_id::uuid
                    and (storage.foldername(name))[1] = auth.uid()::text
                `,
                
                // Users can only update files in their own folder
                update: `
                    bucket_id = 'profile_pictures'
                    and auth.uid() = owner_id::uuid
                    and (storage.foldername(name))[1] = auth.uid()::text
                `
            }
        })
        await createStorageBucket({
            id: 'organization_profile_pictures',
            public: true,
            policies: {
                // Anyone can view organization profile pictures
                select: `bucket_id = 'organization_profile_pictures'`,
                
                // Allow upload if:
                // 1. User is owner/admin of the organization
                // 2. Organization has no members (creator can upload first logo)
                insert: `
                    bucket_id = 'organization_profile_pictures'
                    and (
                        exists (
                            select 1 from organization_members
                            where organization_id::text = (storage.foldername(name))[1]
                            and profile_id = auth.uid()
                            and role in ('Owner', 'Administrator')
                        )
                        or
                        not exists (
                            select 1 from organization_members
                            where organization_id::text = (storage.foldername(name))[1]
                        )
                    )
                `,
                // Only org owners/admins can update pictures
                update: `
                    bucket_id = 'organization_profile_pictures'
                    and exists (
                        select 1 from organization_members
                        where organization_id::text = (storage.foldername(name))[1]
                        and profile_id = auth.uid()
                        and role in ('Owner', 'Administrator')
                    )
                `
            }
        })
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