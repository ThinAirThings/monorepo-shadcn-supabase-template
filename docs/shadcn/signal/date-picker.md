# Date Picker Documentation

## Overview

The Date Picker is a component that allows users to select dates, with support for date ranges and preset options. It is built using a combination of the `<Popover />` and `<Calendar />` components.

## Installation

To use the Date Picker, ensure you have installed the necessary components:
- [Popover Component Installation](/docs/components/popover#installation)
- [Calendar Component Installation](/docs/components/calendar#installation)

## Usage

Below is an example of how to implement the Date Picker in a React application:

```javascript
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

For more detailed information, refer to the [React DayPicker documentation](https://react-day-picker.js.org).

## Examples

### Date Picker

A simple date picker allowing single date selection.

### Date Range Picker

Allows selection of a range of dates.

### With Presets

Provides preset date options for quick selection.

### Form Integration

Example of integrating the Date Picker into a form, such as selecting a date of birth.

---

For further details on related components, see:
- [Data Table](/docs/components/data-table)
- [Dialog](/docs/components/dialog)