# Button Component Documentation

## Overview
The Button component displays a button or a component that looks like a button.

## Installation
To install the Button component, use the following command:

```bash
pnpm dlx shadcn@latest add button
```

## Usage
To use the Button component, import it into your project:

```javascript
import { Button } from "@/components/ui/button"
```

Example usage:

```jsx
<Button variant="outline">Button</Button>
```

## Link
You can use the `buttonVariants` helper to create a link that looks like a button:

```javascript
import { buttonVariants } from "@/components/ui/button"
```

Example:

```jsx
<Link className={buttonVariants({ variant: "outline" })}>Click here</Link>
```

Alternatively, set the `asChild` parameter and nest the link component:

```jsx
<Button asChild>
  <Link href="/login">Login</Link>
</Button>
```

## Examples

### Primary
```jsx
<Button variant="primary">Primary</Button>
```

### Secondary
```jsx
<Button variant="secondary">Secondary</Button>
```

### Destructive
```jsx
<Button variant="destructive">Destructive</Button>
```

### Outline
```jsx
<Button variant="outline">Outline</Button>
```

### Ghost
```jsx
<Button variant="ghost">Ghost</Button>
```

### Link
```jsx
<Link className={buttonVariants({ variant: "link" })}>Link</Link>
```

### Icon
```jsx
<Button variant="icon">Icon</Button>
```

### With Icon
```jsx
<Button variant="with-icon">Login with Email</Button>
```

### Loading
```jsx
<Button variant="loading">Please wait</Button>
```

### As Child
```jsx
<Button asChild>
  <Link href="/login">Login</Link>
</Button>
```

## Changelog

### 2024-10-16: Classes for Icons
Added `gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0` to the button to automatically style icons inside the button. Add the following classes to the `cva` call in your `button.tsx` file:

```javascript
const buttonVariants = cva(
  "inline-flex ... gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
)
```
