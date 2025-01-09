Docs

Tabs

# Tabs

A set of layered sections of content—known as tab panels—that are displayed one at a time.

[Docs](https://www.radix-ui.com/docs/primitives/components/tabs) [API Reference](https://www.radix-ui.com/docs/primitives/components/tabs#api-reference)

PreviewCode

Style: New York

Open in Copy

AccountPassword

Account

Make changes to your account here. Click save when you're done.

Name

Username

Save changes

## [Link to section](\#installation) Installation

CLIManual

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add tabs

```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
```

Copy

[Table](/docs/components/table) [Textarea](/docs/components/textarea)

On This Page

- [Tabs](#tabs)
  - [Link to section Installation](#link-to-section-installation)
  - [Link to section Usage](#link-to-section-usage)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)