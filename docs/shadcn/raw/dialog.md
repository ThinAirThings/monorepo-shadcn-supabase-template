Docs

Dialog

# Dialog

A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.

[Docs](https://www.radix-ui.com/docs/primitives/components/dialog) [API Reference](https://www.radix-ui.com/docs/primitives/components/dialog#api-reference)

PreviewCode

Style: New York

Open in Copy

Edit Profile

## [Link to section](\#installation) Installation

CLIManual

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add dialog

```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

Copy

## [Link to section](\#examples) Examples

### [Link to section](\#custom-close-button) Custom close button

PreviewCode

Style: New York

Copy

Share

## [Link to section](\#notes) Notes

To activate the `Dialog` component from within a `Context Menu` or `Dropdown Menu`, you must encase the `Context Menu` or
`Dropdown Menu` component in the `Dialog` component. For more information, refer to the linked issue [here](https://github.com/radix-ui/primitives/issues/1836).

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Dialog>
  <ContextMenu>
    <ContextMenuTrigger>Right click</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Open</ContextMenuItem>
      <ContextMenuItem>Download</ContextMenuItem>
      <DialogTrigger asChild>
        <ContextMenuItem>
          <span>Delete</span>
        </ContextMenuItem>
      </DialogTrigger>
    </ContextMenuContent>
  </ContextMenu>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. Are you sure you want to permanently
        delete this file from our servers?
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button type="submit">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

Copy

[Date Picker](/docs/components/date-picker) [Drawer](/docs/components/drawer)

On This Page

- [Dialog](#dialog)
  - [Link to section Installation](#link-to-section-installation)
  - [Link to section Usage](#link-to-section-usage)
  - [Link to section Examples](#link-to-section-examples)
    - [Link to section Custom close button](#link-to-section-custom-close-button)
  - [Link to section Notes](#link-to-section-notes)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)