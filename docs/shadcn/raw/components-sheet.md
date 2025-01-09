Docs

Sheet

# Sheet

Extends the Dialog component to display content that complements the main content of the screen.

[Docs](https://www.radix-ui.com/docs/primitives/components/dialog) [API Reference](https://www.radix-ui.com/docs/primitives/components/dialog#api-reference)

PreviewCode

Style: New York

Open in Copy

Open

## [Link to section](\#installation) Installation

CLIManual

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add sheet

```

Copy

### [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

Copy

## [Link to section](\#examples) Examples

### [Link to section](\#side) Side

Use the `side` property to `<SheetContent />` to indicate the edge of the screen where the component will appear. The values can be `top`, `right`, `bottom` or `left`.

PreviewCode

Style: New York

Copy

toprightbottomleft

### [Link to section](\#size) Size

You can adjust the size of the sheet using CSS classes:

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent className="w-[400px] sm:w-[540px]">
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

Copy

[Separator](/docs/components/separator) [Sidebar](/docs/components/sidebar)

On This Page

- [Installation](#installation)
  - [Usage](#usage)
- [Examples](#examples)
  - [Side](#side)
  - [Size](#size)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)