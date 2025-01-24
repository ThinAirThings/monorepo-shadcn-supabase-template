'use client'
import { apolloClient } from "@/lib/apollo/apollo-client"
import { ApolloProvider } from "@apollo/client"
import { AuthenticatedUserNodeProvider } from "./authentication-provider/authentication-provider"


export function AuthenticatedProviders({ children }: { children: React.ReactNode }) {
    return (
        <ApolloProvider client={apolloClient}>
            <AuthenticatedUserNodeProvider>
                {children}
            </AuthenticatedUserNodeProvider>
        </ApolloProvider>
    )
}