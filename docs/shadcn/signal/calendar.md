# Calendar Component Documentation

## Overview
The `Calendar` component is a date field component that allows users to enter and edit dates. It is built on top of [React DayPicker](https://react-day-picker.js.org).

## Installation
To install the `Calendar` component, use the following command:

```bash
pnpm dlx shadcn@latest add calendar
```

## Usage
To use the `Calendar` component, import it and manage the date state as shown below:

```javascript
import { Calendar } from "@/components/ui/calendar"

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

For more information, refer to the [React DayPicker documentation](https://react-day-picker.js.org).

## Date Picker
The `<Calendar>` component can be used to build a date picker. For more details, see the [Date Picker documentation](/docs/components/date-picker).

## Examples
### Form Example
Use the `Calendar` component in forms to select dates, such as a date of birth field.

## Changelog
### 11-03-2024
- Updated the `day_outside` class color for improved contrast:

```css
"day_outside:
        "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
```

For additional components, see [Button](/docs/components/button) and [Card](/docs/components/card).