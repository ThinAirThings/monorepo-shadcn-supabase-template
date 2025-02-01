import { schema } from '@/graphql/schema'
import { createYoga, createSchema } from 'graphql-yoga'
import { createServerClient } from '@usepulse/supabase/createServerClient'
import { stitchSchemas } from '@graphql-tools/stitch';
import { buildHTTPExecutor } from '@graphql-tools/executor-http';
import { schemaFromExecutor } from '@graphql-tools/wrap';
import { createDrizzleSupabaseClient } from '@usepulse/supabase/drizzle/createDrizzleSupabaseClient';
import { db } from '@usepulse/supabase/drizzle/db';

interface NextContext {
  params: Promise<Record<string, string>>
}

let stitchedSchema: any = null;

async function getStitchedSchema() {
    if (stitchedSchema) return stitchedSchema;

    // Create executor for pg_graphql
    const pgGraphQLExecutor = buildHTTPExecutor({
        endpoint: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`,
        headers: executorRequest => {
          return ({
              apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
              Authorization: executorRequest?.context?.authHeader
          })
        },
    });

    // Get pg_graphql schema
    const pgGraphQLSchema = await schemaFromExecutor(pgGraphQLExecutor);

    // Stitch schemas together
    stitchedSchema = stitchSchemas({
        subschemas: [
            {
                schema: pgGraphQLSchema,
                executor: pgGraphQLExecutor,
            },
            {
                schema,
            },
        ],
    });

    return stitchedSchema;
}


const { handleRequest } = createYoga<NextContext>({
    schema: await getStitchedSchema(),
    context: async ({ request, params }) => {
      const authHeader = request.headers.get('Authorization');
        
      // If no auth header, return early with just the header
      if (!authHeader) {
          return { authHeader: null, user: null };
      }
      // Create Supabase client
      const supabase = await createServerClient();
      const accessToken = authHeader.split(' ')[1];
      // Get user from the token
      const { data: { user }, error } = await supabase.auth.getUser(accessToken);

      if (error || !accessToken) {
          console.error('Error getting user:', error);
          return { authHeader, user: null };
      }

      return { 
          authHeader,
          user,
          accessToken,
          db: createDrizzleSupabaseClient(accessToken, { admin: db, client: db })
      };
    },
    graphqlEndpoint: '/api/graphql',
    fetchAPI: { Response },
    // Add CORS configuration
    cors: {
        origin: '*',
        credentials: true,
        methods: ['POST', 'GET', 'OPTIONS']
    }
});

export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS }