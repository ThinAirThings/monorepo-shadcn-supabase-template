'use client'


export default function ComponentEditorEmptyState() {    
    return (
        <div className="h-full w-full flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold">No component selected</h1>
                <p className="text-muted-foreground">Select a component to get started</p>
            </div>
        </div>
    )
}