'use client'

import type { ReactNode } from "react"
import { useState } from "react"
import { Button } from "@thinair-monorepo-template/ui/components/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@thinair-monorepo-template/ui/components/dialog"
import { Loader2 } from "lucide-react"
import { ProjectsForm, type ProjectFormValues } from "./projects-form"
import { useUIForm } from "@/hooks/use-ui-form"
import { toast } from "sonner"

type ControlledDialogProps = {
    trigger?: never;
    open: boolean;
    setDialogOpen: (open: boolean) => void;
};

type UncontrolledDialogProps = {
    trigger: ReactNode;
    open?: never;
    setDialogOpen?: never;
};

type ProjectsDialogProps = ControlledDialogProps | UncontrolledDialogProps;

export function ProjectsDialog(props: ProjectsDialogProps) {
    const form = useUIForm<ProjectFormValues>();
    const isControlled = "open" in props && props.open !== undefined;
    const [internalOpen, setInternalOpen] = useState(false);
    
    const open = isControlled ? props.open : internalOpen;
    const setOpen = isControlled ? props.setDialogOpen : setInternalOpen;

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {props.trigger && <DialogTrigger asChild>{props.trigger}</DialogTrigger>}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Project</DialogTitle>
                </DialogHeader>

                <ProjectsForm 
                    form={form}
                />

                <div className="flex justify-end space-x-2">
                    <Button
                        variant="outline"
                        onClick={() => setOpen(false)}
                        disabled={form.mutationLoading}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            form.submit({
                                onSuccess: () => {
                                    toast.success("Project created successfully");
                                    setOpen(false);
                                },
                                onError: (err) => {
                                    toast.error(err.message || "Failed to create project");
                                },
                            });
                        }}
                        disabled={form.mutationLoading}
                    >
                        {form.mutationLoading && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Create
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
