Docs

Badge

# Badge

Displays a badge or a component that looks like a badge.

PreviewCode

Style: New York

Open in Copy

Badge

## [Link to section](\#installation) Installation

CLIManual

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add badge

```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import { Badge } from "@/components/ui/badge"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Badge variant="outline">Badge</Badge>
```

Copy

### [Link to section](\#link) Link

You can use the `badgeVariants` helper to create a link that looks like a badge.

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import { badgeVariants } from "@/components/ui/badge"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Link className={badgeVariants({ variant: "outline" })}>Badge</Link>
```

Copy

## [Link to section](\#examples) Examples

### [Link to section](\#default) Default

PreviewCode

Style: New York

Open in Copy

Badge

* * *

### [Link to section](\#secondary) Secondary

PreviewCode

Style: New York

Open in Copy

Secondary

* * *

### [Link to section](\#outline) Outline

PreviewCode

Style: New York

Open in Copy

Outline

* * *

### [Link to section](\#destructive) Destructive

PreviewCode

Style: New York

Open in Copy

Destructive

[Avatar](/docs/components/avatar) [Breadcrumb](/docs/components/breadcrumb)

On This Page

- [Installation](#installation)
- [Usage](#usage)
  - [Link](#link)
- [Examples](#examples)
  - [Default](#default)
  - [Secondary](#secondary)
  - [Outline](#outline)
  - [Destructive](#destructive)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)