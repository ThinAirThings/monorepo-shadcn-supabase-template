Docs

Card

# Card

Displays a card with header, content, and footer.

PreviewCode

Style: New York

Open in Copy

Create project

Deploy your new project in one-click.

Name

FrameworkSelectNext.jsSvelteKitAstroNuxt.js

CancelDeploy

## [Link to section](\#installation) Installation

CLIManual

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add card

```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
```

Copy

## [Link to section](\#examples) Examples

PreviewCode

Style: New York

Open in Copy

Notifications

You have 3 unread messages.

Push Notifications

Send notifications to device.

Your call has been confirmed.

1 hour ago

You have a new message!

1 hour ago

Your subscription is expiring soon!

2 hours ago

Mark all as read

## [Link to section](\#changelog) Changelog

### [Link to section](\#11-03-2024-a11y-for-title-and-description) 11-03-2024 a11y for title and description

- Changed the `CardTitle` and `CardDescription` components to use `div` instead of `h3` and `p` to improve accessibility.

card.tsx

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"
```

Copy

[Calendar](/docs/components/calendar) [Carousel](/docs/components/carousel)

On This Page

- [Card](#card)
  - [Link to section Installation](#link-to-section-installation)
  - [Link to section Usage](#link-to-section-usage)
  - [Link to section Examples](#link-to-section-examples)
  - [Link to section Changelog](#link-to-section-changelog)
    - [Link to section 11-03-2024 a11y for title and description](#link-to-section-11-03-2024-a11y-for-title-and-description)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)