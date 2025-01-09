Docs

Context Menu

# Context Menu

Displays a menu to the user — such as a set of actions or functions — triggered by a button.

[Docs](https://www.radix-ui.com/docs/primitives/components/context-menu) [API Reference](https://www.radix-ui.com/docs/primitives/components/context-menu#api-reference)

PreviewCode

Style: New York

Open in Copy

Right click here

## [Link to section](\#installation) Installation

CLIManual

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add context-menu

```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Billing</ContextMenuItem>
    <ContextMenuItem>Team</ContextMenuItem>
    <ContextMenuItem>Subscription</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

Copy

[Command](/docs/components/command) [Data Table](/docs/components/data-table)

On This Page

- [Installation](#installation)
- [Usage](#usage)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)