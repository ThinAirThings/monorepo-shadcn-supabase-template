# Context Menu

The Context Menu component displays a menu to the user, such as a set of actions or functions, triggered by a button.

## Installation

To install the Context Menu component, use the following command:

```shell
pnpm dlx shadcn@latest add context-menu
```

## Usage

To use the Context Menu component, import it as follows:

```javascript
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
```

Here is an example of how to implement the Context Menu:

```javascript
<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Billing</ContextMenuItem>
    <ContextMenuItem>Team</ContextMenuItem>
    <ContextMenuItem>Subscription</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

For more information, refer to the [API Reference](https://www.radix-ui.com/docs/primitives/components/context-menu#api-reference).