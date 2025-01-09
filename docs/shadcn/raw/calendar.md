Docs

Calendar

# Calendar

A date field component that allows users to enter and edit date.

[Docs](https://react-day-picker.js.org)

PreviewCode

Style: New York

Open in Copy

January 2025

| Su | Mo | Tu | We | Th | Fr | Sa |
| --- | --- | --- | --- | --- | --- | --- |
| 29 | 30 | 31 | 1 | 2 | 3 | 4 |
| 5 | 6 | 7 | 8 | 9 | 10 | 11 |
| 12 | 13 | 14 | 15 | 16 | 17 | 18 |
| 19 | 20 | 21 | 22 | 23 | 24 | 25 |
| 26 | 27 | 28 | 29 | 30 | 31 | 1 |

## [Link to section](\#about) About

The `Calendar` component is built on top of [React DayPicker](https://react-day-picker.js.org).

## [Link to section](\#installation) Installation

CLIManual

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add calendar

```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import { Calendar } from "@/components/ui/calendar"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
const [date, setDate] = React.useState<Date | undefined>(new Date())

return (
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />
)
```

Copy

See the [React DayPicker](https://react-day-picker.js.org) documentation for more information.

## [Link to section](\#date-picker) Date Picker

You can use the `<Calendar>` component to build a date picker. See the [Date Picker](/docs/components/date-picker) page for more information.

## [Link to section](\#examples) Examples

### [Link to section](\#form) Form

PreviewCode

Style: New York

Copy

Date of birthPick a date

Your date of birth is used to calculate your age.

Submit

## [Link to section](\#changelog) Changelog

### [Link to section](\#11-03-2024-day_outside-color) 11-03-2024 day\_outside color

- Changed the color of the `day_outside` class to the following to improve contrast:



calendar.tsx



```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
"day_outside:
        "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
```

Copy


[Button](/docs/components/button) [Card](/docs/components/card)

On This Page

- [Calendar](#calendar)
  - [Link to section About](#link-to-section-about)
  - [Link to section Installation](#link-to-section-installation)
  - [Link to section Usage](#link-to-section-usage)
  - [Link to section Date Picker](#link-to-section-date-picker)
  - [Link to section Examples](#link-to-section-examples)
    - [Link to section Form](#link-to-section-form)
  - [Link to section Changelog](#link-to-section-changelog)
    - [Link to section 11-03-2024 day\_outside color](#link-to-section-11-03-2024-day_outside-color)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)