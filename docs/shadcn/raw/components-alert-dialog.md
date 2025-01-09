Docs

Alert Dialog

# Alert Dialog

A modal dialog that interrupts the user with important content and expects a response.

[Docs](https://www.radix-ui.com/docs/primitives/components/alert-dialog) [API Reference](https://www.radix-ui.com/docs/primitives/components/alert-dialog#api-reference)

PreviewCode

Style: New York

Open in Copy

Show Dialog

## [Link to section](\#installation) Installation

CLIManual

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add alert-dialog

```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

Copy

[Alert](/docs/components/alert) [Aspect Ratio](/docs/components/aspect-ratio)

On This Page

- [Installation](#installation)
- [Usage](#usage)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)