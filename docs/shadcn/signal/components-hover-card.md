# Hover Card Documentation

The Hover Card component allows sighted users to preview content available behind a link.

## Installation

To install the Hover Card component, use the following command:

```bash
pnpm dlx shadcn@latest add hover-card
```

## Usage

To use the Hover Card component, import it into your project:

```javascript
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
```

Here is an example of how to implement the Hover Card:

```jsx
<HoverCard>
  <HoverCardTrigger>Hover</HoverCardTrigger>
  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>
```

## Additional Resources

- [API Reference](https://www.radix-ui.com/docs/primitives/components/hover-card#api-reference)
- [Form Component](/docs/components/form)
- [Input Component](/docs/components/input)