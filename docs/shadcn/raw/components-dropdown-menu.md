Docs

Dropdown Menu

# Dropdown Menu

Displays a menu to the user — such as a set of actions or functions — triggered by a button.

[Docs](https://www.radix-ui.com/docs/primitives/components/dropdown-menu) [API Reference](https://www.radix-ui.com/docs/primitives/components/dropdown-menu#api-reference)

PreviewCode

Style: New York

Open in Copy

Open

## [Link to section](\#installation) Installation

CLIManual

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add dropdown-menu

```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

Copy

## [Link to section](\#examples) Examples

### [Link to section](\#checkboxes) Checkboxes

PreviewCode

Style: New York

Open in Copy

Open

### [Link to section](\#radio-group) Radio Group

PreviewCode

Style: New York

Open in Copy

Open

## [Link to section](\#changelog) Changelog

### [Link to section](\#2024-10-16-classes-for-icons) 2024-10-16 Classes for icons

Added `gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0` to the `DropdownMenuItem` to automatically style icon inside the dropdown menu item.

Add the following classes to the `DropdownMenuItem` in your `dropdown-menu.tsx` file.

dropdown-menu.tsx

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative ... gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
```

Copy

### [Link to section](\#2024-10-25-classes-for-dropdownmenusubtrigger-) 2024-10-25 Classes for `<DropdownMenuSubTrigger />`

Added `gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0` to the `<DropdownMenuSubTrigger />` to automatically style icon inside.

Add the following classes to the `cva` call in your `dropdown-menu.tsx` file.

dropdown-menu.tsx

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<DropdownMenuPrimitive.SubTrigger
  ref={ref}
  className={cn(
    "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    inset && "pl-8",
    className
  )}
  {...props}
>
  {/* ... */}
</DropdownMenuPrimitive.SubTrigger>
```

Copy

[Drawer](/docs/components/drawer) [Form](/docs/components/form)

On This Page

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [Checkboxes](#checkboxes)
  - [Radio Group](#radio-group)
- [Changelog](#changelog)
  - [2024-10-16 Classes for icons](#2024-10-16-classes-for-icons)
  - [2024-10-25 Classes for <DropdownMenuSubTrigger />](#2024-10-25-classes-for-dropdownmenusubtrigger-)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)