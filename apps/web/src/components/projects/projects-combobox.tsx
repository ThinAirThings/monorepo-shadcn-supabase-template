'use client'

import { Check, ChevronsUpDown, Plus } from "lucide-react"
import { cn } from "@thinair-monorepo-template/ui/lib/utils"
import { Button } from "@thinair-monorepo-template/ui/components/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@thinair-monorepo-template/ui/components/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@thinair-monorepo-template/ui/components/popover"
import { useState } from "react"
import { graphql } from "@/gql"
import { useQuery } from "@apollo/client"
import { ProjectsDialog } from "./projects-dialog"
import { useNodeKey } from "@/context/node-key-provider"
import { useProjectId } from "./projects-store"

export const ProjectsQuery = graphql(`
    query ProjectsQuery($organizationId: UUID, $profileId: UUID) {
        projectsCollection(
            filter: { 
                organizationId: { eq: $organizationId },
                profileId: { eq: $profileId }
            }
        ) {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
`)

export function ProjectsCombobox() {
    const [open, setOpen] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)
    const organizationNodeKey = useNodeKey('Organizations', false)
    const profileNodeKey = useNodeKey('Profiles')

    const [projectId, setProjectId] = useProjectId()
    
    const { data, loading } = useQuery(ProjectsQuery, {
        variables: {
            ...(organizationNodeKey ? { organizationId: organizationNodeKey.id } : { profileId: profileNodeKey.id }),
        },
        skip: !organizationNodeKey && !profileNodeKey,
    })
    const projects = data?.projectsCollection?.edges?.map(edge => edge?.node) ?? []
    const selectedProject = projects.find(project => project?.id === projectId)
    
    const handleCreateProject = () => {
        setOpen(false)
        setDialogOpen(true)
    }

    // Only show skeleton while loading
    if (loading) {
        return <ProjectsComboboxSkeleton />
    }

    return (
        <>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="ghost"
                        role="combobox"
                        aria-expanded={open}
                        className={cn(
                            "w-[200px] justify-between",
                            selectedProject ? "text-foreground" : "text-muted-foreground"
                        )}
                    >
                        {selectedProject ? selectedProject.name : "Select Project"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search projects..." />
                        <CommandList>
                            <CommandEmpty>No projects found.</CommandEmpty>
                            <CommandGroup>
                                {projects.map((project) => (
                                    <CommandItem
                                        key={project?.id ?? ''}
                                        value={project?.name ?? ''}
                                        onSelect={() => {
                                            setProjectId(project?.id ?? null)
                                            setOpen(false)
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                projectId === project?.id ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {project?.name}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                            <CommandSeparator />
                            <CommandGroup>
                                <CommandItem onSelect={handleCreateProject}>
                                    <Plus className="mr-2 h-4 w-4" />
                                    Create Project
                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>

            <ProjectsDialog 
                open={dialogOpen}
                setDialogOpen={setDialogOpen}
            />
        </>
    )
}

export function ProjectsComboboxSkeleton() {
    return (
        <Button
            variant="ghost"
            className="w-[200px] justify-between animate-pulse"
            disabled
        >
            <span className="h-4 w-24 bg-muted rounded" />
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
    )
}
