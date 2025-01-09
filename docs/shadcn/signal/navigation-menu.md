# Navigation Menu Documentation

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

Example of using the Navigation Menu component:

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

When using the Next.js `<Link />` component, apply the `navigationMenuTriggerStyle()` for correct styling:

```javascript
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
```

Example usage with Next.js `<Link />`:

```jsx
<NavigationMenuItem>
  <Link href="/docs" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Documentation
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>
```

For more information on handling client-side routing, see the [Radix UI documentation](https://www.radix-ui.com/docs/primitives/components/navigation-menu#with-client-side-routing).