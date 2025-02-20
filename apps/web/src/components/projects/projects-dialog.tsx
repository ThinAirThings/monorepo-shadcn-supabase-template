import { ReactNode } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@thinair-monorepo-template/ui/components/dialog"
import { Button } from "@thinair-monorepo-template/ui/components/button"
import { ProjectsForm, ProjectFormValues } from "./projects-form"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import { useUIForm } from "@/hooks/use-ui-form"

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

type ProjectsDialogProps = (ControlledDialogProps | UncontrolledDialogProps) & {
    mode?: "create" | "update"
    parentFragment?: { __typename: "Projects" }
}

export function ProjectsDialog(props: ProjectsDialogProps) {
    const { mode = "create" } = props
    const form = useUIForm<ProjectFormValues>()

    // Determine if we're in controlled or uncontrolled mode
    const isControlled = 'open' in props && props.open !== undefined
    const open = isControlled ? props.open : false
    const setOpen = isControlled ? props.setDialogOpen : () => {}

    const handleSubmit = () => {
        form.submit({
            onSuccess: () => {
                setOpen(false)
                toast.success(mode === "create" 
                    ? "Project created successfully" 
                    : "Project updated successfully"
                )
            },
            onError: (error) => {
                toast.error(error.message || `Failed to ${mode} project`)
            }
        })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {props.trigger && <DialogTrigger asChild>{props.trigger}</DialogTrigger>}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {mode === "create" ? "Create Project" : "Edit Project"}
                    </DialogTitle>
                </DialogHeader>
                <ProjectsForm 
                    form={form}
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
