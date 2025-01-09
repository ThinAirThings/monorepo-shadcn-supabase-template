Docs

Aspect Ratio

# Aspect Ratio

Displays content within a desired ratio.

[Docs](https://www.radix-ui.com/docs/primitives/components/aspect-ratio) [API Reference](https://www.radix-ui.com/docs/primitives/components/aspect-ratio#api-reference)

PreviewCode

Style: New York

Open in Copy

![Photo by Drew Beamer](/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1588345921523-c2dcdb7f1dcd%3Fw%3D800%26dpr%3D2%26q%3D80&w=3840&q=75)

## [Link to section](\#installation) Installation

CLIManual

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add aspect-ratio

```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<div className="w-[450px]">
  <AspectRatio ratio={16 / 9}>
    <Image src="..." alt="Image" className="rounded-md object-cover" />
  </AspectRatio>
</div>
```

Copy

[Alert Dialog](/docs/components/alert-dialog) [Avatar](/docs/components/avatar)

On This Page

- [Installation](#installation)
- [Usage](#usage)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)