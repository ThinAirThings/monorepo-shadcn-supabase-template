# Drawer Component for React

## About

The Drawer component is built on top of [Vaul](https://github.com/emilkowalski/vaul) by [emilkowalski_](https://twitter.com/emilkowalski_).

## Installation

To install the Drawer component, use the following command:

```bash
pnpm dlx shadcn@latest add drawer
```

## Usage

To use the Drawer component, import it as follows:

```javascript
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
```

Here is an example of how to implement the Drawer component:

```jsx
<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

## Examples

### Responsive Dialog

You can combine the `Dialog` and `Drawer` components to create a responsive dialog. This setup renders a `Dialog` component on desktop and a `Drawer` on mobile.