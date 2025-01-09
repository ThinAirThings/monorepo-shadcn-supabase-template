# Alert Dialog

A modal dialog that interrupts the user with important content and expects a response.

## Installation

To install the Alert Dialog component, use the following command:

```bash
pnpm dlx shadcn@latest add alert-dialog
```

## Usage

Import the necessary components from the Alert Dialog module:

```javascript
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
```

Here is an example of how to use the Alert Dialog component:

```jsx
<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

For more information, refer to the [API Reference](https://www.radix-ui.com/docs/primitives/components/alert-dialog#api-reference).