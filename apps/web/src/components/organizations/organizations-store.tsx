'use client'
import { graphql } from "@/gql";
import { useQuery } from "@apollo/client";
import { createBrowserClient } from "@thinair-monorepo-template/supabase/createBrowserClient";
import { useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import invariant from "tiny-invariant";
import { NodeKeyProvider } from "@/context/node-key-provider";
interface OrganizationState {
    organizationId: string | null;
    setOrganizationId: (id: string | null) => void;
}

export const useOrganizationStore = create<OrganizationState>()(
    persist(
        (set) => ({
            organizationId: null,
            setOrganizationId: (id: string | null) => set({ organizationId: id }),
        }),
        {
            name: "organization-context",
        }
    )
);

const OrganizationsIdSetQuery = graphql(`
    query OrganizationsIdSetQuery {
        organizationsCollection {
            edges {
                node {
                    id
                }
            }
        }
    }
`)

// Convenience hook to just get the organizationId
export const useOrganizationId = () => {
    const organizationId = useOrganizationStore((state) => state.organizationId);
    const { data, loading } = useQuery(OrganizationsIdSetQuery)

    useEffect(() => {
        (async () => {
            const {data: userData} = await createBrowserClient().auth.getUser()
            const userId = userData.user?.id
            invariant(userId, "User not found")
            
            useOrganizationStore.persist.setOptions({
                name: `${userId}:organization-context`
            })
            useOrganizationStore.persist.rehydrate()

            // If we don't have an organizationId and we have data from the query
            if (!organizationId) {
                useOrganizationStore.setState({
                    // Implies on Personal Account
                    organizationId: null
                })
            }
        })()
    }, [data, organizationId])

    return [organizationId, useOrganizationStore.getState().setOrganizationId] as const;
}

export const OrganizationNodeKeyProvider = ({children}: {children: React.ReactNode}) => {
    const [organizationId] = useOrganizationId()
    return (
        <NodeKeyProvider node={organizationId ? {
            __typename: 'Organizations',
            id: organizationId
        } : null}>
            {children}
        </NodeKeyProvider>
    )
}