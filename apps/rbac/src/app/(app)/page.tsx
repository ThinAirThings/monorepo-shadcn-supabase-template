import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { RolesList } from "@/components/roles/roles-list"

export default function Page() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="RBAC Dashboard"
        description="Manage your application's roles and permissions"
      />
      <div className="grid gap-8">
        <RolesList />
      </div>
    </DashboardShell>
  )
}