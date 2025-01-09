Docs

Resizable

# Resizable

Accessible resizable panel groups and layouts with keyboard support.

[Docs](https://github.com/bvaughn/react-resizable-panels) [API Reference](https://github.com/bvaughn/react-resizable-panels/tree/main/packages/react-resizable-panels)

PreviewCode

Style: New York

Open in Copy

One

Two

Three

## [Link to section](\#about) About

The `Resizable` component is built on top of [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels) by [bvaughn](https://github.com/bvaughn).

## [Link to section](\#installation) Installation

CLIManual

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add resizable

```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel>One</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Two</ResizablePanel>
</ResizablePanelGroup>
```

Copy

## [Link to section](\#examples) Examples

### [Link to section](\#vertical) Vertical

Use the `direction` prop to set the direction of the resizable panels.

PreviewCode

Style: New York

Open in Copy

Header

Content

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function Example() {
  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel>One</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>Two</ResizablePanel>
    </ResizablePanelGroup>
  )
}
```

Copy

### [Link to section](\#handle) Handle

You can set or hide the handle by using the `withHandle` prop on the `ResizableHandle` component.

PreviewCode

Style: New York

Open in Copy

Sidebar

Content

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function Example() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>One</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>Two</ResizablePanel>
    </ResizablePanelGroup>
  )
}
```

Copy

[Radio Group](/docs/components/radio-group) [Scroll Area](/docs/components/scroll-area)

On This Page

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [Vertical](#vertical)
  - [Handle](#handle)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)