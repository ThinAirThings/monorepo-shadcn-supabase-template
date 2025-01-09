# Dialog Component Documentation

## Overview
A dialog is a window overlaid on either the primary window or another dialog window, rendering the content underneath inert.

## Installation
To install the Dialog component, use the following command:

```bash
pnpm dlx shadcn@latest add dialog
```

## Usage
Import the necessary components from the Dialog module:

```javascript
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
```

### Example Usage

```javascript
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

## Examples

### Custom Close Button
To activate the `Dialog` component from within a `Context Menu` or `Dropdown Menu`, you must encase the `Context Menu` or `Dropdown Menu` component in the `Dialog` component.

```javascript
<Dialog>
  <ContextMenu>
    <ContextMenuTrigger>Right click</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Open</ContextMenuItem>
      <ContextMenuItem>Download</ContextMenuItem>
      <DialogTrigger asChild>
        <ContextMenuItem>
          <span>Delete</span>
        </ContextMenuItem>
      </DialogTrigger>
    </ContextMenuContent>
  </ContextMenu>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. Are you sure you want to permanently
        delete this file from our servers?
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button type="submit">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## Notes
For more information on using the Dialog component with context menus, refer to the [linked issue](https://github.com/radix-ui/primitives/issues/1836).