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
import createUploadLink  from 'apollo-upload-client/createUploadLink.mjs';
import { relayStylePagination } from '@apollo/client/utilities';
const httpLink = createHttpLink({
    uri: `${getVercelURL()}api/graphql`,
});
const uploadLink = createUploadLink({
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
    link: authLink.concat(uploadLink),
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    organizationsCollection: relayStylePagination(),
                    zonesCollection: relayStylePagination(),
                    leadsCollection: relayStylePagination(),
                },
            },
        },
    }),
    dataMasking: true
});