Docs

Toast

# Toast

A succinct message that is displayed temporarily.

[Docs](https://www.radix-ui.com/docs/primitives/components/toast) [API Reference](https://www.radix-ui.com/docs/primitives/components/toast#api-reference)

PreviewCode

Style: New York

Copy

Add to calendar

## [Link to section](\#installation) Installation

CLIManual

### Run the following command:

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add toast

```

Copy

### Add the Toaster component

app/layout.tsx

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import { Toaster } from "@/components/ui/toaster"

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

The `useToast` hook returns a `toast` function that you can use to display a toast.

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import { useToast } from "@/hooks/use-toast"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
export const ToastDemo = () => {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
```

Copy

To display multiple toasts at the same time, you can update the `TOAST_LIMIT` in `use-toast.tsx`.

## [Link to section](\#examples) Examples

### [Link to section](\#simple) Simple

PreviewCode

Style: New York

Copy

Show Toast

### [Link to section](\#with-title) With title

PreviewCode

Style: New York

Copy

Show Toast

### [Link to section](\#with-action) With Action

PreviewCode

Style: New York

Copy

Show Toast

### [Link to section](\#destructive) Destructive

Use `toast({ variant: "destructive" })` to display a destructive toast.

PreviewCode

Style: New York

Copy

Show Toast

[Textarea](/docs/components/textarea) [Toggle](/docs/components/toggle)

On This Page

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [Simple](#simple)
  - [With title](#with-title)
  - [With Action](#with-action)
  - [Destructive](#destructive)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)