Docs

Sonner

# Sonner

An opinionated toast component for React.

[Docs](https://sonner.emilkowal.ski)

PreviewCode

Style: New York

Copy

Show Toast

## [Link to section](\#about) About

Sonner is built and maintained by [emilkowalski\_](https://twitter.com/emilkowalski_).

## [Link to section](\#installation) Installation

CLIManual

### Run the following command:

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add sonner

```

Copy

### Add the Toaster component

app/layout.tsx

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import { toast } from "sonner"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
toast("Event has been created.")
```

Copy

[Slider](/docs/components/slider) [Switch](/docs/components/switch)

On This Page

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)