Docs

Button

# Button

Displays a button or a component that looks like a button.

PreviewCode

Style: New York

Open in Copy

Button

## [Link to section](\#installation) Installation

CLIManual

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add button

```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import { Button } from "@/components/ui/button"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Button variant="outline">Button</Button>
```

Copy

## [Link to section](\#link) Link

You can use the `buttonVariants` helper to create a link that looks like a button.

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import { buttonVariants } from "@/components/ui/button"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Link className={buttonVariants({ variant: "outline" })}>Click here</Link>
```

Copy

Alternatively, you can set the `asChild` parameter and nest the link component.

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Button asChild>
  <Link href="/login">Login</Link>
</Button>
```

Copy

## [Link to section](\#examples) Examples

### [Link to section](\#primary) Primary

PreviewCode

Style: New York

Open in Copy

Button

### [Link to section](\#secondary) Secondary

PreviewCode

Style: New York

Open in Copy

Secondary

### [Link to section](\#destructive) Destructive

PreviewCode

Style: New York

Open in Copy

Destructive

### [Link to section](\#outline) Outline

PreviewCode

Style: New York

Open in Copy

Outline

### [Link to section](\#ghost) Ghost

PreviewCode

Style: New York

Open in Copy

Ghost

### [Link to section](\#link-1) Link

PreviewCode

Style: New York

Open in Copy

Link

### [Link to section](\#icon) Icon

PreviewCode

Style: New York

Open in Copy

### [Link to section](\#with-icon) With Icon

PreviewCode

Style: New York

Open in Copy

Login with Email

### [Link to section](\#loading) Loading

PreviewCode

Style: New York

Open in Copy

Please wait

### [Link to section](\#as-child) As Child

PreviewCode

Style: New York

Open in Copy

[Login](/login)

## [Link to section](\#changelog) Changelog

### [Link to section](\#2024-10-16-classes-for-icons) 2024-10-16 Classes for icons

Added `gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0` to the button to automatically style icon inside the button.

Add the following classes to the `cva` call in your `button.tsx` file.

button.tsx

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
const buttonVariants = cva(
  "inline-flex ... gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
)
```

Copy

[Breadcrumb](/docs/components/breadcrumb) [Calendar](/docs/components/calendar)

On This Page

- [Button](#button)
  - [Link to section Installation](#link-to-section-installation)
  - [Link to section Usage](#link-to-section-usage)
  - [Link to section Link](#link-to-section-link)
  - [Link to section Examples](#link-to-section-examples)
    - [Link to section Primary](#link-to-section-primary)
    - [Link to section Secondary](#link-to-section-secondary)
    - [Link to section Destructive](#link-to-section-destructive)
    - [Link to section Outline](#link-to-section-outline)
    - [Link to section Ghost](#link-to-section-ghost)
    - [Link to section Link](#link-to-section-link-1)
    - [Link to section Icon](#link-to-section-icon)
    - [Link to section With Icon](#link-to-section-with-icon)
    - [Link to section Loading](#link-to-section-loading)
    - [Link to section As Child](#link-to-section-as-child)
  - [Link to section Changelog](#link-to-section-changelog)
    - [Link to section 2024-10-16 Classes for icons](#link-to-section-2024-10-16-classes-for-icons)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)