# Navigation Menu Documentation

## Overview
The Navigation Menu is a collection of links for navigating websites. This documentation provides installation instructions, usage examples, and additional resources for implementing a navigation menu using Radix UI components.

## Installation
To install the Navigation Menu component, use the following command:

```bash
pnpm dlx shadcn@latest add navigation-menu
```

## Usage
Import the necessary components from the Navigation Menu module:

```javascript
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
```

### Example Usage
Here is an example of how to use the Navigation Menu components:

```jsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

## Examples

### Link Component
When using the Next.js `<Link />` component, apply the `navigationMenuTriggerStyle()` for styling:

```javascript
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
```

```jsx
<NavigationMenuItem>
  <Link href="/docs" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Documentation
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>
```

## Additional Resources
- For handling client-side routing, see the [Radix UI documentation](https://www.radix-ui.com/docs/primitives/components/navigation-menu#with-client-side-routing).
- Related components: [Menubar](/docs/components/menubar), [Pagination](/docs/components/pagination).