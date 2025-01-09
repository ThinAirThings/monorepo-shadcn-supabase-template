Docs

Radio Group

# Radio Group

A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.

[Docs](https://www.radix-ui.com/docs/primitives/components/radio-group) [API Reference](https://www.radix-ui.com/docs/primitives/components/radio-group#api-reference)

PreviewCode

Style: New York

Open in Copy

Default

Comfortable

Compact

## [Link to section](\#installation) Installation

CLIManual

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add radio-group

```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>
```

Copy

## [Link to section](\#examples) Examples

### [Link to section](\#form) Form

PreviewCode

Style: New York

Copy

Notify me about...

All new messages

Direct messages and mentions

Nothing

Submit

[Progress](/docs/components/progress) [Resizable](/docs/components/resizable)

On This Page

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [Form](#form)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)