import { 
    ApolloClient, 
    InMemoryCache,
    createHttpLink,
    defaultDataIdFromObject,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import { createBrowserClient } from '@thinair-monorepo-template/supabase/createBrowserClient';
import { createServerClient } from '@thinair-monorepo-template/supabase/createServerClient';
import { getVercelURL } from '../vercel/get-vercel-url';

const httpLink = createHttpLink({
    uri: `${getVercelURL()}api/graphql`,
});

const authLink = setContext(async (_, { headers }) => {
    // Check if we're running on the server
    const isServer = typeof window === 'undefined';
    
    let session;
    
    if (isServer) {
        const supabase = await createServerClient();
        session = (await supabase.auth.getSession()).data.session;
    } else {
        const supabase = createBrowserClient();
        session = (await supabase.auth.getSession()).data.session;
    }

    return {
        headers: {
            ...headers,
            apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, // Always include anon key
            Authorization: session?.access_token ? `Bearer ${session.access_token}` : '', // Bearer prefix is important
        },
    };
});

export const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
        dataIdFromObject(responseObject) {
            if ('nodeId' in responseObject) {
                return `${responseObject.nodeId}`
            }
            return defaultDataIdFromObject(responseObject)
        },
        typePolicies: {
            Query: {
                fields: {
                    node: {
                        read(_, { args, toReference }) {
                            const ref = toReference({
                                nodeId: args?.nodeId,
                            })
                
                            return ref
                        },
                    },
                },
            },
        },
    }),
    dataMasking: true
});