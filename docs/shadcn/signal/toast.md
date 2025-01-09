# Toast Documentation

## Overview
A toast is a succinct message that is displayed temporarily to inform users of a process or action.

## Installation

### Run the following command:
```bash
pnpm dlx shadcn@latest add toast
```

### Add the Toaster component
In your `app/layout.tsx` file, add the following:
```javascript
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
```

## Usage

The `useToast` hook returns a `toast` function that you can use to display a toast.

Import the hook:
```javascript
import { useToast } from "@/hooks/use-toast"
```

Example usage:
```javascript
export const ToastDemo = () => {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
```

To display multiple toasts at the same time, update the `TOAST_LIMIT` in `use-toast.tsx`.

## Examples

### Simple
A basic toast example.

### With Title
A toast with a title.

### With Action
A toast that includes an action.

### Destructive
Use `toast({ variant: "destructive" })` to display a destructive toast.