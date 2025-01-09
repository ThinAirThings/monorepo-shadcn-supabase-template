# Popover

Displays rich content in a portal, triggered by a button.

## Installation

To install the Popover component, use the following command:

```bash
pnpm dlx shadcn@latest add popover
```

## Usage

Import the Popover components into your project:

```javascript
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
```

Use the Popover component in your JSX:

```jsx
<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>
```

This setup allows you to display rich content in a popover, triggered by a button.