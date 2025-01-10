"use client"

import { useState, useEffect } from "react"
import { createRbacClient } from "@usepulse/supabase/createRbacClient"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@usepulse/ui/components/dialog"
import { Button } from "@usepulse/ui/components/button"
import { Checkbox } from "@usepulse/ui/components/checkbox"
import { ScrollArea } from "@usepulse/ui/components/scroll-area"
import { Badge } from "@usepulse/ui/components/badge"

type Policy = {
  id: string
  name: string
  action: string
  resource: string
  effect: 'allow' | 'deny'
}

type Role = {
  id: string
  name: string
  policies?: Policy[]
}

interface ManageRolePoliciesDialogProps {
  role: Role | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

async function fetchPolicies() {
  const supabase = createRbacClient()
  const { data, error } = await supabase
    .from("policies")
    .select("*")
    .order("name")

  if (error) throw error
  return data
}

async function updateRolePolicies({ 
  roleId, 
  toAdd, 
  toRemove 
}: { 
  roleId: string
  toAdd: string[]
  toRemove: string[]
}) {
  const supabase = createRbacClient()
  
  const promises = []

  if (toAdd.length) {
    promises.push(
      supabase
        .from("role_policies")
        .insert(toAdd.map(policyId => ({
          role_id: roleId,
          policy_id: policyId
        })))
    )
  }

  if (toRemove.length) {
    promises.push(
      supabase
        .from("role_policies")
        .delete()
        .match({ role_id: roleId })
        .in('policy_id', toRemove)
    )
  }

  await Promise.all(promises)
}

export function ManageRolePoliciesDialog({ 
  role, 
  open, 
  onOpenChange 
}: ManageRolePoliciesDialogProps) {
  const queryClient = useQueryClient()
  const [selectedPolicies, setSelectedPolicies] = useState<Set<string>>(new Set())
  
  const { data: availablePolicies = [], isLoading } = useQuery({
    queryKey: ['policies'],
    queryFn: fetchPolicies,
    enabled: open && !!role
  })

  const mutation = useMutation({
    mutationFn: updateRolePolicies,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['roles'] })
      onOpenChange(false)
    }
  })

  // Set initial selected policies when dialog opens
  useEffect(() => {
    if (role?.policies) {
      setSelectedPolicies(new Set(role.policies.map(p => p.id)))
    }
  }, [role])

  async function handleSave() {
    if (!role) return

    const currentPolicies = new Set(role.policies?.map(p => p.id) || [])
    const toAdd = [...selectedPolicies].filter(id => !currentPolicies.has(id))
    const toRemove = [...currentPolicies].filter(id => !selectedPolicies.has(id))

    mutation.mutate({
      roleId: role.id,
      toAdd,
      toRemove
    })
  }

  if (isLoading) {
    return null
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Manage Policies for {role?.name}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {availablePolicies.map((policy) => (
              <div key={policy.id} className="flex items-start space-x-3 p-2 hover:bg-muted/50 rounded-lg">
                <Checkbox
                  checked={selectedPolicies.has(policy.id)}
                  onCheckedChange={(checked) => {
                    const newSelected = new Set(selectedPolicies)
                    if (checked) {
                      newSelected.add(policy.id)
                    } else {
                      newSelected.delete(policy.id)
                    }
                    setSelectedPolicies(newSelected)
                  }}
                />
                <div className="space-y-1">
                  <div className="font-medium">{policy.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {policy.resource} - {policy.action}
                  </div>
                  <Badge variant={policy.effect === 'allow' ? 'default' : 'destructive'}>
                    {policy.effect}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleSave}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 