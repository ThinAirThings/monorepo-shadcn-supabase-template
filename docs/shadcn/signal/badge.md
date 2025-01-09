# Badge Component Documentation

## Installation

To install the Badge component, use the following command:

```bash
pnpm dlx shadcn@latest add badge
```

## Usage

To use the Badge component, import it into your project:

```javascript
import { Badge } from "@/components/ui/badge"
```

You can then use the Badge component in your JSX:

```jsx
<Badge variant="outline">Badge</Badge>
```

### Link

To create a link styled as a badge, use the `badgeVariants` helper:

```javascript
import { badgeVariants } from "@/components/ui/badge"
```

```jsx
<Link className={badgeVariants({ variant: "outline" })}>Badge</Link>
```

## Examples

### Default

Example of a default badge.

### Secondary

Example of a secondary badge.

### Outline

Example of an outline badge.

### Destructive

Example of a destructive badge.