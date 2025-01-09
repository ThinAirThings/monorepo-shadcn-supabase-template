Docs

Drawer

# Drawer

A drawer component for React.

[Docs](https://github.com/emilkowalski/vaul)

PreviewCode

Style: New York

Open in Copy

Open Drawer

## [Link to section](\#about) About

Drawer is built on top of [Vaul](https://github.com/emilkowalski/vaul) by [emilkowalski\_](https://twitter.com/emilkowalski_).

## [Link to section](\#installation) Installation

CLIManual

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add drawer

```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

Copy

## [Link to section](\#examples) Examples

### [Link to section](\#responsive-dialog) Responsive Dialog

You can combine the `Dialog` and `Drawer` components to create a responsive dialog. This renders a `Dialog` component on desktop and a `Drawer` on mobile.

PreviewCode

Style: New York

Copy

Edit Profile

[Dialog](/docs/components/dialog) [Dropdown Menu](/docs/components/dropdown-menu)

On This Page

- [Drawer](#drawer)
  - [Link to section About](#link-to-section-about)
  - [Link to section Installation](#link-to-section-installation)
  - [Link to section Usage](#link-to-section-usage)
  - [Link to section Examples](#link-to-section-examples)
    - [Link to section Responsive Dialog](#link-to-section-responsive-dialog)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)