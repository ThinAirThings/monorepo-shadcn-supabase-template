'use client'
import { useState } from "react";
import { cn } from "@thinair-monorepo-template/ui/lib/utils";
import { Home, Component } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

interface NavItem {
    label: string;
    href: string;
    icon: LucideIcon;
}

const navigationItems: NavItem[] = [
    {
        label: "Home",
        href: "/dashboard",
        icon: Home
    },
    {
        label: "Component Editor",
        href: "/dashboard/component-editor",
        icon: Component
    }
]

export function DashboardSidebar() {
    const [isHovered, setIsHovered] = useState(false)
    const pathname = usePathname()

    return (
        <div
            className={cn(
                "min-h-full w-[60px] flex flex-col gap-2 bg-background border-r pt-4 transition-all duration-300 ease-in-out overflow-x-hidden",
                isHovered && "w-[240px]"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {navigationItems.map((item) => (
                <Link 
                    key={item.href}
                    href={item.href}
                    className={cn(
                        "flex items-center gap-2 px-3 py-3 mx-2 rounded-md transition-colors",
                        "hover:bg-muted",
                        pathname === item.href && "bg-muted"
                    )}
                >
                    <item.icon size={20} className="min-w-[20px]" />
                    <span className={cn(
                        "text-sm opacity-0 transition-opacity duration-300 whitespace-nowrap",
                        isHovered && "opacity-100"
                    )}>
                        {item.label}
                    </span>
                </Link>
            ))}
        </div>
    )
}