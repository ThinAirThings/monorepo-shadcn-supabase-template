'use client'

import { Check, ChevronsUpDown, Plus, Building2, PersonStanding } from "lucide-react"
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
import { Avatar, AvatarFallback, AvatarImage } from "@thinair-monorepo-template/ui/components/avatar"
import { OrganizationsDialog } from "./organizations-dialog"
import { useOrganizationId, useOrganizationStore } from "./organizations-store"

const OrganizationsQuery = graphql(`
    query OrganizationsQuery {
        organizationsCollection {
            edges {
                node {
                    id
                    name
                    profilePictureUrl
                }
            }
        }
    }
`)

export function OrganizationsCombobox() {
    const [open, setOpen] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)
    const { data, loading } = useQuery(OrganizationsQuery)
    const [organizationId, setOrganizationId] = useOrganizationId()
    const organizations = data?.organizationsCollection?.edges?.map(edge => edge?.node) ?? []
    const selectedOrg = organizations.find(org => org?.id === organizationId)
    const handleCreateOrganization = () => {
        setOpen(false)
        setDialogOpen(true)
    }

    // Only show skeleton while loading
    if (loading) {
        return <OrganizationsComboboxSkeleton />
    }

    return (
        <>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant='ghost'
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between"
                    >
                        <div className="flex items-center gap-2">
                            <Avatar className="h-5 w-5 rounded-md">
                                {selectedOrg ? (
                                    <>
                                        <AvatarImage 
                                            src={selectedOrg.profilePictureUrl ?? undefined}
                                            alt={selectedOrg.name}
                                            className="rounded-md"
                                        />
                                        <AvatarFallback className="rounded-md">
                                            <Building2 className="h-3 w-3" />
                                        </AvatarFallback>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </Avatar>
                            {selectedOrg ? selectedOrg.name : "Personal"}
                        </div>
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search organization..." />
                        <CommandList>
                            <CommandEmpty>No organization found.</CommandEmpty>
                            <CommandGroup>
                                {/* Personal workspace option */}
                                <CommandItem
                                    value="Personal"
                                    onSelect={() => {
                                        setOrganizationId(null)
                                        setOpen(false)
                                    }}
                                >
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-5 w-5 rounded-md">
                                            <AvatarFallback className="rounded-md">
                                                <PersonStanding className="h-3 w-3" />
                                            </AvatarFallback>
                                        </Avatar>
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                organizationId === null ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        Personal
                                    </div>
                                </CommandItem>
                                {/* Organization options */}
                                {organizations.map((org) => (
                                    <CommandItem
                                        key={org?.id ?? ''}
                                        value={org?.name ?? ''}
                                        onSelect={() => {
                                            setOrganizationId(org?.id ?? null)
                                            setOpen(false)
                                        }}
                                    >
                                        <div className="flex items-center gap-2">
                                            <Avatar className="h-5 w-5 rounded-md">
                                                <AvatarImage 
                                                    src={org?.profilePictureUrl ?? undefined}
                                                    alt={org?.name ?? ''}
                                                    className="rounded-md"
                                                />
                                                <AvatarFallback className="rounded-md">
                                                    <Building2 className="h-3 w-3" />
                                                </AvatarFallback>
                                            </Avatar>
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    organizationId === org?.id ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {org?.name}
                                        </div>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                            <CommandSeparator />
                            <CommandGroup>
                                <CommandItem onSelect={handleCreateOrganization}>
                                    <Plus className="mr-2 h-4 w-4" />
                                    Create Organization
                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>

            <OrganizationsDialog 
                open={dialogOpen}
                setDialogOpen={setDialogOpen}
            />
        </>
    )
}

export function OrganizationsComboboxSkeleton() {
    return (
        <Button
            variant="outline"
            className="w-[200px] justify-between animate-pulse"
            disabled
        >
            <span className="h-4 w-24 bg-muted rounded" />
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
    )
}
