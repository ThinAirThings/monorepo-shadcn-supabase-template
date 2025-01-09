Docs

Alert

# Alert

Displays a callout for user attention.

PreviewCode

Style: New York

Open in Copy

##### Heads up!

You can add components to your app using the cli.

## [Link to section](\#installation) Installation

CLIManual

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add alert

```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>
```

Copy

## [Link to section](\#examples) Examples

### [Link to section](\#default) Default

PreviewCode

Style: New York

Open in Copy

##### Heads up!

You can add components to your app using the cli.

### [Link to section](\#destructive) Destructive

PreviewCode

Style: New York

Open in Copy

##### Error

Your session has expired. Please log in again.

[Accordion](/docs/components/accordion) [Alert Dialog](/docs/components/alert-dialog)

On This Page

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [Default](#default)
  - [Destructive](#destructive)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)