"use client"

import { createRbacClient } from "@usepulse/supabase/createRbacClient"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@usepulse/ui/components/table"
import { Button } from "@usepulse/ui/components/button"
import { Plus, Settings } from "lucide-react"
import { CreateRoleDialog } from "./create-role-dialog"
import { ManageRolePoliciesDialog } from "./manage-role-policies-dialog"
import { Database } from "@usepulse/supabase/types"
import { useState } from "react"

type Role = {
  id: string
  name: string
  description: string
  created_at: string
  policies?: Policy[]
}

type Policy = {
  id: string
  name: string
  action: string
  resource: string
  effect: 'allow' | 'deny'
}

async function fetchRoles() {
  const supabase = createRbacClient()
  const { data: rolesData, error: rolesError } = await supabase
    .from("roles")
    .select(`
      *,
      role_policies (
        policy:policies (
          id,
          name,
          action,
          resource,
          effect
        )
      )
    `)
    .order("created_at", { ascending: false })

  if (rolesError) throw rolesError

  return rolesData.map(role => ({
    ...role,
    policies: role.role_policies?.map((rp: {policy: Database['public']['Tables']['policies']['Row']}) => rp.policy) || []
  }))
}

export function RolesList() {
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState<Role | null>(null)
  const { data: roles = [], isLoading } = useQuery({
    queryKey: ['roles'],
    queryFn: fetchRoles
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Roles</h2>
        <Button onClick={() => setIsCreateOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Create Role
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Policies</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.id}>
              <TableCell>{role.name}</TableCell>
              <TableCell>{role.description}</TableCell>
              <TableCell>
                <span className="text-sm text-muted-foreground">
                  {role.policies?.length || 0} policies
                </span>
              </TableCell>
              <TableCell>{new Date(role.created_at).toLocaleDateString()}</TableCell>
              <TableCell className="space-x-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedRole(role)}
                >
                  <Settings className="h-4 w-4 mr-1" />
                  Manage Policies
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CreateRoleDialog open={isCreateOpen} onOpenChange={setIsCreateOpen} />
      <ManageRolePoliciesDialog
        role={selectedRole} 
        open={!!selectedRole} 
        onOpenChange={(open) => !open && setSelectedRole(null)} 
      />
    </div>
  )
} 