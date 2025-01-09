# Dropdown Menu Documentation

## Overview
The Dropdown Menu component displays a menu to the user, such as a set of actions or functions, triggered by a button.

## Installation
To install the Dropdown Menu component, use the following command:

```bash
pnpm dlx shadcn@latest add dropdown-menu
```

## Usage
Import the necessary components from the Dropdown Menu module:

```javascript
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
```

Example usage of the Dropdown Menu:

```jsx
<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## Examples

### Checkboxes

### Radio Group

## Changelog

### 2024-10-16: Classes for Icons
Added `gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0` to the `DropdownMenuItem` to automatically style icons inside the dropdown menu item. Update your `dropdown-menu.tsx` file as follows:

```javascript
const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative ... gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
```

### 2024-10-25: Classes for `<DropdownMenuSubTrigger />`
Added `gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0` to the `<DropdownMenuSubTrigger />` to automatically style icons inside. Update your `dropdown-menu.tsx` file as follows:

```javascript
<DropdownMenuPrimitive.SubTrigger
  ref={ref}
  className={cn(
    "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    inset && "pl-8",
    className
  )}
  {...props}
>
  {/* ... */}
</DropdownMenuPrimitive.SubTrigger>
```

## Additional Resources
- [API Reference](https://www.radix-ui.com/docs/primitives/components/dropdown-menu#api-reference)