# Collapsible Component Documentation

## Overview
The Collapsible component is an interactive UI element that allows users to expand or collapse a panel. It is part of the Radix UI Primitives library.

## Installation
To install the Collapsible component, use the following command:

```bash
pnpm dlx shadcn@latest add collapsible
```

## Usage
To use the Collapsible component, import it into your project as follows:

```javascript
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
```

Here is an example of how to implement the Collapsible component:

```jsx
<Collapsible>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects. No attribution required.
  </CollapsibleContent>
</Collapsible>
```

## Additional Resources
- [Checkbox Component Documentation](/docs/components/checkbox)
- [Combobox Component Documentation](/docs/components/combobox)

For more detailed information, refer to the [Collapsible API Reference](https://www.radix-ui.com/docs/primitives/components/collapsible#api-reference).