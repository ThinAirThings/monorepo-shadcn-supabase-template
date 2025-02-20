'use client'

import type { ReactNode } from "react"
import { useState } from "react"
import { Button } from "@thinair-monorepo-template/ui/components/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@thinair-monorepo-template/ui/components/sheet"
import { Loader2 } from "lucide-react"
import { ComponentsForm, type ComponentFormValues } from "./components-form"
import { useUIForm } from "@/hooks/use-ui-form"
import { toast } from "sonner"

type ControlledDrawerProps = {
    trigger?: never;
    open: boolean;
    setDrawerOpen: (open: boolean) => void;
};

type UncontrolledDrawerProps = {
    trigger: ReactNode;
    open?: never;
    setDrawerOpen?: never;
};

type ComponentsDrawerProps = ControlledDrawerProps | UncontrolledDrawerProps;

export function ComponentsDrawer(props: ComponentsDrawerProps) {
    const form = useUIForm<ComponentFormValues>();
    const isControlled = "open" in props && props.open !== undefined;
    const [internalOpen, setInternalOpen] = useState(false);
    
    const open = isControlled ? props.open : internalOpen;
    const setOpen = isControlled ? props.setDrawerOpen : setInternalOpen;

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            {props.trigger && <SheetTrigger asChild>{props.trigger}</SheetTrigger>}
            <SheetContent className="w-[400px] sm:w-[540px]">
                <div className="flex h-full flex-col">
                    <SheetHeader className="pb-4">
                        <SheetTitle>Create Component</SheetTitle>
                    </SheetHeader>

                    <div className="flex-1 overflow-y-auto px-2">
                        <ComponentsForm 
                            form={form}
                        />
                    </div>

                    <div className="flex items-center justify-end space-x-2 pt-4 border-t">
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
                                        toast.success("Component created successfully");
                                        setOpen(false);
                                    },
                                    onError: (err) => {
                                        toast.error(err.message || "Failed to create component");
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
                </div>
            </SheetContent>
        </Sheet>
    )
}
