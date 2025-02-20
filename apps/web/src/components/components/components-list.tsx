'use client'

import { graphql } from "@/gql"
import { useFragment } from "@apollo/client"
import { useNodeKey } from "@/context/node-key-provider"
import { Button } from "@thinair-monorepo-template/ui/components/button"
import { Plus, Database, ChevronRight } from "lucide-react"
import { Skeleton } from "@thinair-monorepo-template/ui/components/skeleton"
import { Separator } from "@thinair-monorepo-template/ui/components/separator"
import { ComponentsDrawer } from "./components-drawer"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@thinair-monorepo-template/ui/lib/utils"

export const ComponentsListFragment = graphql(`
    fragment ComponentsListFragment on Projects {
        id  
        componentsCollection {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
`)

export function ComponentsList() {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const projectNodeKey = useNodeKey('Projects')
    const pathname = usePathname()
    const activeComponentId = pathname.split('/').pop()

    const {data} = useFragment({
        from: projectNodeKey,
        fragment: ComponentsListFragment,
        fragmentName: 'ComponentsListFragment'
    })
    const components = data?.componentsCollection?.edges?.map(edge => edge?.node) ?? []

    return (
        <div className="flex-1 flex flex-col">
            <div className="p-4">
                <h1 className="text-md font-semibold">Component Editor</h1>
            </div>
            <Separator className="mb-4" />
            <div className="flex-1 p-4 pt-0">
                <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start"
                    onClick={() => setDrawerOpen(true)}
                >
                    <Plus className="h-4 w-4 mr-2" />
                    New Component
                </Button>
                {components.length === 0 ? (
                    <div className="text-center text-muted-foreground mt-4">
                        No components found
                    </div>
                ) : (
                    <div className="mt-4">
                        {components.map(component => {
                            const isActive = component?.id === activeComponentId
                            return (
                                <Link
                                    key={component?.id}
                                    href={`/dashboard/component-editor/${component?.id}`}
                                    className={cn(
                                        "flex items-center h-8 px-2 rounded-md text-sm transition-colors relative group",
                                        isActive 
                                            ? "bg-muted hover:bg-muted" 
                                            : "hover:bg-muted/50",
                                        isActive && "after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-[2px] after:h-4 after:bg-foreground after:rounded-full"
                                    )}
                                >
                                    <Database className="h-4 w-4 mr-2 text-muted-foreground shrink-0" />
                                    <span className="truncate">{component?.name}</span>
                                </Link>
                            )
                        })}
                    </div>
                )}
            </div>

            <ComponentsDrawer 
                open={drawerOpen}
                setDrawerOpen={setDrawerOpen}
            />
        </div>
    )
}

function ComponentsListSkeleton() {
    return (
        <div className="flex-1 flex flex-col">
            <div className="p-4">
                <Skeleton className="h-8 w-48" />
                <Separator className="my-4" />
                <Skeleton className="h-9 w-full" />
            </div>
            <div className="flex-1 p-4 pt-0">
                <div className="space-y-2 mt-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex items-center h-8">
                            <Skeleton className="h-4 w-4 mr-2" />
                            <Skeleton className="h-4 flex-1" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
