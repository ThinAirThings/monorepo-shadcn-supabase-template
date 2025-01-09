Docs

Combobox

# Combobox

Autocomplete input and command palette with a list of suggestions.

PreviewCode

Style: New York

Open in Copy

Select framework...

## [Link to section](\#installation) Installation

The Combobox is built using a composition of the `<Popover />` and the `<Command />` components.

See installation instructions for the [Popover](/docs/components/popover#installation) and the [Command](/docs/components/command#installation) components.

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [\
  {\
    value: "next.js",\
    label: "Next.js",\
  },\
  {\
    value: "sveltekit",\
    label: "SvelteKit",\
  },\
  {\
    value: "nuxt.js",\
    label: "Nuxt.js",\
  },\
  {\
    value: "remix",\
    label: "Remix",\
  },\
  {\
    value: "astro",\
    label: "Astro",\
  },\
]

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
```

Copy

## [Link to section](\#examples) Examples

### [Link to section](\#combobox) Combobox

PreviewCode

Style: New York

Open in Copy

Select framework...

### [Link to section](\#popover) Popover

PreviewCode

Style: New York

Copy

Status

\+ Set status

### [Link to section](\#dropdown-menu) Dropdown menu

PreviewCode

Style: New York

Open in Copy

featureCreate a new project

### [Link to section](\#responsive) Responsive

You can create a responsive combobox by using the `<Popover />` on desktop and the `<Drawer />` components on mobile.

PreviewCode

Style: New York

Copy

\+ Set status

### [Link to section](\#form) Form

PreviewCode

Style: New York

Copy

LanguageSelect language

This is the language that will be used in the dashboard.

Submit

[Collapsible](/docs/components/collapsible) [Command](/docs/components/command)

On This Page

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [Combobox](#combobox)
  - [Popover](#popover)
  - [Dropdown menu](#dropdown-menu)
  - [Responsive](#responsive)
  - [Form](#form)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)