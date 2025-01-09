Docs

Avatar

# Avatar

An image element with a fallback for representing the user.

[Docs](https://www.radix-ui.com/docs/primitives/components/avatar) [API Reference](https://www.radix-ui.com/docs/primitives/components/avatar#api-reference)

PreviewCode

Style: New York

Open in Copy

![@shadcn](https://github.com/shadcn.png)

## [Link to section](\#installation) Installation

CLIManual

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add avatar

```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
```

Copy

[Aspect Ratio](/docs/components/aspect-ratio) [Badge](/docs/components/badge)

On This Page

- [Avatar](#avatar)
  - [Link to section Installation](#link-to-section-installation)
  - [Link to section Usage](#link-to-section-usage)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)