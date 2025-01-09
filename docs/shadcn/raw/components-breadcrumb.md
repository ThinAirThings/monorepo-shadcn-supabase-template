Docs

Breadcrumb

# Breadcrumb

Displays the path to the current resource using a hierarchy of links.

PreviewCode

Style: New York

Open in Copy

## [Link to section](\#installation) Installation

CLIManual

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add breadcrumb

```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

Copy

## [Link to section](\#examples) Examples

### [Link to section](\#custom-separator) Custom separator

Use a custom component as `children` for `<BreadcrumbSeparator />` to create a custom separator.

PreviewCode

Style: New York

Open in Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import { Slash } from "lucide-react"

...

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <Slash />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

Copy

* * *

### [Link to section](\#dropdown) Dropdown

You can compose `<BreadcrumbItem />` with a `<DropdownMenu />` to create a dropdown in the breadcrumb.

PreviewCode

Style: New York

Open in Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

...

<BreadcrumbItem>
  <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center gap-1">
      Components
      <ChevronDownIcon />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuItem>Documentation</DropdownMenuItem>
      <DropdownMenuItem>Themes</DropdownMenuItem>
      <DropdownMenuItem>GitHub</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</BreadcrumbItem>
```

Copy

* * *

### [Link to section](\#collapsed) Collapsed

We provide a `<BreadcrumbEllipsis />` component to show a collapsed state when the breadcrumb is too long.

PreviewCode

Style: New York

Open in Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import { BreadcrumbEllipsis } from "@/components/ui/breadcrumb"

...

<Breadcrumb>
  <BreadcrumbList>
    {/* ... */}
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    {/* ... */}
  </BreadcrumbList>
</Breadcrumb>
```

Copy

* * *

### [Link to section](\#link-component) Link component

To use a custom link component from your routing library, you can use the `asChild` prop on `<BreadcrumbLink />`.

PreviewCode

Style: New York

Open in Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import { Link } from "next/link"

...

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link href="/">Home</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    {/* ... */}
  </BreadcrumbList>
</Breadcrumb>
```

Copy

* * *

### [Link to section](\#responsive) Responsive

Here's an example of a responsive breadcrumb that composes `<BreadcrumbItem />` with `<BreadcrumbEllipsis />`, `<DropdownMenu />`, and `<Drawer />`.

It displays a dropdown on desktop and a drawer on mobile.

PreviewCode

Style: New York

Open in Copy

[Badge](/docs/components/badge) [Button](/docs/components/button)

On This Page

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [Custom separator](#custom-separator)
  - [Dropdown](#dropdown)
  - [Collapsed](#collapsed)
  - [Link component](#link-component)
  - [Responsive](#responsive)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)