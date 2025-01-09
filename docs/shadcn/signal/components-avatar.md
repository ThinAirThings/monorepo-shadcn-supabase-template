# Avatar Component Documentation

## Overview
The Avatar component is an image element with a fallback for representing the user.

## Installation
To install the Avatar component, use the following command:

```bash
pnpm dlx shadcn@latest add avatar
```

## Usage
To use the Avatar component, import it into your project:

```javascript
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
```

Here is an example of how to implement the Avatar component:

```jsx
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
```

## Additional Resources
- [Aspect Ratio](/docs/components/aspect-ratio)
- [Badge](/docs/components/badge)