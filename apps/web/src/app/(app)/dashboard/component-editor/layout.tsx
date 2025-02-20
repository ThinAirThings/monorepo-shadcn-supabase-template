'use client'
import { ComponentsList } from "@/components/components/components-list"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@thinair-monorepo-template/ui/components/resizable"
import { graphql } from "@/gql"
import { useQuery } from "@apollo/client"
import { useNodeKey } from "@/context/node-key-provider"


const ComponentEditorQuery = graphql(`
    query ComponentEditor($id: UUID!) {
        projectsCollection(filter: {id: {eq: $id}}) {
            edges {
                node {
                    id
                    ...ComponentsListFragment
                }
            }
        }
    }
`)


export default function ComponentEditorLayout({children}: {children: React.ReactNode}) {
    const projectNodeKey = useNodeKey('Projects')
    const { data, loading } = useQuery(ComponentEditorQuery, {
        variables: { id: projectNodeKey.id },
        skip: !projectNodeKey
    })
    
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="h-full w-full"
        >
            <ResizablePanel defaultSize={15} minSize={10} maxSize={20}>
                <ComponentsList />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
                {children}
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}