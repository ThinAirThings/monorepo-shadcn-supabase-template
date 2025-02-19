'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useTransition } from 'react';
import { createBrowserClient } from '@thinair-monorepo-template/supabase/createBrowserClient';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { FullLoading } from '@/components/full-loading';
import { skipToken, useQuery, useSuspenseQuery } from '@apollo/client';
import { graphql } from '@/gql';
import { NodeKeyProvider } from '@/context/node-key-provider';

export const AuthenticationQuery = graphql(`
    query AuthenticationQuery {
        viewer {
            id
            email
            firstName
            lastName
            phoneNumber
            createdAt
            updatedAt
            deletedAt
        }
    }
`);

export function AuthenticationProvider({ children }: { children: ReactNode }) {
    const [authUser, setAuthUser] = useState<User | null>(null);
    const [loading, startTransition] = useTransition();
    const supabase = createBrowserClient();
    const router = useRouter();

    const { data, error } = useQuery(AuthenticationQuery);
    const userNode = data?.viewer ?? null;
    useEffect(() => {
        startTransition(async () => {
            try {
                const { data: { user }, error: authError } = await supabase.auth.getUser();
                if (authError || !user) throw authError;
                setAuthUser(user);
            } catch (err) {
                await supabase.auth.signOut();
                router.push('/login');
            }
        });
    }, []);
    if (loading || !authUser || !userNode) {
        return <FullLoading />;
    }

    return (
        <NodeKeyProvider node={userNode}>
            {children}
        </NodeKeyProvider>
    );
}
