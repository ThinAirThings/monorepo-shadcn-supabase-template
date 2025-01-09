# Toast Component Documentation

## Overview
A toast is a succinct message that is displayed temporarily to inform users of an event or action.

## Installation

### Run the following command:
```bash
pnpm dlx shadcn@latest add toast
```

### Add the Toaster Component
In your `app/layout.tsx` file, add the Toaster component:
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
The `useToast` hook returns a `toast` function that you can use to display a toast message.

### Import the Hook
```javascript
import { useToast } from "@/hooks/use-toast"
```

### Example Usage
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

### Simple Toast
A basic toast message.

### Toast with Title
A toast message that includes a title.

### Toast with Action
A toast message that includes an action.

### Destructive Toast
Use `toast({ variant: "destructive" })` to display a destructive toast message.