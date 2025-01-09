# Tooltip Documentation

## Overview
A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.

## Installation
To install the tooltip component, use the following command:

```bash
pnpm dlx shadcn@latest add tooltip
```

## Usage
To use the tooltip component, import the necessary modules:

```javascript
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
```

Here is an example of how to implement the tooltip:

```javascript
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover</TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## Additional Resources
- [Tooltip Documentation](https://www.radix-ui.com/docs/primitives/components/tooltip)
- [API Reference](https://www.radix-ui.com/docs/primitives/components/tooltip#api-reference)