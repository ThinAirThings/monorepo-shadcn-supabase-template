'use client'
import { apolloClient } from "@/lib/apollo/apollo-client"
import { ApolloProvider } from "@apollo/client"
import { AuthenticationProvider } from "./authentication-provider/authentication-provider"


export function AuthenticatedProviders({ children }: { children: React.ReactNode }) {
    return (
        <ApolloProvider client={apolloClient}>
            <AuthenticationProvider>
                {children}
            </AuthenticationProvider>
        </ApolloProvider>
    )
}