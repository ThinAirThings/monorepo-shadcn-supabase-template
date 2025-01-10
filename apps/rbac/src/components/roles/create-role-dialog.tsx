"use client"

import { useState } from "react"
import { createRbacClient } from "@usepulse/supabase/createRbacClient"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@usepulse/ui/components/dialog"
import { Button } from "@usepulse/ui/components/button"
import { Input } from "@usepulse/ui/components/input"
import { Label } from "@usepulse/ui/components/label"
import { Textarea } from "@usepulse/ui/components/textarea"

interface CreateRoleDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

async function createRole({ name, description }: { name: string; description: string }) {
  const supabase = createRbacClient()
  const { error } = await supabase
    .from("roles")
    .insert([{ name, description }])

  if (error) throw error
}

export function CreateRoleDialog({ open, onOpenChange }: CreateRoleDialogProps) {
  const queryClient = useQueryClient()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const mutation = useMutation({
    mutationFn: createRole,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['roles'] })
      onOpenChange(false)
      setName("")
      setDescription("")
    }
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    mutation.mutate({ name, description })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Role</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Admin"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Full system access"
            />
          </div>
          <Button 
            type="submit"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? 'Creating...' : 'Create Role'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 