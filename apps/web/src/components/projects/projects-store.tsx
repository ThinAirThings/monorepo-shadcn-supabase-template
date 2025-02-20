'use client'
import { graphql } from "@/gql";
import { useQuery } from "@apollo/client";
import { createBrowserClient } from "@thinair-monorepo-template/supabase/createBrowserClient";
import { useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import invariant from "tiny-invariant";
import { NodeKeyProvider } from "@/context/node-key-provider";
import { useNodeKey } from "@/context/node-key-provider";
import { FullLoading } from "../full-loading";

interface ProjectState {
    projectId: string | null;
    setProjectId: (id: string | null) => void;
}

export const useProjectStore = create<ProjectState>()(
    persist(
        (set) => ({
            projectId: null,
            setProjectId: (id: string | null) => set({ projectId: id }),
        }),
        {
            name: "project-context",
        }
    )
);

const ProjectsIdSetQuery = graphql(`
    query ProjectsIdSetQuery($organizationId: UUID, $profileId: UUID) {
        projectsCollection(
            filter: { 
                organizationId: { eq: $organizationId },
                profileId: { eq: $profileId }
            }
        ) {
            edges {
                node {
                    id
                }
            }
        }
    }
`)

// Convenience hook to just get the projectId
export const useProjectId = () => {
    const projectId = useProjectStore((state) => state.projectId);
    const organizationNodeKey = useNodeKey('Organizations', {isInvariant: false})
    const profileNodeKey = useNodeKey('Profiles')

    const { data, loading } = useQuery(ProjectsIdSetQuery, {
        variables: {
            ...(organizationNodeKey ? { organizationId: organizationNodeKey.id } : { profileId: profileNodeKey.id }),
        },
        skip: !organizationNodeKey && !profileNodeKey,
    })

    useEffect(() => {
        (async () => {
            const {data: userData} = await createBrowserClient().auth.getUser()
            const userId = userData.user?.id
            invariant(userId, "User not found")
            
            useProjectStore.persist.setOptions({
                name: `${userId}:${organizationNodeKey?.id ?? profileNodeKey?.id}:project-context`
            })
            useProjectStore.persist.rehydrate()
        })()
    }, [data, projectId, organizationNodeKey?.id])

    return [projectId, useProjectStore.getState().setProjectId] as const;
}

export const ProjectNodeKeyProvider = ({children}: {children: React.ReactNode}) => {
    const [projectId] = useProjectId()
    if (!projectId) return <FullLoading message="Loading project..." />
    return (
        <NodeKeyProvider node={projectId ? {
            __typename: 'Projects',
            id: projectId
        } : null}>
            {children}
        </NodeKeyProvider>
    )
}
