Docs

Select

# Select

Displays a list of options for the user to pick from—triggered by a button.

[Docs](https://www.radix-ui.com/docs/primitives/components/select) [API Reference](https://www.radix-ui.com/docs/primitives/components/select#api-reference)

PreviewCode

Style: New York

Open in Copy

Select a fruit

## [Link to section](\#installation) Installation

CLIManual

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add select

```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
```

Copy

## [Link to section](\#examples) Examples

### [Link to section](\#scrollable) Scrollable

PreviewCode

Style: New York

Open in Copy

Select a timezone

### [Link to section](\#form) Form

PreviewCode

Style: New York

Copy

EmailSelect a verified email to displaym@example.comm@google.comm@support.com

You can manage email addresses in your [email settings](/examples/forms).

Submit

[Scroll Area](/docs/components/scroll-area) [Separator](/docs/components/separator)

On This Page

- [Select](#select)
  - [Link to section Installation](#link-to-section-installation)
  - [Link to section Usage](#link-to-section-usage)
  - [Link to section Examples](#link-to-section-examples)
    - [Link to section Scrollable](#link-to-section-scrollable)
    - [Link to section Form](#link-to-section-form)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)