Docs

Date Picker

# Date Picker

A date picker component with range and presets.

PreviewCode

Style: New York

Open in Copy

Pick a date

## [Link to section](\#installation) Installation

The Date Picker is built using a composition of the `<Popover />` and the `<Calendar />` components.

See installation instructions for the [Popover](/docs/components/popover#installation) and the [Calendar](/docs/components/calendar#installation) components.

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
```

Copy

See the [React DayPicker](https://react-day-picker.js.org) documentation for more information.

## [Link to section](\#examples) Examples

### [Link to section](\#date-picker) Date Picker

PreviewCode

Style: New York

Open in Copy

Pick a date

### [Link to section](\#date-range-picker) Date Range Picker

PreviewCode

Style: New York

Open in Copy

Jan 20, 2022 - Feb 09, 2022

### [Link to section](\#with-presets) With Presets

PreviewCode

Style: New York

Open in Copy

Pick a date

### [Link to section](\#form) Form

PreviewCode

Style: New York

Copy

Date of birthPick a date

Your date of birth is used to calculate your age.

Submit

[Data Table](/docs/components/data-table) [Dialog](/docs/components/dialog)

On This Page

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [Date Picker](#date-picker)
  - [Date Range Picker](#date-range-picker)
  - [With Presets](#with-presets)
  - [Form](#form)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)