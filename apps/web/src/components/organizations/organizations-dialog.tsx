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
import { OrganizationsForm, type OrganizationFormValues } from "./organizations-form"
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

type OrganizationsDialogProps = ControlledDialogProps | UncontrolledDialogProps;

export function OrganizationsDialog(props: OrganizationsDialogProps) {
    const form = useUIForm<OrganizationFormValues>();
    const isControlled = "open" in props && props.open !== undefined;
    const [internalOpen, setInternalOpen] = useState(false);
    
    const open = isControlled ? props.open : internalOpen;
    const setOpen = isControlled ? props.setDialogOpen : setInternalOpen;

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {props.trigger && <DialogTrigger asChild>{props.trigger}</DialogTrigger>}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Organization</DialogTitle>
                </DialogHeader>

                <OrganizationsForm 
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
                                    toast.success("Organization created successfully");
                                    setOpen(false);
                                },
                                onError: (err) => {
                                    toast.error(err.message || "Failed to create organization");
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
