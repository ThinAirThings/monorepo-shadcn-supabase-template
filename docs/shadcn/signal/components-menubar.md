# Menubar

A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.

## Installation

To install the Menubar component, use the following command:

```bash
pnpm dlx shadcn@latest add menubar
```

## Usage

Import the necessary components from your UI library:

```javascript
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
```

Here is an example of how to use the Menubar component:

```jsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

For more information, refer to the [API Reference](https://www.radix-ui.com/docs/primitives/components/menubar#api-reference).