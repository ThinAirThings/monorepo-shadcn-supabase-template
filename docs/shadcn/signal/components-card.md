# Card Component Documentation

## Overview
The Card component displays a card with a header, content, and footer.

## Installation
To install the Card component, use the following command:

```bash
pnpm dlx shadcn@latest add card
```

## Usage
Import the Card components as follows:

```javascript
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
```

Example usage of the Card component:

```jsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
```

## Changelog
### 11-03-2024: Accessibility Improvements
- Changed the `CardTitle` and `CardDescription` components to use `div` instead of `h3` and `p` to improve accessibility.

```typescript
const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"
```

## Additional Resources
- [Calendar Component](/docs/components/calendar)
- [Carousel Component](/docs/components/carousel)