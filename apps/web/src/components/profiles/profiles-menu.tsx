'use client'

import { useQuery } from "@apollo/client"
import { graphql } from "@/gql"
import { Avatar, AvatarFallback, AvatarImage } from "@thinair-monorepo-template/ui/components/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@thinair-monorepo-template/ui/components/dropdown-menu"
import { Settings, LogOut, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { createBrowserClient } from "@thinair-monorepo-template/supabase/createBrowserClient"

const ProfilesMenuQuery = graphql(`
    query ProfilesMenuQuery {
        viewer {
            id
            email
            firstName
            lastName
            profilePictureUrl
        }
    }
`)

export function ProfilesMenu() {
    const router = useRouter()
    const { data, loading } = useQuery(ProfilesMenuQuery)
    const supabase = createBrowserClient()

    if (loading) {
        return (
            <div className="p-4 border-t">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
                    <div className="flex-1">
                        <div className="h-4 w-24 bg-muted rounded animate-pulse" />
                        <div className="h-3 w-16 bg-muted rounded mt-1 animate-pulse" />
                    </div>
                </div>
            </div>
        )
    }

    const profile = data?.viewer
    if (!profile) return null

    const fullName = [profile.firstName, profile.lastName].filter(Boolean).join(' ')

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/login')
    }

    return (
        <div className="p-4 border-t max-w-[250px]">
            <DropdownMenu>
                <DropdownMenuTrigger className="w-full">
                    <div className="flex items-center gap-3 hover:bg-accent rounded-md p-2 transition-colors">
                        <Avatar className="w-8 h-8">
                            <AvatarImage 
                                src={profile.profilePictureUrl ?? undefined} 
                                alt={fullName} 
                            />
                            <AvatarFallback><User size={16} /></AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0 text-left">
                            <p className="text-sm font-medium truncate">{fullName}</p>
                            <p className="text-xs text-muted-foreground truncate">{profile.email}</p>
                        </div>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem onClick={() => router.push('/dashboard/settings')}>
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
