'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useTransition } from 'react';
import { createBrowserClient } from '@usepulse/supabase/createBrowserClient';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { FullLoading } from '@/components/full-loading';
import { skipToken, useQuery, useSuspenseQuery } from '@apollo/client';
import { graphql } from '@/gql';
import { AuthenticatedUserQueryQuery } from '@/gql/graphql';

export const AuthenticatedUserQuery = graphql(`
    query AuthenticatedUserQuery {
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

interface AuthenticatedUserContextType {
    userNode: NonNullable<AuthenticatedUserQueryQuery['viewer']>;
}

const AuthenticatedUserContext = createContext<AuthenticatedUserContextType | undefined>(undefined);

export function AuthenticatedUserNodeProvider({ children }: { children: ReactNode }) {
    const [authUser, setAuthUser] = useState<User | null>(null);
    const [loading, startTransition] = useTransition();
    const supabase = createBrowserClient();
    const router = useRouter();

    const { data, error } = useQuery(AuthenticatedUserQuery);
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
        <AuthenticatedUserContext.Provider
            value={{
                userNode,
            }}
        >
            {children}
        </AuthenticatedUserContext.Provider>
    );
}

export function useAuthenticatedUserNode() {
    const context = useContext(AuthenticatedUserContext);
    
    if (context === undefined) {
        throw new Error('useAuthenticatedUserNode must be used within an AuthenticatedUserProvider');
    }
    
    return context;
}
