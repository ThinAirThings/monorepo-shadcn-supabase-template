import { ReactNode } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@thinair-monorepo-template/ui/components/dialog"
import { Button } from "@thinair-monorepo-template/ui/components/button"
import { OrganizationsForm } from "./organizations-form"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import { useUIForm } from "@/hooks/use-ui-form"
import { OrganizationFormValues } from "./organizations-form"

type ControlledDialogProps = {
    trigger?: never
    open: boolean
    setDialogOpen: (open: boolean) => void
}

type UncontrolledDialogProps = {
    trigger: ReactNode
    open?: never
    setDialogOpen?: never
}

type OrganizationsDialogProps = (ControlledDialogProps | UncontrolledDialogProps) & {
    mode?: "create" | "update"
    parentFragment?: { __typename: "Organizations" }
}

export function OrganizationsDialog(props: OrganizationsDialogProps) {
    const { mode = "create" } = props
    const form = useUIForm<OrganizationFormValues>()

    // Determine if we're in controlled or uncontrolled mode
    const isControlled = 'open' in props && props.open !== undefined
    const open = isControlled ? props.open : false
    const setOpen = isControlled ? props.setDialogOpen : () => {}

    const handleSubmit = () => {
        form.submit({
            onSuccess: () => {
                setOpen(false)
                toast.success(mode === "create" 
                    ? "Organization created successfully" 
                    : "Organization updated successfully"
                )
            },
            onError: (error) => {
                toast.error(error.message || `Failed to ${mode} organization`)
            }
        })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {props.trigger && <DialogTrigger asChild>{props.trigger}</DialogTrigger>}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {mode === "create" ? "Create Organization" : "Edit Organization"}
                    </DialogTitle>
                </DialogHeader>
                <OrganizationsForm 
                    mode={mode}
                    form={form}
                    parentFragment={props.parentFragment}
                />
                <div className="flex justify-end space-x-2 mt-6">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="button"
                        onClick={handleSubmit}
                        disabled={form.mutationLoading}
                    >
                        {form.mutationLoading && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        {mode === "create" ? "Create" : "Save"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
