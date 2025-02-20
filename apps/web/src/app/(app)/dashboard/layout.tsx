import { OrganizationNodeKeyProvider } from "@/components/organizations/organizations-store";
import { OrganizationsCombobox } from "@/components/organizations/organizations-combobox";
import Image from "next/image";
import { ProjectsCombobox } from "@/components/projects/projects-combobox";
import { ProjectNodeKeyProvider } from "@/components/projects/projects-store";
import { DashboardSidebar } from "@/components/dashboard-layout/dashboard-sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <OrganizationNodeKeyProvider>
            <ProjectNodeKeyProvider>
                <div className="min-h-screen flex flex-col">
                    {/* Header */}
                    <header className="border-b">
                    <div className="h-16 px-4 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            {/* Logo or brand name */}
                            <Image src="/thinair-ears-white.svg" alt="Thinair Logo" width={40} height={40} />
                            <div className="flex items-center space-x-4">
                                <OrganizationsCombobox />
                                <span className="text-muted-foreground">/</span>
                                <ProjectsCombobox />
                            </div>
                        </div>
                        {/* Right side navigation */}
                        <div className="flex items-center space-x-4">
                        </div>
                    </div>
                </header>
                {/* Main content */}
                    <main className="flex-1 flex">
                        <DashboardSidebar />    
                        {children}
                    </main>
                </div>
            </ProjectNodeKeyProvider>
        </OrganizationNodeKeyProvider>
    );
}
