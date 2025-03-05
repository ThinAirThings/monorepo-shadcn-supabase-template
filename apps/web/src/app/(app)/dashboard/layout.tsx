import { OrganizationNodeKeyProvider } from "@/components/organizations/organizations-store";
import { OrganizationsCombobox } from "@/components/organizations/organizations-combobox";
import Image from "next/image";
import { ProjectsCombobox } from "@/components/projects/projects-combobox";
import { ProjectNodeKeyProvider } from "@/components/projects/projects-store";
import { DashboardSidebar } from "@/components/dashboard-layout/dashboard-sidebar";
import { ProfilesMenu } from "@/components/profiles/profiles-menu";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <OrganizationNodeKeyProvider>
            <ProjectNodeKeyProvider>
                <div className="min-h-screen max-h-screen overflow-hidden w-full grid grid-rows-[auto_1fr]">
                    {/* Header */}
                    <header className="border-b">
                        <div className="h-14 px-2 flex items-center justify-between">
                            <div className="flex items-center space-x-8">
                                {/* Logo or brand name */}
                                <Image src="/thinair-ears-white.svg" alt="Thinair Logo" width={34} height={34} className="translate-y-[-2px]"/>
                                <div className="flex items-center space-x-4">
                                    <OrganizationsCombobox />
                                    <span className="text-muted-foreground">/</span>
                                    <ProjectsCombobox />
                                </div>
                            </div>
                            {/* Right side navigation */}
                            <div className="flex items-center space-x-4">
                                <ProfilesMenu />
                            </div>
                        </div>
                    </header>
                    {/* Main content */}
                    <div className="flex h-full overflow-hidden max-h-full">
                        <DashboardSidebar />    
                        {children}
                    </div>
                </div>
            </ProjectNodeKeyProvider>
        </OrganizationNodeKeyProvider>
    );
}
