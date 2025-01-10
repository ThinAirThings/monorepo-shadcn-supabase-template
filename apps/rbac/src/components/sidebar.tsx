"use client"

import { cn } from "@usepulse/ui/lib/utils"
import { Button } from "@usepulse/ui/components/button"
import { ScrollArea } from "@usepulse/ui/components/scroll-area"
import { Shield, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const routes = [
  {
    label: "Roles",
    icon: Users,
    href: "/roles",
  },
  {
    label: "Policies",
    icon: Shield,
    href: "/policies",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <ScrollArea className="h-screen w-64">
        <div className="p-6">
          <h2 className="mb-4 text-lg font-semibold">RBAC Manager</h2>
          <div className="space-y-2">
            {routes.map((route) => (
              <Link key={route.href} href={route.href}>
                <Button
                  variant={pathname === route.href ? "secondary" : "ghost"}
                  className={cn("w-full justify-start gap-2")}
                >
                  <route.icon className="h-4 w-4" />
                  {route.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  )
} 