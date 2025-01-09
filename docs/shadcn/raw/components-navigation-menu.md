Docs

Navigation Menu

# Navigation Menu

A collection of links for navigating websites.

[Docs](https://www.radix-ui.com/docs/primitives/components/navigation-menu) [API Reference](https://www.radix-ui.com/docs/primitives/components/navigation-menu#api-reference)

PreviewCode

Style: New York

Copy

## [Link to section](\#installation) Installation

CLIManual

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add navigation-menu

```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
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

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
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

Copy

## [Link to section](\#examples) Examples

### [Link to section](\#link-component) Link Component

When using the Next.js `<Link />` component, you can use `navigationMenuTriggerStyle()` to apply the correct styles to the trigger.

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<NavigationMenuItem>
  <Link href="/docs" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Documentation
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>
```

Copy

See also the [Radix UI documentation](https://www.radix-ui.com/docs/primitives/components/navigation-menu#with-client-side-routing) for handling client side routing.

[Menubar](/docs/components/menubar) [Pagination](/docs/components/pagination)

On This Page

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [Link Component](#link-component)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)