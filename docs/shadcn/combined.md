

------- START OF alert-dialog.md -------

# Alert Dialog

A modal dialog that interrupts the user with important content and expects a response.

## Installation

To install the Alert Dialog component, use the following command:

```bash
pnpm dlx shadcn@latest add alert-dialog
```

## Usage

Import the necessary components from the Alert Dialog module:

```javascript
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
```

Here is an example of how to use the Alert Dialog component:

```jsx
<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

For more information, refer to the [API Reference](https://www.radix-ui.com/docs/primitives/components/alert-dialog#api-reference).

------- END OF alert-dialog.md -------





------- START OF alert.md -------

# Alert Component Documentation

## Overview
The Alert component is used to display a callout for user attention.

## Installation
To add the Alert component to your application, use the following CLI command:

```bash
pnpm dlx shadcn@latest add alert
```

## Usage
Import the Alert components into your application:

```javascript
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
```

Use the Alert component in your JSX:

```jsx
<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>
```

## Examples

### Default Alert
The default Alert component can be used to notify users of general information.

### Destructive Alert
The Destructive Alert is used to inform users of critical issues, such as session expiration.

```jsx
<Alert>
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>
```

## Additional Resources
- [Accordion Component](/docs/components/accordion)
- [Alert Dialog Component](/docs/components/alert-dialog)

------- END OF alert.md -------





------- START OF aspect-ratio.md -------

# Aspect Ratio

Displays content within a desired ratio.

## Installation

To install the Aspect Ratio component, use the following command:

```bash
pnpm dlx shadcn@latest add aspect-ratio
```

## Usage

To use the Aspect Ratio component, import it and use it within your React component as shown below:

```javascript
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

<div className="w-[450px]">
  <AspectRatio ratio={16 / 9}>
    <Image src="..." alt="Image" className="rounded-md object-cover" />
  </AspectRatio>
</div>
```

For more information, refer to the [API Reference](https://www.radix-ui.com/docs/primitives/components/aspect-ratio#api-reference).

------- END OF aspect-ratio.md -------





------- START OF avatar.md -------

# Avatar Component Documentation

## Overview
The Avatar component is an image element with a fallback for representing the user.

## Installation
To install the Avatar component, use the following command:

```bash
pnpm dlx shadcn@latest add avatar
```

## Usage
To use the Avatar component, import it into your project:

```javascript
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
```

Here is an example of how to implement the Avatar component:

```jsx
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
```

## Additional Resources
- [Aspect Ratio Component](/docs/components/aspect-ratio)
- [Badge Component](/docs/components/badge)

## Deployment
Bring your app built with shadcn to life on Vercel. Vercel provides tools and infrastructure to deploy apps and features at scale.

[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)

------- END OF avatar.md -------





------- START OF badge.md -------

# Badge Component Documentation

## Installation

To install the Badge component, use the following command:

```bash
pnpm dlx shadcn@latest add badge
```

## Usage

To use the Badge component, import it into your project:

```javascript
import { Badge } from "@/components/ui/badge"
```

You can then use the Badge component in your JSX:

```jsx
<Badge variant="outline">Badge</Badge>
```

### Link

To create a link styled as a badge, use the `badgeVariants` helper:

```javascript
import { badgeVariants } from "@/components/ui/badge"
```

```jsx
<Link className={badgeVariants({ variant: "outline" })}>Badge</Link>
```

## Examples

### Default

Example of a default badge.

### Secondary

Example of a secondary badge.

### Outline

Example of an outline badge.

### Destructive

Example of a destructive badge.

------- END OF badge.md -------





------- START OF breadcrumb.md -------

# Breadcrumb Documentation

## Overview

The Breadcrumb component displays the path to the current resource using a hierarchy of links.

## Installation

To install the Breadcrumb component, use the following command:

```bash
pnpm dlx shadcn@latest add breadcrumb
```

## Usage

Import the necessary components from the Breadcrumb module:

```javascript
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
```

Example usage:

```jsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## Examples

### Custom Separator

Use a custom component as `children` for `<BreadcrumbSeparator />` to create a custom separator:

```javascript
import { Slash } from "lucide-react"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <Slash />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Dropdown

Compose `<BreadcrumbItem />` with a `<DropdownMenu />` to create a dropdown in the breadcrumb:

```javascript
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

<BreadcrumbItem>
  <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center gap-1">
      Components
      <ChevronDownIcon />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuItem>Documentation</DropdownMenuItem>
      <DropdownMenuItem>Themes</DropdownMenuItem>
      <DropdownMenuItem>GitHub</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</BreadcrumbItem>
```

### Collapsed

Use `<BreadcrumbEllipsis />` to show a collapsed state when the breadcrumb is too long:

```javascript
import { BreadcrumbEllipsis } from "@/components/ui/breadcrumb"

<Breadcrumb>
  <BreadcrumbList>
    {/* ... */}
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    {/* ... */}
  </BreadcrumbList>
</Breadcrumb>
```

### Link Component

To use a custom link component from your routing library, use the `asChild` prop on `<BreadcrumbLink />`:

```javascript
import { Link } from "next/link"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link href="/">Home</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    {/* ... */}
  </BreadcrumbList>
</Breadcrumb>
```

### Responsive

Create a responsive breadcrumb that uses `<BreadcrumbItem />` with `<BreadcrumbEllipsis />`, `<DropdownMenu />`, and `<Drawer />` to display a dropdown on desktop and a drawer on mobile.

------- END OF breadcrumb.md -------





------- START OF button.md -------

# Button Component Documentation

## Overview
The Button component displays a button or a component that looks like a button.

## Installation
To install the Button component, use the following command:

```bash
pnpm dlx shadcn@latest add button
```

## Usage
To use the Button component, import it into your project:

```javascript
import { Button } from "@/components/ui/button"
```

Example usage:

```jsx
<Button variant="outline">Button</Button>
```

## Link
You can use the `buttonVariants` helper to create a link that looks like a button:

```javascript
import { buttonVariants } from "@/components/ui/button"
```

Example:

```jsx
<Link className={buttonVariants({ variant: "outline" })}>Click here</Link>
```

Alternatively, set the `asChild` parameter and nest the link component:

```jsx
<Button asChild>
  <Link href="/login">Login</Link>
</Button>
```

## Examples

### Primary
```jsx
<Button variant="primary">Primary</Button>
```

### Secondary
```jsx
<Button variant="secondary">Secondary</Button>
```

### Destructive
```jsx
<Button variant="destructive">Destructive</Button>
```

### Outline
```jsx
<Button variant="outline">Outline</Button>
```

### Ghost
```jsx
<Button variant="ghost">Ghost</Button>
```

### Link
```jsx
<Link className={buttonVariants({ variant: "link" })}>Link</Link>
```

### Icon
```jsx
<Button variant="icon">Icon</Button>
```

### With Icon
```jsx
<Button variant="with-icon">Login with Email</Button>
```

### Loading
```jsx
<Button variant="loading">Please wait</Button>
```

### As Child
```jsx
<Button asChild>
  <Link href="/login">Login</Link>
</Button>
```

## Changelog

### 2024-10-16: Classes for Icons
Added `gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0` to the button to automatically style icons inside the button. Add the following classes to the `cva` call in your `button.tsx` file:

```javascript
const buttonVariants = cva(
  "inline-flex ... gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
)
```


------- END OF button.md -------





------- START OF calendar.md -------

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

------- END OF calendar.md -------





------- START OF card.md -------

# Card Component Documentation

## Overview
The Card component displays a card with a header, content, and footer.

## Installation
To install the Card component, use the following command:

```bash
pnpm dlx shadcn@latest add card
```

## Usage
Import the Card components as follows:

```javascript
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
```

Example usage of the Card component:

```jsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
```

## Changelog
### 11-03-2024: Accessibility Improvements
- Changed the `CardTitle` and `CardDescription` components to use `div` instead of `h3` and `p` to improve accessibility.

```typescript
const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"
```

## Related Components
- [Calendar](/docs/components/calendar)
- [Carousel](/docs/components/carousel)

------- END OF card.md -------





------- START OF carousel.md -------

# Carousel Documentation

## Overview
The carousel component is built using the [Embla Carousel](https://www.embla-carousel.com/) library, providing motion and swipe capabilities.

## Installation
To install the carousel component, use the following command:
```bash
pnpm dlx shadcn@latest add carousel
```

## Usage
Import the necessary components from the carousel module:
```javascript
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
```

Example usage:
```jsx
<Carousel>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

## Examples

### Sizes
To set the size of the items, use the `basis` utility class on the `<CarouselItem />`.
Example:
```jsx
<Carousel>
  <CarouselContent>
    <CarouselItem className="basis-1/3">...</CarouselItem>
    <CarouselItem className="basis-1/3">...</CarouselItem>
    <CarouselItem className="basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>
```
Responsive example:
```jsx
<Carousel>
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>
```

### Spacing
To set the spacing between items, use `pl-[VALUE]` on `<CarouselItem />` and `-ml-[VALUE]` on `<CarouselContent />`.
Example:
```jsx
<Carousel>
  <CarouselContent className="-ml-4">
    <CarouselItem className="pl-4">...</CarouselItem>
    <CarouselItem className="pl-4">...</CarouselItem>
    <CarouselItem className="pl-4">...</CarouselItem>
  </CarouselContent>
</Carousel>
```
Responsive example:
```jsx
<Carousel>
  <CarouselContent className="-ml-2 md:-ml-4">
    <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
    <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
    <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
  </CarouselContent>
</Carousel>
```

### Orientation
Set the orientation of the carousel using the `orientation` prop.
```jsx
<Carousel orientation="vertical | horizontal">
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
</Carousel>
```

## Options
Pass options to the carousel using the `opts` prop. For more details, refer to the [Embla Carousel options documentation](https://www.embla-carousel.com/api/options/).
```jsx
<Carousel
  opts={{
    align: "start",
    loop: true,
  }}
>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
</Carousel>
```

## API
Use state and the `setApi` prop to get an instance of the carousel API.
```jsx
import { type CarouselApi } from "@/components/ui/carousel"

export function Example() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
```

## Events
Listen to events using the API instance from `setApi`. For more information, see the [Embla Carousel events documentation](https://www.embla-carousel.com/api/events/).
```jsx
import { type CarouselApi } from "@/components/ui/carousel"

export function Example() {
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      // Do something on select.
    })
  }, [api])

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
```

## Plugins
Use the `plugins` prop to add plugins to the carousel. For more information, see the [Embla Carousel plugins documentation](https://www.embla-carousel.com/api/plugins/).
```jsx
import Autoplay from "embla-carousel-autoplay"

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      // ...
    </Carousel>
  )
}
```

------- END OF carousel.md -------





------- START OF chart.md -------

# Chart Documentation

## Overview

Beautiful charts built using Recharts. These components are designed to be easily integrated into your applications, providing a visually appealing and customizable charting solution.

## Compatibility

- **React 19**
- **Next.js 15**

For specific notes on compatibility, refer to the [React 19 documentation](/docs/react-19#recharts).

## Component

Charts are built using Recharts components, allowing for flexibility and customization. You can integrate custom components like `ChartTooltip` as needed.

### Example Code

```javascript
import { Bar, BarChart } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/charts";

export function MyChart() {
  return (
    <ChartContainer>
      <BarChart data={data}>
        <Bar dataKey="value" />
        <ChartTooltip content={<ChartTooltipContent />} />
      </BarChart>
    </ChartContainer>
  );
}
```

## Installation

To install `chart.tsx`, run the following command:

```bash
pnpm dlx shadcn@latest add chart
```

### CSS Configuration

Add the following colors to your CSS file:

```css
@layer base {
  :root {
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
  }

  .dark {
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}
```

## Your First Chart

### Data Definition

Define your data for the chart:

```javascript
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
```

### Chart Configuration

Configure your chart settings:

```javascript
import { type ChartConfig } from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;
```

### Building the Chart

Use Recharts components to build your chart:

```javascript
"use client";

import { Bar, BarChart } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

export function Component() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
```

### Adding Features

- **Grid**: Use `CartesianGrid` to add a grid.
- **Axis**: Use `XAxis` for the x-axis.
- **Tooltip**: Use `ChartTooltip` and `ChartTooltipContent` for tooltips.
- **Legend**: Use `ChartLegend` and `ChartLegendContent` for legends.

## Chart Config

Define labels, icons, and colors for your chart. This configuration is separate from the chart data, allowing for flexibility.

## Theming

Charts support theming using CSS variables or direct color values.

### CSS Variables

Define colors in your CSS file:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 100%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
  }
}
```

### Using Colors

Reference theme colors in your chart using `var(--color-KEY)`.

## Tooltip

Customize tooltips using `ChartTooltip` and `ChartTooltipContent`. Use props like `labelKey` and `nameKey` to customize labels and names.

## Legend

Add legends using `ChartLegend` and `ChartLegendContent`. Customize using the `nameKey` prop.

## Accessibility

Enable the `accessibilityLayer` prop for keyboard and screen reader support.

```javascript
<LineChart accessibilityLayer />
```

For more information, explore the [Charts Library](/charts).

------- END OF chart.md -------





------- START OF checkbox.md -------

# Checkbox

A control that allows the user to toggle between checked and not checked.

## Installation

To install the Checkbox component, use the following command:

```bash
pnpm dlx shadcn@latest add checkbox
```

## Usage

To use the Checkbox component, import it into your project:

```javascript
import { Checkbox } from "@/components/ui/checkbox"
```

Then, you can include it in your JSX:

```jsx
<Checkbox />
```

## Examples

### With Text

Include text alongside the checkbox to provide context or additional information.

### Disabled

A disabled checkbox is non-interactive and can be used to indicate a non-selectable option.

### Form

Use checkboxes within forms to allow users to select multiple options or settings. For example, managing mobile notifications or selecting items to display in a sidebar.

------- END OF checkbox.md -------





------- START OF collapsible.md -------

# Collapsible Component Documentation

## Overview
The Collapsible component is an interactive UI element that allows users to expand or collapse a panel. It is part of the Radix UI Primitives library.

## Installation
To install the Collapsible component, use the following command:

```bash
pnpm dlx shadcn@latest add collapsible
```

## Usage
To use the Collapsible component, import it into your project as follows:

```javascript
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
```

### Example
Here is an example of how to implement the Collapsible component:

```javascript
<Collapsible>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects. No attribution required.
  </CollapsibleContent>
</Collapsible>
```

## Additional Resources
- [Collapsible Documentation](https://www.radix-ui.com/docs/primitives/components/collapsible)
- [API Reference](https://www.radix-ui.com/docs/primitives/components/collapsible#api-reference)

------- END OF collapsible.md -------





------- START OF combined.md -------

# Alert Dialog

A modal dialog that interrupts the user with important content and expects a response.

## Installation

To install the Alert Dialog component, use the following command:

```bash
pnpm dlx shadcn@latest add alert-dialog
```

## Usage

Import the necessary components from the Alert Dialog module:

```javascript
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
```

Here is an example of how to use the Alert Dialog component:

```jsx
<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

This example demonstrates a basic alert dialog with a title, description, and action buttons for canceling or continuing the action.

------- END OF combined.md -------





------- START OF combobox.md -------

# Combobox Documentation

## Overview

The Combobox component provides an autocomplete input and command palette with a list of suggestions. It is built using a composition of the `<Popover />` and `<Command />` components.

## Installation

To use the Combobox, ensure you have installed the necessary components:
- [Popover Installation Instructions](/docs/components/popover#installation)
- [Command Installation Instructions](/docs/components/command#installation)

## Usage

Below is an example of how to implement the Combobox component in a React application:

```javascript
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

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
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

## Examples

### Responsive Design

To create a responsive Combobox, use the `<Popover />` component for desktop and the `<Drawer />` component for mobile.

## Additional Resources

- [Collapsible Component](/docs/components/collapsible)
- [Command Component](/docs/components/command)

------- END OF combobox.md -------





------- START OF command.md -------

# Command

Fast, composable, unstyled command menu for React.

## About

The `<Command />` component uses the [`cmdk`](https://cmdk.paco.me) component by [pacocoursey](https://twitter.com/pacocoursey).

## Installation

To install, use the following command:

```bash
pnpm dlx shadcn@latest add command
```

## Usage

Import the necessary components:

```javascript
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
```

Example usage:

```jsx
<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

## Examples

### Dialog

To show the command menu in a dialog, use the `<CommandDialog />` component:

```javascript
export function CommandMenu() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
```

### Combobox

You can use the `<Command />` component as a combobox. See the [Combobox](/docs/components/combobox) page for more information.

## Changelog

### 2024-10-25 Classes for icons

Added `gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0` to the `<CommandItem />` to automatically style icons inside.

Add the following classes to the `cva` call in your `command.tsx` file:

```javascript
const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "... gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    )}
    {...props}
  />
))
```

For more information, visit the [Combobox](/docs/components/combobox) and [Context Menu](/docs/components/context-menu) pages.

------- END OF command.md -------





------- START OF components-accordion.md -------

# Accordion

A vertically stacked set of interactive headings that each reveal a section of content.

## Installation

To install the Accordion component, use the following command:

```bash
pnpm dlx shadcn@latest add accordion
```

## Usage

To use the Accordion component, import it as follows:

```javascript
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
```

Here is an example of how to implement the Accordion component:

```javascript
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Additional Information

- The Accordion component is accessible and adheres to the WAI-ARIA design pattern.
- It can be styled and animated according to your needs.

------- END OF components-accordion.md -------





------- START OF components-alert-dialog.md -------

# Alert Dialog

A modal dialog that interrupts the user with important content and expects a response.

## Installation

To install the Alert Dialog component, use the following command:

```bash
pnpm dlx shadcn@latest add alert-dialog
```

## Usage

Import the necessary components from the Alert Dialog module:

```javascript
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
```

Here is an example of how to use the Alert Dialog component:

```jsx
<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

For more information, refer to the [API Reference](https://www.radix-ui.com/docs/primitives/components/alert-dialog#api-reference).

------- END OF components-alert-dialog.md -------





------- START OF components-alert.md -------

# Alert Component Documentation

## Overview
The Alert component is used to display a callout for user attention.

## Installation
To add the Alert component to your application, use the following CLI command:

```bash
pnpm dlx shadcn@latest add alert
```

## Usage
Import the Alert components into your application:

```javascript
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
```

Example usage of the Alert component:

```jsx
<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the CLI.
  </AlertDescription>
</Alert>
```

## Examples

### Default Alert
This example demonstrates a default alert configuration.

### Destructive Alert
This example demonstrates a destructive alert configuration, typically used for error messages such as session expiration.

---

For more components, see [Accordion](/docs/components/accordion) and [Alert Dialog](/docs/components/alert-dialog).

------- END OF components-alert.md -------





------- START OF components-aspect-ratio.md -------

# Aspect Ratio

Displays content within a desired ratio.

## Installation

To install the Aspect Ratio component, use the following command:

```shell
pnpm dlx shadcn@latest add aspect-ratio
```

## Usage

To use the Aspect Ratio component, import it and use it within your component as shown below:

```javascript
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

<div className="w-[450px]">
  <AspectRatio ratio={16 / 9}>
    <Image src="..." alt="Image" className="rounded-md object-cover" />
  </AspectRatio>
</div>
```

## Additional Resources

- [Aspect Ratio Documentation](https://www.radix-ui.com/docs/primitives/components/aspect-ratio)
- [API Reference](https://www.radix-ui.com/docs/primitives/components/aspect-ratio#api-reference)

------- END OF components-aspect-ratio.md -------





------- START OF components-avatar.md -------

# Avatar Component Documentation

## Overview
The Avatar component is an image element with a fallback for representing the user.

## Installation
To install the Avatar component, use the following command:

```bash
pnpm dlx shadcn@latest add avatar
```

## Usage
To use the Avatar component, import it into your project:

```javascript
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
```

Here is an example of how to implement the Avatar component:

```jsx
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
```

## Additional Resources
- [Aspect Ratio](/docs/components/aspect-ratio)
- [Badge](/docs/components/badge)

------- END OF components-avatar.md -------





------- START OF components-badge.md -------

# Badge Component Documentation

## Installation

To install the Badge component, use the following command:

```bash
pnpm dlx shadcn@latest add badge
```

## Usage

To use the Badge component in your project, import it as follows:

```javascript
import { Badge } from "@/components/ui/badge"
```

You can then use the Badge component in your JSX:

```jsx
<Badge variant="outline">Badge</Badge>
```

### Link

To create a link that looks like a badge, use the `badgeVariants` helper:

```javascript
import { badgeVariants } from "@/components/ui/badge"
```

```jsx
<Link className={badgeVariants({ variant: "outline" })}>Badge</Link>
```

## Examples

### Default

Example of a default badge.

### Secondary

Example of a secondary badge.

### Outline

Example of an outline badge.

### Destructive

Example of a destructive badge.

------- END OF components-badge.md -------





------- START OF components-breadcrumb.md -------

# Breadcrumb Documentation

## Overview

The Breadcrumb component displays the path to the current resource using a hierarchy of links.

## Installation

To install the Breadcrumb component, use the following command:

```bash
pnpm dlx shadcn@latest add breadcrumb
```

## Usage

Import the necessary components from the Breadcrumb module:

```javascript
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
```

### Basic Example

```jsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## Examples

### Custom Separator

Use a custom component as `children` for `<BreadcrumbSeparator />` to create a custom separator.

```jsx
import { Slash } from "lucide-react"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <Slash />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Dropdown

Compose `<BreadcrumbItem />` with a `<DropdownMenu />` to create a dropdown in the breadcrumb.

```jsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

<BreadcrumbItem>
  <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center gap-1">
      Components
      <ChevronDownIcon />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuItem>Documentation</DropdownMenuItem>
      <DropdownMenuItem>Themes</DropdownMenuItem>
      <DropdownMenuItem>GitHub</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</BreadcrumbItem>
```

### Collapsed

Use `<BreadcrumbEllipsis />` to show a collapsed state when the breadcrumb is too long.

```jsx
import { BreadcrumbEllipsis } from "@/components/ui/breadcrumb"

<Breadcrumb>
  <BreadcrumbList>
    {/* ... */}
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    {/* ... */}
  </BreadcrumbList>
</Breadcrumb>
```

### Link Component

To use a custom link component from your routing library, use the `asChild` prop on `<BreadcrumbLink />`.

```jsx
import { Link } from "next/link"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link href="/">Home</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    {/* ... */}
  </BreadcrumbList>
</Breadcrumb>
```

### Responsive

Create a responsive breadcrumb that uses `<BreadcrumbItem />` with `<BreadcrumbEllipsis />`, `<DropdownMenu />`, and `<Drawer />`. It displays a dropdown on desktop and a drawer on mobile.

------- END OF components-breadcrumb.md -------





------- START OF components-button.md -------

# Button Component Documentation

## Overview
The Button component displays a button or a component that looks like a button.

## Installation
To install the Button component, use the following command:

```bash
pnpm dlx shadcn@latest add button
```

## Usage
To use the Button component, import it into your project:

```javascript
import { Button } from "@/components/ui/button"
```

Example usage:

```javascript
<Button variant="outline">Button</Button>
```

## Link
You can use the `buttonVariants` helper to create a link that looks like a button:

```javascript
import { buttonVariants } from "@/components/ui/button"
```

Example:

```javascript
<Link className={buttonVariants({ variant: "outline" })}>Click here</Link>
```

Alternatively, set the `asChild` parameter and nest the link component:

```javascript
<Button asChild>
  <Link href="/login">Login</Link>
</Button>
```

## Examples

### Primary
```javascript
<Button variant="primary">Primary</Button>
```

### Secondary
```javascript
<Button variant="secondary">Secondary</Button>
```

### Destructive
```javascript
<Button variant="destructive">Destructive</Button>
```

### Outline
```javascript
<Button variant="outline">Outline</Button>
```

### Ghost
```javascript
<Button variant="ghost">Ghost</Button>
```

### Link
```javascript
<Link className={buttonVariants({ variant: "link" })}>Link</Link>
```

### Icon
```javascript
<Button variant="icon">Icon</Button>
```

### With Icon
```javascript
<Button variant="with-icon">Login with Email</Button>
```

### Loading
```javascript
<Button variant="loading">Please wait</Button>
```

### As Child
```javascript
<Button asChild>
  <Link href="/login">Login</Link>
</Button>
```

## Changelog

### 2024-10-16: Classes for Icons
Added `gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0` to the button to automatically style icons inside the button. Add the following classes to the `cva` call in your `button.tsx` file:

```javascript
const buttonVariants = cva(
  "inline-flex ... gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
)
```

## Additional Resources
- [Breadcrumb Component](/docs/components/breadcrumb)
- [Calendar Component](/docs/components/calendar)

------- END OF components-button.md -------





------- START OF components-calendar.md -------

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
The `Calendar` component can be used in forms, such as selecting a date of birth.

## Changelog
### 11-03-2024
- Updated the `day_outside` class color to improve contrast:

```css
"day_outside:
        "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
```

For additional components, see [Button](/docs/components/button) and [Card](/docs/components/card).

------- END OF components-calendar.md -------





------- START OF components-card.md -------

# Card Component Documentation

## Overview
The Card component displays a card with a header, content, and footer.

## Installation
To install the Card component, use the following command:

```bash
pnpm dlx shadcn@latest add card
```

## Usage
Import the Card components as follows:

```javascript
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
```

Example usage of the Card component:

```jsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
```

## Changelog
### 11-03-2024: Accessibility Improvements
- Changed the `CardTitle` and `CardDescription` components to use `div` instead of `h3` and `p` to improve accessibility.

```typescript
const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"
```

## Additional Resources
- [Calendar Component](/docs/components/calendar)
- [Carousel Component](/docs/components/carousel)

------- END OF components-card.md -------





------- START OF components-carousel.md -------

# Carousel Documentation

## Overview
The carousel component is built using the [Embla Carousel](https://www.embla-carousel.com/) library, providing motion and swipe capabilities.

## Installation
To install the carousel component, use the following command:

```bash
pnpm dlx shadcn@latest add carousel
```

## Usage
Import the necessary components for the carousel:

```javascript
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
```

Example usage:

```jsx
<Carousel>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

## Examples

### Sizes
To set the size of the items, use the `basis` utility class on the `<CarouselItem />`.

Example:

```jsx
<Carousel>
  <CarouselContent>
    <CarouselItem className="basis-1/3">...</CarouselItem>
    <CarouselItem className="basis-1/3">...</CarouselItem>
    <CarouselItem className="basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>
```

Responsive example:

```jsx
<Carousel>
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>
```

### Spacing
To set the spacing between items, use `pl-[VALUE]` on `<CarouselItem />` and `-ml-[VALUE]` on `<CarouselContent />`.

Example:

```jsx
<Carousel>
  <CarouselContent className="-ml-4">
    <CarouselItem className="pl-4">...</CarouselItem>
    <CarouselItem className="pl-4">...</CarouselItem>
    <CarouselItem className="pl-4">...</CarouselItem>
  </CarouselContent>
</Carousel>
```

Responsive example:

```jsx
<Carousel>
  <CarouselContent className="-ml-2 md:-ml-4">
    <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
    <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
    <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
  </CarouselContent>
</Carousel>
```

### Orientation
Set the orientation of the carousel using the `orientation` prop.

```jsx
<Carousel orientation="vertical | horizontal">
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
</Carousel>
```

## Options
Pass options to the carousel using the `opts` prop. For more details, refer to the [Embla Carousel options documentation](https://www.embla-carousel.com/api/options/).

```jsx
<Carousel
  opts={{
    align: "start",
    loop: true,
  }}
>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
</Carousel>
```

## API
Use a state and the `setApi` prop to get an instance of the carousel API.

```javascript
import { type CarouselApi } from "@/components/ui/carousel"

export function Example() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
```

## Events
Listen to events using the API instance from `setApi`.

```javascript
import { type CarouselApi } from "@/components/ui/carousel"

export function Example() {
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      // Do something on select.
    })
  }, [api])

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
```

For more information on using events, see the [Embla Carousel events documentation](https://www.embla-carousel.com/api/events/).

## Plugins
Add plugins to the carousel using the `plugins` prop.

```javascript
import Autoplay from "embla-carousel-autoplay"

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      // ...
    </Carousel>
  )
}
```

For more information on using plugins, see the [Embla Carousel plugins documentation](https://www.embla-carousel.com/api/plugins/).

------- END OF components-carousel.md -------





------- START OF components-chart.md -------

# Chart Documentation

## Overview

Beautiful charts built using Recharts. These components are designed to be easily integrated into your applications, providing a visually appealing and customizable charting solution.

## Component

We utilize [Recharts](https://recharts.org/) for building charts. The `chart` component is designed with composition in mind, allowing you to build charts using Recharts components and integrate custom components like `ChartTooltip` as needed.

```javascript
import { Bar, BarChart } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/charts";

export function MyChart() {
  return (
    <ChartContainer>
      <BarChart data={data}>
        <Bar dataKey="value" />
        <ChartTooltip content={<ChartTooltipContent />} />
      </BarChart>
    </ChartContainer>
  );
}
```

## Installation

To install `chart.tsx`, run the following command:

```bash
pnpm dlx shadcn@latest add chart
```

### CSS Configuration

Add the following colors to your CSS file:

```css
@layer base {
  :root {
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
  }

  .dark {
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}
```

## Your First Chart

### Data Definition

Define your data for the chart. The data can be in any shape, and you can map it using the `dataKey` prop.

```javascript
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
```

### Chart Configuration

Define the chart configuration for labels, icons, and colors.

```javascript
import { type ChartConfig } from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;
```

### Building the Chart

Build your chart using Recharts components. Ensure to set a `min-h-[VALUE]` on the `ChartContainer` for responsiveness.

```javascript
"use client";

import { Bar, BarChart } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

export function Component() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
```

## Adding Features

### Add a Grid

Import and add the `CartesianGrid` component to your chart.

```javascript
import { Bar, BarChart, CartesianGrid } from "recharts";

<ChartContainer config={chartConfig} className="min-h-[200px] w-full">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>
```

### Add an Axis

Import and add the `XAxis` component to your chart.

```javascript
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

<ChartContainer config={chartConfig} className="h-[200px] w-full">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>
```

### Add Tooltip

Use the custom `ChartTooltip` and `ChartTooltipContent` components.

```javascript
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

<ChartContainer config={chartConfig} className="h-[200px] w-full">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>
```

### Add Legend

Use the `ChartLegend` and `ChartLegendContent` components.

```javascript
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart";

<ChartContainer config={chartConfig} className="h-[200px] w-full">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>
```

## Chart Config

Define labels, icons, and colors for a chart. This configuration is decoupled from chart data, allowing for shared configurations across charts.

```javascript
import { Monitor } from "lucide-react";
import { type ChartConfig } from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    icon: Monitor,
    color: "#2563eb",
    theme: {
      light: "#2563eb",
      dark: "#dc2626",
    },
  },
} satisfies ChartConfig;
```

## Theming

Charts support theming using CSS variables or direct color values.

### CSS Variables

Define colors in your CSS file:

```css
globals.css

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
  }

  .dark: {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 100%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
  }
}
```

### Using Colors

Reference theme colors in your chart using `var(--color-KEY)`.

```javascript
<Bar dataKey="desktop" fill="var(--color-desktop)" />
```

## Tooltip

Customize your chart tooltip using the `ChartTooltip` and `ChartTooltipContent` components.

```javascript
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

<ChartTooltip content={<ChartTooltipContent />} />
```

### Props

| Prop | Type | Description |
| --- | --- | --- |
| `labelKey` | string | The config or data key to use for the label. |
| `nameKey` | string | The config or data key to use for the name. |
| `indicator` | `dot` `line` or `dashed` | The indicator style for the tooltip. |
| `hideLabel` | boolean | Whether to hide the label. |
| `hideIndicator` | boolean | Whether to hide the indicator. |

## Legend

Add a legend to your chart using the `ChartLegend` and `ChartLegendContent` components.

```javascript
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart";

<ChartLegend content={<ChartLegendContent />} />
```

## Accessibility

Enable the `accessibilityLayer` prop to add keyboard access and screen reader support to your charts.

```javascript
<LineChart accessibilityLayer />
```

------- END OF components-chart.md -------





------- START OF components-checkbox.md -------

# Checkbox

A control that allows the user to toggle between checked and not checked.

## Installation

To install the Checkbox component, use the following command:

```bash
pnpm dlx shadcn@latest add checkbox
```

## Usage

To use the Checkbox component, import it into your project:

```javascript
import { Checkbox } from "@/components/ui/checkbox"
```

Then, include it in your JSX:

```jsx
<Checkbox />
```

## Examples

### With Text

Include text alongside the checkbox to provide context or additional information:

```jsx
<Checkbox /> Accept terms and conditions
```

### Disabled

To disable the checkbox, use the `disabled` attribute:

```jsx
<Checkbox disabled />
```

### Form

Use the checkbox within a form to allow users to select options:

```jsx
<form>
  <Checkbox /> Use different settings for my mobile devices
  <button type="submit">Submit</button>
</form>
```

## Additional Information

For more details, refer to the [API Reference](https://www.radix-ui.com/docs/primitives/components/checkbox#api-reference).

------- END OF components-checkbox.md -------





------- START OF components-collapsible.md -------

# Collapsible Component Documentation

## Overview
The Collapsible component is an interactive UI element that allows users to expand or collapse a panel. It is part of the Radix UI Primitives library.

## Installation
To install the Collapsible component, use the following command:

```bash
pnpm dlx shadcn@latest add collapsible
```

## Usage
To use the Collapsible component, import it into your project as follows:

```javascript
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
```

Here is an example of how to implement the Collapsible component:

```jsx
<Collapsible>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects. No attribution required.
  </CollapsibleContent>
</Collapsible>
```

## Additional Resources
- [Checkbox Component Documentation](/docs/components/checkbox)
- [Combobox Component Documentation](/docs/components/combobox)

For more detailed information, refer to the [Collapsible API Reference](https://www.radix-ui.com/docs/primitives/components/collapsible#api-reference).

------- END OF components-collapsible.md -------





------- START OF components-combobox.md -------

# Combobox Documentation

## Overview

The Combobox component provides an autocomplete input and command palette with a list of suggestions. It is built using a composition of the `<Popover />` and `<Command />` components.

## Installation

To use the Combobox, ensure you have installed the necessary components:
- [Popover Installation Instructions](/docs/components/popover#installation)
- [Command Installation Instructions](/docs/components/command#installation)

## Usage

Below is an example of how to implement the Combobox component in a React application:

```javascript
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

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
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

## Examples

### Combobox

The Combobox can be used to create a responsive user interface element that allows users to select from a list of options.

### Responsive Design

For a responsive design, use the `<Popover />` component on desktop and the `<Drawer />` component on mobile devices.

## Additional Components

- [Collapsible Component](/docs/components/collapsible)
- [Command Component](/docs/components/command)

------- END OF components-combobox.md -------





------- START OF components-command.md -------

# Command Documentation

## Overview

The `<Command />` component is a fast, composable, unstyled command menu for React, utilizing the [`cmdk`](https://cmdk.paco.me) component by [pacocoursey](https://twitter.com/pacocoursey).

## Installation

To install the command component, use the following command:

```bash
pnpm dlx shadcn@latest add command
```

## Usage

Import the necessary components from the command module:

```javascript
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
```

Example usage of the `<Command />` component:

```jsx
<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

## Examples

### Dialog

To display the command menu in a dialog, use the `<CommandDialog />` component:

```jsx
export function CommandMenu() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
```

### Combobox

The `<Command />` component can also be used as a combobox. Refer to the [Combobox documentation](/docs/components/combobox) for more details.

## Changelog

### 2024-10-25: Classes for Icons

Added `gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0` to the `<CommandItem />` to automatically style icons inside. Update your `command.tsx` file as follows:

```javascript
const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "... gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    )}
    {...props}
  />
))
```

## Additional Resources

- [Combobox](/docs/components/combobox)
- [Context Menu](/docs/components/context-menu)

------- END OF components-command.md -------





------- START OF components-context-menu.md -------

# Context Menu

The Context Menu component displays a menu to the user, such as a set of actions or functions, triggered by a button.

## Installation

To install the Context Menu component, use the following command:

```shell
pnpm dlx shadcn@latest add context-menu
```

## Usage

To use the Context Menu component, import it as follows:

```javascript
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
```

Here is an example of how to implement the Context Menu:

```javascript
<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Billing</ContextMenuItem>
    <ContextMenuItem>Team</ContextMenuItem>
    <ContextMenuItem>Subscription</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

For more information, refer to the [API Reference](https://www.radix-ui.com/docs/primitives/components/context-menu#api-reference).

------- END OF components-context-menu.md -------





------- START OF components-data-table.md -------

# Data Table Documentation

## Overview

This documentation provides a guide on building powerful tables and datagrids using TanStack Table. It covers the creation of custom data tables with features like sorting, filtering, pagination, and more.

## Introduction

Each data table or datagrid is unique, with different sorting and filtering requirements and data sources. Instead of a single data-table component, this guide helps you build your own using the basic `<Table />` component.

## Table of Contents

- [Basic Table](#basic-table)
- [Row Actions](#row-actions)
- [Pagination](#pagination)
- [Sorting](#sorting)
- [Filtering](#filtering)
- [Visibility](#visibility)
- [Row Selection](#row-selection)
- [Reusable Components](#reusable-components)

## Installation

1. Add the `<Table />` component to your project:

   ```bash
   pnpm dlx shadcn@latest add table
   ```

2. Add `tanstack/react-table` dependency:

   ```bash
   pnpm add @tanstack/react-table
   ```

## Prerequisites

We will build a table to show recent payments. Here's the data structure:

```typescript
type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const payments: Payment[] = [
  { id: "728ed52f", amount: 100, status: "pending", email: "m@example.com" },
  { id: "489e1d42", amount: 125, status: "processing", email: "example@gmail.com" },
  // ...
]
```

## Project Structure

Create the following file structure:

```
app
└── payments
    ├── columns.tsx
    ├── data-table.tsx
    └── page.tsx
```

- `columns.tsx`: Contains column definitions.
- `data-table.tsx`: Contains the `<DataTable />` component.
- `page.tsx`: Fetches data and renders the table.

## Basic Table

### Column Definitions

Define your columns in `app/payments/columns.tsx`:

```typescript
"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  { accessorKey: "status", header: "Status" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "amount", header: "Amount" },
]
```

### `<DataTable />` Component

Create the `<DataTable />` component in `app/payments/data-table.tsx`:

```typescript
"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
```

### Render the Table

Render the table in `app/payments/page.tsx`:

```typescript
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    { id: "728ed52f", amount: 100, status: "pending", email: "m@example.com" },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
```

## Cell Formatting

Format the amount cell to display the dollar amount and align it to the right.

### Update Columns Definition

Update the `header` and `cell` definitions for amount:

```typescript
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
]
```

## Row Actions

Add row actions using a `<Dropdown />` component.

### Update Columns Definition

Add a new `actions` column:

```typescript
"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const columns: ColumnDef<Payment>[] = [
  // ...
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  // ...
]
```

## Pagination

Add pagination to your table.

### Update `<DataTable>`

```typescript
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  // ...
}
```

### Add Pagination Controls

Add pagination controls using the `<Button />` component:

```typescript
import { Button } from "@/components/ui/button"

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          { // .... }
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
```

## Sorting

Make the email column sortable.

### Update `<DataTable>`

```typescript
"use client"

import * as React from "react"
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <div>
      <div className="rounded-md border">
        <Table>{ ... }</Table>
      </div>
    </div>
  )
}
```

### Make Header Cell Sortable

Update the `email` header cell:

```typescript
"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
]
```

## Filtering

Add a search input to filter emails.

### Update `<DataTable>`

```typescript
"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>{ ... }</Table>
      </div>
    </div>
  )
}
```

## Visibility

Add column visibility using `@tanstack/react-table` visibility API.

### Update `<DataTable>`

```typescript
"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  })

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={table.getColumn("email")?.getFilterValue() as string}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>{ ... }</Table>
      </div>
    </div>
  )
}
```

## Row Selection

Add row selection to your table.

### Update Column Definitions

```typescript
"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
]
```

### Update `<DataTable>`

```typescript
export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div>
      <div className="rounded-md border">
        <Table />
      </div>
    </div>
  )
}
```

### Show Selected Rows

Show the number of selected rows:

```typescript
<div className="flex-1 text-sm text-muted-foreground">
  {table.getFilteredSelectedRowModel().rows.length} of{" "}
  {table.getFilteredRowModel().rows.length} row(s) selected.
</div>
```

## Reusable Components

### Column Header

Make any column header sortable and hideable.

```typescript
import { Column } from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ChevronsUpDown, EyeOff } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ArrowDown />
            ) : column.getIsSorted() === "asc" ? (
              <ArrowUp />
            ) : (
              <ChevronsUpDown />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUp className="h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDown className="h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeOff className="h-3.5 w-3.5 text-muted-foreground/70" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
```

### Pagination

Add pagination controls to your table including page size and selection count.

```typescript
import { Table } from "@tanstack/react-table"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  )
}
```

### Column Toggle

A component to toggle column visibility.

```typescript
"use client"

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Table } from "@tanstack/react-table"
import { Settings2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>
}

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
        >
          <Settings2 />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide()
          )
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            )
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

## Conclusion

This guide provides a comprehensive overview of building custom data tables using TanStack Table. It includes features like sorting, filtering, pagination, and more, allowing for flexible and reusable components.

------- END OF components-data-table.md -------





------- START OF components-date-picker.md -------

# Date Picker Documentation

## Overview

The Date Picker is a component that allows users to select dates, with options for range selection and presets. It is built using a combination of the `<Popover />` and `<Calendar />` components.

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

Allows users to select a range of dates.

### With Presets

Provides preset date options for quick selection.

### Form Integration

Example of integrating the Date Picker into a form, such as selecting a date of birth.

## Additional Resources

- [Data Table Component](/docs/components/data-table)
- [Dialog Component](/docs/components/dialog)

------- END OF components-date-picker.md -------





------- START OF components-dialog.md -------

# Dialog Component Documentation

## Overview

A dialog is a window overlaid on either the primary window or another dialog window, rendering the content underneath inert.

## Installation

To install the Dialog component, use the following command:

```bash
pnpm dlx shadcn@latest add dialog
```

## Usage

Import the Dialog components into your project:

```javascript
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
```

Example usage of the Dialog component:

```jsx
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

## Examples

### Custom Close Button

To activate the `Dialog` component from within a `Context Menu` or `Dropdown Menu`, you must encase the `Context Menu` or `Dropdown Menu` component in the `Dialog` component. For more information, refer to the linked issue [here](https://github.com/radix-ui/primitives/issues/1836).

```jsx
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

## Notes

- To activate the `Dialog` component from within a `Context Menu` or `Dropdown Menu`, you must encase the `Context Menu` or `Dropdown Menu` component in the `Dialog` component. For more information, refer to the linked issue [here](https://github.com/radix-ui/primitives/issues/1836).

------- END OF components-dialog.md -------





------- START OF components-drawer.md -------

# Drawer Component for React

## About

The Drawer component is built on top of [Vaul](https://github.com/emilkowalski/vaul) by [emilkowalski_](https://twitter.com/emilkowalski_).

## Installation

To install the Drawer component, use the following command:

```bash
pnpm dlx shadcn@latest add drawer
```

## Usage

Import the necessary components from the Drawer module:

```javascript
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

Example usage of the Drawer component:

```javascript
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

## Examples

### Responsive Dialog

You can combine the `Dialog` and `Drawer` components to create a responsive dialog. This renders a `Dialog` component on desktop and a `Drawer` on mobile.

------- END OF components-drawer.md -------





------- START OF components-dropdown-menu.md -------

# Dropdown Menu Documentation

## Overview
The Dropdown Menu component displays a menu to the user, such as a set of actions or functions, triggered by a button.

## Installation
To install the Dropdown Menu component, use the following command:

```bash
pnpm dlx shadcn@latest add dropdown-menu
```

## Usage
Import the necessary components from the Dropdown Menu module:

```javascript
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
```

Example usage of the Dropdown Menu:

```jsx
<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## Examples

### Checkboxes

### Radio Group

## Changelog

### 2024-10-16: Classes for Icons
Added `gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0` to the `DropdownMenuItem` to automatically style icons inside the dropdown menu item. Update your `dropdown-menu.tsx` file as follows:

```javascript
const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative ... gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
```

### 2024-10-25: Classes for `<DropdownMenuSubTrigger />`
Added `gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0` to the `<DropdownMenuSubTrigger />` to automatically style icons inside. Update your `dropdown-menu.tsx` file as follows:

```javascript
<DropdownMenuPrimitive.SubTrigger
  ref={ref}
  className={cn(
    "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    inset && "pl-8",
    className
  )}
  {...props}
>
  {/* ... */}
</DropdownMenuPrimitive.SubTrigger>
```

## Additional Resources
- [API Reference](https://www.radix-ui.com/docs/primitives/components/dropdown-menu#api-reference)

------- END OF components-dropdown-menu.md -------





------- START OF components-form.md -------

# React Hook Form

## Overview

React Hook Form simplifies form handling in React applications. It integrates seamlessly with Zod for schema validation, ensuring forms are accessible, well-structured, and easy to use.

## Features

- Composable components for building forms.
- `<FormField />` component for controlled form fields.
- Form validation using Zod.
- Accessibility and error message handling.
- Unique ID generation with `React.useId()`.
- ARIA attributes applied based on form field states.
- Compatible with Radix UI components.
- Customizable markup and styling.

## Anatomy

```jsx
<Form>
  <FormField
    control={...}
    name="..."
    render={() => (
      <FormItem>
        <FormLabel />
        <FormControl>
          { /* Your form field */}
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
</Form>
```

## Example

```jsx
const form = useForm()

<FormField
  control={form.control}
  name="username"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Username</FormLabel>
      <FormControl>
        <Input placeholder="shadcn" {...field} />
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
```

## Installation

Install the necessary packages using the following command:

```bash
pnpm dlx shadcn@latest add form
```

## Usage

### Create a Form Schema

Define your form's structure using a Zod schema:

```jsx
"use client"

import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})
```

### Define a Form

Use the `useForm` hook from `react-hook-form` to create a form:

```jsx
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
}
```

### Build Your Form

Use the `<Form />` components to construct your form:

```jsx
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

## Examples

Explore more examples of using the `<Form />` component with various UI elements:

- [Checkbox](/docs/components/checkbox#form)
- [Date Picker](/docs/components/date-picker#form)
- [Input](/docs/components/input#form)
- [Radio Group](/docs/components/radio-group#form)
- [Select](/docs/components/select#form)
- [Switch](/docs/components/switch#form)
- [Textarea](/docs/components/textarea#form)
- [Combobox](/docs/components/combobox#form)

------- END OF components-form.md -------





------- START OF components-hover-card.md -------

# Hover Card Documentation

The Hover Card component allows sighted users to preview content available behind a link.

## Installation

To install the Hover Card component, use the following command:

```bash
pnpm dlx shadcn@latest add hover-card
```

## Usage

To use the Hover Card component, import it into your project:

```javascript
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
```

Here is an example of how to implement the Hover Card:

```jsx
<HoverCard>
  <HoverCardTrigger>Hover</HoverCardTrigger>
  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>
```

## Additional Resources

- [API Reference](https://www.radix-ui.com/docs/primitives/components/hover-card#api-reference)
- [Form Component](/docs/components/form)
- [Input Component](/docs/components/input)

------- END OF components-hover-card.md -------





------- START OF components-input-otp.md -------

# Input OTP Documentation

## Overview
Input OTP is an accessible one-time password component with copy-paste functionality, built on top of [input-otp](https://github.com/guilhermerodz/input-otp) by [@guilherme_rodz](https://twitter.com/guilherme_rodz).

## Installation

### Using CLI
Run the following command to install:
```bash
pnpm dlx shadcn@latest add input-otp
```

### Update Tailwind Configuration
Add the following animations to your `tailwind.config.js` file:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
}
```

## Usage
Import the necessary components:
```javascript
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
```

Example usage:
```jsx
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

## Examples

### Pattern
Define a custom pattern for the OTP input using the `pattern` prop:
```javascript
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

<InputOTP
  maxLength={6}
  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    {/* ... */}
  </InputOTPGroup>
</InputOTP>
```

### Separator
Add a separator between input groups using `<InputOTPSeparator />`:
```jsx
<InputOTP maxLength={4}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>
```

### Controlled
Control the input value using `value` and `onChange` props.

## Changelog

### 2024-03-19 Composition
Updates have been made to replace the render props pattern with composition. Update your code if you prefer the composition pattern.

### Update to Latest Version
Run the following command to update:
```bash
pnpm add input-otp@latest
```

### Update `input-otp.tsx`
```diff
- import { OTPInput, SlotProps } from "input-otp"
+ import { OTPInput, OTPInputContext } from "input-otp"

 const InputOTPSlot = React.forwardRef<
   React.ElementRef<"div">,
-   SlotProps & React.ComponentPropsWithoutRef<"div">
+   React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
+   const inputOTPContext = React.useContext(OTPInputContext)
+   const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
```

### 2024-03-19 Disabled
To add a disabled state to the input, update `<InputOTP />` as follows:
```javascript
const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"
```


------- END OF components-input-otp.md -------





------- START OF components-input.md -------

# Input Component Documentation

## Installation

To install the input component, use the following command:

```bash
pnpm dlx shadcn@latest add input
```

## Usage

To use the input component in your project, import it as follows:

```javascript
import { Input } from "@/components/ui/input"
```

Then, you can use the component in your JSX:

```jsx
<Input />
```

## Examples

### Default

A basic input field example.

### File

An input field for file uploads.

### Disabled

An example of a disabled input field.

### With Label

An input field with an associated label.

### With Button

An input field with an accompanying button, such as a subscribe button.

### Form

An example of an input field within a form, including a username field and a submit button.

---

This documentation provides a guide to using the input component in your application. For more advanced usage and examples, refer to the full documentation on the official site.

------- END OF components-input.md -------





------- START OF components-label.md -------

# Label Component Documentation

## Overview

The Label component renders an accessible label associated with controls.

## Installation

To install the Label component, use the following command:

```bash
pnpm dlx shadcn@latest add label
```

## Usage

To use the Label component, import it into your project:

```javascript
import { Label } from "@/components/ui/label"
```

Then, you can use the Label component in your JSX:

```jsx
<Label htmlFor="email">Your email address</Label>
```

## Additional Resources

- [Label Documentation](https://www.radix-ui.com/docs/primitives/components/label)
- [API Reference](https://www.radix-ui.com/docs/primitives/components/label#api-reference)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

------- END OF components-label.md -------





------- START OF components-menubar.md -------

# Menubar

A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.

## Installation

To install the Menubar component, use the following command:

```bash
pnpm dlx shadcn@latest add menubar
```

## Usage

Import the necessary components from your UI library:

```javascript
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
```

Here is an example of how to use the Menubar component:

```jsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

For more information, refer to the [API Reference](https://www.radix-ui.com/docs/primitives/components/menubar#api-reference).

------- END OF components-menubar.md -------





------- START OF components-navigation-menu.md -------

# Navigation Menu Documentation

## Overview
The Navigation Menu is a collection of links for navigating websites. This documentation provides installation instructions, usage examples, and additional resources for implementing a navigation menu using Radix UI components.

## Installation
To install the Navigation Menu component, use the following command:

```bash
pnpm dlx shadcn@latest add navigation-menu
```

## Usage
Import the necessary components from the Navigation Menu module:

```javascript
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
```

### Example Usage
Here is an example of how to use the Navigation Menu components:

```jsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

## Examples

### Link Component
When using the Next.js `<Link />` component, apply the `navigationMenuTriggerStyle()` for styling:

```javascript
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
```

```jsx
<NavigationMenuItem>
  <Link href="/docs" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Documentation
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>
```

## Additional Resources
- For handling client-side routing, see the [Radix UI documentation](https://www.radix-ui.com/docs/primitives/components/navigation-menu#with-client-side-routing).
- Related components: [Menubar](/docs/components/menubar), [Pagination](/docs/components/pagination).

------- END OF components-navigation-menu.md -------





------- START OF components-pagination.md -------

# Pagination Documentation

## Overview
Pagination with page navigation, next and previous links.

## Installation
To install the pagination component, use the following command:

```bash
pnpm dlx shadcn@latest add pagination
```

## Usage
Import the necessary components for pagination:

```javascript
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
```

Example usage of the pagination component:

```jsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

### Next.js Integration
By default, the `<PaginationLink />` component renders an `<a />` tag. To use the Next.js `<Link />` component, update `pagination.tsx` as follows:

```diff
+ import Link from "next/link"

- type PaginationLinkProps = ... & React.ComponentProps<"a">
+ type PaginationLinkProps = ... & React.ComponentProps<typeof Link>

const PaginationLink = ({...props }: ) => (
  <PaginationItem>
-   <a>
+   <Link>
      // ...
-   </a>
+   </Link>
  </PaginationItem>
)
```

**Note:** We are updating the CLI to automate this process.

------- END OF components-pagination.md -------





------- START OF components-popover.md -------

# Popover

Displays rich content in a portal, triggered by a button.

## Installation

To install the Popover component, use the following command:

```bash
pnpm dlx shadcn@latest add popover
```

## Usage

Import the Popover components into your project:

```javascript
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
```

Use the Popover component in your JSX:

```jsx
<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>
```

## Additional Resources

- [Popover Documentation](https://www.radix-ui.com/docs/primitives/components/popover)
- [API Reference](https://www.radix-ui.com/docs/primitives/components/popover#api-reference)

------- END OF components-popover.md -------





------- START OF components-progress.md -------

# Progress Component Documentation

## Overview

The Progress component displays an indicator showing the completion progress of a task, typically displayed as a progress bar.

## Installation

To install the Progress component, use the following command:

```bash
pnpm dlx shadcn@latest add progress
```

## Usage

To use the Progress component in your application, import it and include it in your JSX as shown below:

```javascript
import { Progress } from "@/components/ui/progress";

<Progress value={33} />
```

## Additional Resources

- [Progress Component Documentation](https://www.radix-ui.com/docs/primitives/components/progress)
- [API Reference](https://www.radix-ui.com/docs/primitives/components/progress#api-reference)

------- END OF components-progress.md -------





------- START OF components-radio-group.md -------

# Radio Group

A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.

## Installation

To install the Radio Group component, use the following command:

```bash
pnpm dlx shadcn@latest add radio-group
```

## Usage

Import the necessary components to use the Radio Group:

```javascript
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
```

Example of using the Radio Group component:

```javascript
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

## Examples

### Form

Example of a form using the Radio Group component:

- Notify me about...
  - All new messages
  - Direct messages and mentions
  - Nothing

## Additional Resources

- [API Reference](https://www.radix-ui.com/docs/primitives/components/radio-group#api-reference)
- [Progress Component](/docs/components/progress)
- [Resizable Component](/docs/components/resizable)

------- END OF components-radio-group.md -------





------- START OF components-resizable.md -------

# Resizable

Accessible resizable panel groups and layouts with keyboard support.

## About

The `Resizable` component is built on top of [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels) by [bvaughn](https://github.com/bvaughn).

## Installation

To install the `Resizable` component, use the following command:

```bash
pnpm dlx shadcn@latest add resizable
```

## Usage

Import the necessary components from the `resizable` package:

```javascript
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
```

Example of a horizontal resizable panel group:

```javascript
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel>One</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Two</ResizablePanel>
</ResizablePanelGroup>
```

## Examples

### Vertical

Use the `direction` prop to set the direction of the resizable panels to vertical:

```javascript
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

### Handle

You can set or hide the handle by using the `withHandle` prop on the `ResizableHandle` component:

```javascript
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

------- END OF components-resizable.md -------





------- START OF components-scroll-area.md -------

# Scroll-area

Augments native scroll functionality for custom, cross-browser styling.

## Installation

To install the Scroll-area component, use the following command:

```bash
pnpm dlx shadcn@latest add scroll-area
```

## Usage

To use the Scroll-area component, import it and include it in your JSX:

```javascript
import { ScrollArea } from "@/components/ui/scroll-area"

<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  Jokester began sneaking into the castle in the middle of the night and leaving
  jokes all over the place: under the king's pillow, in his soup, even in the
  royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
  then, one day, the people of the kingdom discovered that the jokes left by
  Jokester were so funny that they couldn't help but laugh. And once they
  started laughing, they couldn't stop.
</ScrollArea>
```

## Examples

### Horizontal Scrolling

Include images or content that require horizontal scrolling within the Scroll-area component.

---

This documentation provides a basic overview of the Scroll-area component, including installation and usage instructions. For more detailed information, refer to the [API Reference](https://www.radix-ui.com/docs/primitives/components/scroll-area#api-reference).

------- END OF components-scroll-area.md -------





------- START OF components-select.md -------

# Select Component Documentation

The Select component displays a list of options for the user to pick from, triggered by a button.

## Installation

To install the Select component, use the following command:

```bash
pnpm dlx shadcn@latest add select
```

## Usage

Import the Select component and its subcomponents:

```javascript
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
```

Example usage of the Select component:

```javascript
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

## Examples

### Scrollable

Example of a scrollable Select component for selecting a timezone.

### Form

Example of a Select component used in a form to select a verified email address. You can manage email addresses in your email settings.

------- END OF components-select.md -------





------- START OF components-separator.md -------

# Separator Component Documentation

## Overview
The Separator component is used to visually or semantically separate content within a UI. It is part of the Radix Primitives, an open-source UI component library.

## Installation
To install the Separator component, use one of the following package managers:

```bash
pnpm dlx shadcn@latest add separator
```

## Usage
To use the Separator component in your project, import it and include it in your JSX as follows:

```javascript
import { Separator } from "@/components/ui/separator";

<Separator />
```

## Additional Resources
- [Radix Primitives Documentation](https://www.radix-ui.com/docs/primitives/components/separator)
- [API Reference](https://www.radix-ui.com/docs/primitives/components/separator#api-reference)

------- END OF components-separator.md -------





------- START OF components-sheet.md -------

# Sheet Component Documentation

The Sheet component extends the Dialog component to display content that complements the main content of the screen.

## Installation

To install the Sheet component, use one of the following package managers:

```bash
pnpm dlx shadcn@latest add sheet
```

## Usage

Import the necessary components from the Sheet module:

```javascript
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
```

Example usage of the Sheet component:

```javascript
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

## Examples

### Side

Use the `side` property on `<SheetContent />` to specify the edge of the screen where the component will appear. Possible values are `top`, `right`, `bottom`, or `left`.

### Size

Adjust the size of the sheet using CSS classes:

```javascript
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent className="w-[400px] sm:w-[540px]">
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

For more information, refer to the [API Reference](https://www.radix-ui.com/docs/primitives/components/dialog#api-reference).

------- END OF components-sheet.md -------





------- START OF components-sidebar.md -------

# Sidebar Component Documentation

## Overview

The Sidebar component is a composable, themeable, and customizable UI element that can collapse to icons. It is central to many applications and often contains multiple interactive parts.

## Installation

### CLI Installation

Run the following command to install `sidebar.tsx`:

```bash
pnpm dlx shadcn@latest add sidebar
```

### CSS Configuration

Add the following colors to your CSS file if not automatically installed:

```css
@layer base {
  :root {
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}
```

## Structure

A `Sidebar` component is composed of the following parts:

- `SidebarProvider`: Handles collapsible state.
- `Sidebar`: The sidebar container.
- `SidebarHeader` and `SidebarFooter`: Sticky at the top and bottom of the sidebar.
- `SidebarContent`: Scrollable content.
- `SidebarGroup`: Section within the `SidebarContent`.
- `SidebarTrigger`: Trigger for the `Sidebar`.

## Usage

### Basic Layout

`app/layout.tsx`

```jsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
```

### Sidebar Component

`components/app-sidebar.tsx`

```jsx
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
```

## Creating Your First Sidebar

### Basic Sidebar Setup

Add a `SidebarProvider` and `SidebarTrigger` at the root of your application.

`app/layout.tsx`

```jsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
```

### Sidebar with Menu

Add a `SidebarMenu` to the sidebar.

`components/app-sidebar.tsx`

```jsx
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
```

## Components

### SidebarProvider

The `SidebarProvider` component provides the sidebar context to the `Sidebar` component. Always wrap your application in a `SidebarProvider`.

#### Props

| Name | Type | Description |
| --- | --- | --- |
| `defaultOpen` | `boolean` | Default open state of the sidebar. |
| `open` | `boolean` | Open state of the sidebar (controlled). |
| `onOpenChange` | `(open: boolean) => void` | Sets open state of the sidebar (controlled). |

### Sidebar

#### Props

| Property | Type | Description |
| --- | --- | --- |
| `side` | `left` or `right` | The side of the sidebar. |
| `variant` | `sidebar`, `floating`, or `inset` | The variant of the sidebar. |
| `collapsible` | `offcanvas`, `icon`, or `none` | Collapsible state of the sidebar. |

### useSidebar

The `useSidebar` hook is used to control the sidebar.

```jsx
import { useSidebar } from "@/components/ui/sidebar"

export function AppSidebar() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar()
}
```

### SidebarHeader

Use the `SidebarHeader` component to add a sticky header to the sidebar.

### SidebarFooter

Use the `SidebarFooter` component to add a sticky footer to the sidebar.

### SidebarContent

The `SidebarContent` component is used to wrap the content of the sidebar. It is scrollable.

### SidebarGroup

Use the `SidebarGroup` component to create a section within the sidebar.

### SidebarMenu

The `SidebarMenu` component is used for building a menu within a `SidebarGroup`.

### SidebarMenuButton

The `SidebarMenuButton` component is used to render a menu button within a `SidebarMenuItem`.

### SidebarMenuAction

The `SidebarMenuAction` component is used to render a menu action within a `SidebarMenuItem`.

### SidebarMenuSub

The `SidebarMenuSub` component is used to render a submenu within a `SidebarMenu`.

### SidebarMenuBadge

The `SidebarMenuBadge` component is used to render a badge within a `SidebarMenuItem`.

### SidebarMenuSkeleton

The `SidebarMenuSkeleton` component is used to render a skeleton for a `SidebarMenu`.

### SidebarSeparator

The `SidebarSeparator` component is used to render a separator within a `Sidebar`.

### SidebarTrigger

Use the `SidebarTrigger` component to render a button that toggles the sidebar.

### SidebarRail

The `SidebarRail` component is used to render a rail within a `Sidebar`.

## Theming

We use the following CSS variables to theme the sidebar:

```css
@layer base {
  :root {
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 0 0% 98%;
    --sidebar-primary-foreground: 240 5.9% 10%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}
```

## Styling

### Styling Based on State

- **Collapsible State**: Hide the `SidebarGroup` when the sidebar is in `icon` mode.

```jsx
<Sidebar collapsible="icon">
  <SidebarContent>
    <SidebarGroup className="group-data-[collapsible=icon]:hidden" />
  </SidebarContent>
</Sidebar>
```

- **Menu Button Active State**: Force the menu action to be visible when the menu button is active.

```jsx
<SidebarMenuItem>
  <SidebarMenuButton />
  <SidebarMenuAction className="peer-data-[active=true]/menu-button:opacity-100" />
</SidebarMenuItem>
```

## Changelog

### 2024-10-30

- Improved `setOpen` callback logic in `<SidebarProvider>`.

### 2024-10-21

- Moved `text-sidebar-foreground` from `<SidebarProvider>` to `<Sidebar>` component.

### 2024-10-20

- Fixed typo in `useSidebar` hook.

------- END OF components-sidebar.md -------





------- START OF components-skeleton.md -------

# Skeleton Component Documentation

## Overview
The Skeleton component is used to display a placeholder while content is loading.

## Installation
To install the Skeleton component, use the following command:

```bash
pnpm dlx shadcn@latest add skeleton
```

## Usage
To use the Skeleton component, import it into your project:

```javascript
import { Skeleton } from "@/components/ui/skeleton"
```

You can then use the Skeleton component in your JSX:

```jsx
<Skeleton className="w-[100px] h-[20px] rounded-full" />
```

## Examples

### Card Example
This section would typically include examples of how to use the Skeleton component within a card layout.

---

Note: This documentation is intended for developers using the shadcn library to implement Skeleton components in their applications.

------- END OF components-skeleton.md -------





------- START OF components-slider.md -------

# Slider Component Documentation

## Overview
The Slider component is an input element that allows users to select a value from a specified range.

## Installation
To install the Slider component, use the following command:

```bash
pnpm dlx shadcn@latest add slider
```

## Usage
To use the Slider component in your project, import it and include it in your JSX as shown below:

```javascript
import { Slider } from "@/components/ui/slider";

<Slider defaultValue={[33]} max={100} step={1} />
```

## Additional Resources
- [Slider Documentation](https://www.radix-ui.com/docs/primitives/components/slider)
- [API Reference](https://www.radix-ui.com/docs/primitives/components/slider#api-reference)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)

------- END OF components-slider.md -------





------- START OF components-sonner.md -------

# Sonner

An opinionated toast component for React.

## About

Sonner is built and maintained by [emilkowalski\_](https://twitter.com/emilkowalski_).

## Installation

### Run the following command:

```bash
pnpm dlx shadcn@latest add sonner
```

### Add the Toaster component

In `app/layout.tsx`:

```javascript
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
```

## Usage

To use the toast functionality:

```javascript
import { toast } from "sonner"

toast("Event has been created.")
```

------- END OF components-sonner.md -------





------- START OF components-switch.md -------

# Switch Component Documentation

## Overview
The Switch component is a control that allows the user to toggle between checked and not checked states.

## Installation
To install the Switch component, use the following command:

```shell
pnpm dlx shadcn@latest add switch
```

## Usage
To use the Switch component in your project, import it and include it in your JSX:

```javascript
import { Switch } from "@/components/ui/switch";

<Switch />
```

## Examples

### Form Example

#### Email Notifications
- **Marketing emails**: Receive emails about new products, features, and more.
- **Security emails**: Receive emails about your account security.

## Additional Resources
- [Switch Documentation](https://www.radix-ui.com/docs/primitives/components/switch)
- [API Reference](https://www.radix-ui.com/docs/primitives/components/switch#api-reference)

------- END OF components-switch.md -------





------- START OF components-table.md -------

# Responsive Table Component Documentation

## Overview
A responsive table component designed to display invoice data effectively.

### Example Table

| Invoice | Status  | Method       | Amount   |
|---------|---------|--------------|----------|
| INV001  | Paid    | Credit Card  | $250.00  |
| INV002  | Pending | PayPal       | $150.00  |
| INV003  | Unpaid  | Bank Transfer| $350.00  |
| INV004  | Paid    | Credit Card  | $450.00  |
| INV005  | Paid    | PayPal       | $550.00  |
| INV006  | Pending | Bank Transfer| $200.00  |
| INV007  | Unpaid  | Credit Card  | $300.00  |
| **Total** |         |              | **$2,500.00** |

## Installation
To install the table component, use the following command:

```bash
pnpm dlx shadcn@latest add table
```

## Usage
Import the necessary components to use the table in your project:

```javascript
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
```

### Example Usage

```jsx
<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Data Table
The `<Table />` component can be extended to create more complex data tables. Integrate it with [@tanstack/react-table](https://tanstack.com/table/v8) for features like sorting, filtering, and pagination.

For more details, refer to the [Data Table documentation](/docs/components/data-table) and see an example in the [Tasks demo](/examples/tasks).

------- END OF components-table.md -------





------- START OF components-tabs.md -------

# Tabs Documentation

Tabs are a set of layered sections of content, known as tab panels, that are displayed one at a time.

## Installation

To install the Tabs component, use one of the following package managers:

### Using pnpm
```bash
pnpm dlx shadcn@latest add tabs
```

## Usage

To use the Tabs component, import the necessary modules:

```javascript
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
```

Here is an example of how to implement the Tabs component:

```javascript
<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
```

## Additional Resources

- [API Reference](https://www.radix-ui.com/docs/primitives/components/tabs#api-reference)
- [Table Component](/docs/components/table)
- [Textarea Component](/docs/components/textarea)

------- END OF components-tabs.md -------





------- START OF components-textarea.md -------

# Textarea Component Documentation

## Overview
The Textarea component displays a form textarea or a component that resembles a textarea.

## Installation
To install the Textarea component, use the following command:

```bash
pnpm dlx shadcn@latest add textarea
```

## Usage
To use the Textarea component, import it into your project:

```javascript
import { Textarea } from "@/components/ui/textarea"
```

Then, include it in your JSX:

```jsx
<Textarea />
```

## Examples

### Default
A basic example of the Textarea component:

```jsx
<Textarea />
```

### Disabled
An example of a disabled Textarea:

```jsx
<Textarea disabled />
```

### With Label
An example of a Textarea with a label:

```jsx
<label htmlFor="message">Your Message</label>
<Textarea id="message" />
```

### With Text
An example of a Textarea with placeholder text:

```jsx
<Textarea placeholder="Your message will be copied to the support team." />
```

### With Button
An example of a Textarea with a submit button:

```jsx
<Textarea placeholder="Send message" />
<button type="submit">Submit</button>
```

### Form
An example of a Textarea within a form:

```jsx
<form>
  <label htmlFor="bio">Bio</label>
  <Textarea id="bio" placeholder="You can @mention other users and organizations." />
  <button type="submit">Submit</button>
</form>
```

## Additional Resources
- [Tabs Component Documentation](/docs/components/tabs)
- [Toast Component Documentation](/docs/components/toast)

------- END OF components-textarea.md -------





------- START OF components-toast.md -------

# Toast Component Documentation

## Overview
A toast is a succinct message that is displayed temporarily to inform users of an event or action.

## Installation

### Run the following command:
```bash
pnpm dlx shadcn@latest add toast
```

### Add the Toaster Component
In your `app/layout.tsx` file, add the Toaster component:
```javascript
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
```

## Usage
The `useToast` hook returns a `toast` function that you can use to display a toast message.

### Import the Hook
```javascript
import { useToast } from "@/hooks/use-toast"
```

### Example Usage
```javascript
export const ToastDemo = () => {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
```

To display multiple toasts at the same time, update the `TOAST_LIMIT` in `use-toast.tsx`.

## Examples

### Simple Toast
A basic toast message.

### Toast with Title
A toast message that includes a title.

### Toast with Action
A toast message that includes an action.

### Destructive Toast
Use `toast({ variant: "destructive" })` to display a destructive toast message.

------- END OF components-toast.md -------





------- START OF components-toggle-group.md -------

# Toggle Group

A set of two-state buttons that can be toggled on or off.

## Installation

To install the Toggle Group component, use the following command:

```bash
pnpm dlx shadcn@latest add toggle-group
```

## Usage

Import the Toggle Group components into your project:

```javascript
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
```

Use the Toggle Group in your component:

```javascript
<ToggleGroup type="single">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
  <ToggleGroupItem value="c">C</ToggleGroupItem>
</ToggleGroup>
```

## Examples

### Default

Example of a default Toggle Group.

### Outline

Example of an outlined Toggle Group.

### Single

Example of a single Toggle Group.

### Small

Example of a small Toggle Group.

### Large

Example of a large Toggle Group.

### Disabled

Example of a disabled Toggle Group.

------- END OF components-toggle-group.md -------





------- START OF components-toggle.md -------

# Toggle Component Documentation

## Overview

The Toggle component is a two-state button that can be either on or off.

## Installation

To install the Toggle component, use one of the following package managers:

```bash
pnpm dlx shadcn@latest add toggle
```

## Usage

To use the Toggle component in your project, import it and include it in your JSX:

```javascript
import { Toggle } from "@/components/ui/toggle"

<Toggle>Toggle</Toggle>
```

## Examples

### Default

A basic example of the Toggle component.

### Outline

An example of the Toggle component with an outline style.

### With Text

An example of the Toggle component with accompanying text.

### Small

A smaller version of the Toggle component.

### Large

A larger version of the Toggle component.

### Disabled

An example of the Toggle component in a disabled state.

## Related Components

- [Toast](/docs/components/toast)
- [Toggle Group](/docs/components/toggle-group)

------- END OF components-toggle.md -------





------- START OF components-tooltip.md -------

# Tooltip Documentation

## Overview
A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.

## Installation
To install the tooltip component, use the following command:

```bash
pnpm dlx shadcn@latest add tooltip
```

## Usage
To use the tooltip component, import the necessary modules:

```javascript
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
```

Here is an example of how to implement the tooltip:

```javascript
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover</TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## Additional Resources
- [Tooltip Documentation](https://www.radix-ui.com/docs/primitives/components/tooltip)
- [API Reference](https://www.radix-ui.com/docs/primitives/components/tooltip#api-reference)

------- END OF components-tooltip.md -------





------- START OF components-typography.md -------

# Typography

## Overview

Typography styles for headings, paragraphs, lists, and more.

## Example Styles

- **Style**: New York

## Code Example

```javascript
@radix-ui/react-alert-dialog
```

## Dialog Components

- **Lead**: A modal dialog that interrupts the user with important content and expects a response.
- **Large**: Are you absolutely sure?
- **Small**: Email address
- **Muted**: Enter your email address.

## The Joke Tax Chronicles

### The King's Plan

The king decided to tax jokes in the kingdom:

- 1st level of puns: 5 gold coins
- 2nd level of jokes: 10 gold coins
- 3rd level of one-liners: 20 gold coins

### Jokester's Revolt

Jokester, the court jester, left jokes around the castle, causing laughter and rebellion.

### The People's Rebellion

The kingdom's people began telling jokes again, leading to happiness and the repeal of the joke tax.

| King's Treasury | People's Happiness |
| --- | --- |
| Empty | Overflowing |
| Modest | Satisfied |
| Full | Ecstatic |

## Moral

Never underestimate the power of a good laugh and be cautious of bad ideas.

## Deployment

Deploy your app with Vercel, trusted by companies like OpenAI and Sonos.

[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)

------- END OF components-typography.md -------





------- START OF components.md -------

# Accordion

A vertically stacked set of interactive headings that each reveal a section of content.

## Installation

To install the Accordion component, use the following command:

```bash
pnpm dlx shadcn@latest add accordion
```

## Usage

To use the Accordion component, import it as follows:

```javascript
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
```

Here is an example of how to implement the Accordion component:

```javascript
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Additional Information

- The Accordion component is accessible and adheres to the WAI-ARIA design pattern.
- It can be styled and animated according to your needs.

------- END OF components.md -------





------- START OF context-menu.md -------

# Context Menu

The Context Menu component displays a menu to the user, such as a set of actions or functions, triggered by a button.

## Installation

To install the Context Menu component, use the following command:

```shell
pnpm dlx shadcn@latest add context-menu
```

## Usage

To use the Context Menu component, import it as follows:

```javascript
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
```

Here is an example of how to implement the Context Menu:

```javascript
<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Billing</ContextMenuItem>
    <ContextMenuItem>Team</ContextMenuItem>
    <ContextMenuItem>Subscription</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

For more information, refer to the [API Reference](https://www.radix-ui.com/docs/primitives/components/context-menu#api-reference).

------- END OF context-menu.md -------





------- START OF data-table.md -------

# Data Table Documentation

## Introduction

This guide provides instructions on building custom data tables using TanStack Table. Each data table or datagrid is unique, with specific sorting, filtering, and data source requirements. Instead of a single data-table component, this guide helps you build your own, starting with a basic `<Table />` component.

## Table of Contents

- [Basic Table](#basic-table)
- [Row Actions](#row-actions)
- [Pagination](#pagination)
- [Sorting](#sorting)
- [Filtering](#filtering)
- [Visibility](#visibility)
- [Row Selection](#row-selection)
- [Reusable Components](#reusable-components)

## Installation

1. Add the `<Table />` component to your project:

```bash
pnpm dlx shadcn@latest add table
```

2. Add `tanstack/react-table` dependency:

```bash
pnpm add @tanstack/react-table
```

## Prerequisites

We will build a table to show recent payments. Here's the data structure:

```typescript
type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const payments: Payment[] = [
  { id: "728ed52f", amount: 100, status: "pending", email: "m@example.com" },
  { id: "489e1d42", amount: 125, status: "processing", email: "example@gmail.com" },
  // ...
]
```

## Project Structure

Create the following file structure:

```
app
└── payments
    ├── columns.tsx
    ├── data-table.tsx
    └── page.tsx
```

- `columns.tsx`: Contains column definitions.
- `data-table.tsx`: Contains the `<DataTable />` component.
- `page.tsx`: Fetches data and renders the table.

## Basic Table

### Column Definitions

Define columns in `app/payments/columns.tsx`:

```typescript
"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  { accessorKey: "status", header: "Status" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "amount", header: "Amount" },
]
```

### `<DataTable />` Component

Create the `<DataTable />` component in `app/payments/data-table.tsx`:

```typescript
"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
```

### Render the Table

Render the table in `app/payments/page.tsx`:

```typescript
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    { id: "728ed52f", amount: 100, status: "pending", email: "m@example.com" },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
```

## Cell Formatting

Format the amount cell to display the dollar amount and align it to the right.

### Update Columns Definition

Update the `header` and `cell` definitions for amount:

```typescript
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
]
```

## Row Actions

Add row actions using a `<Dropdown />` component.

### Update Columns Definition

Add a new `actions` column:

```typescript
"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const columns: ColumnDef<Payment>[] = [
  // ...
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  // ...
]
```

## Pagination

Add pagination to your table.

### Update `<DataTable>`

```typescript
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  // ...
}
```

### Add Pagination Controls

Add pagination controls using the `<Button />` component:

```typescript
import { Button } from "@/components/ui/button"

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          { // .... }
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
```

## Sorting

Make the email column sortable.

### Update `<DataTable>`

```typescript
"use client"

import * as React from "react"
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <div>
      <div className="rounded-md border">
        <Table>{ ... }</Table>
      </div>
    </div>
  )
}
```

### Make Header Cell Sortable

Update the `email` header cell:

```typescript
"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
]
```

## Filtering

Add a search input to filter emails.

### Update `<DataTable>`

```typescript
"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>{ ... }</Table>
      </div>
    </div>
  )
}
```

## Visibility

Add column visibility using `@tanstack/react-table` visibility API.

### Update `<DataTable>`

```typescript
"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  })

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={table.getColumn("email")?.getFilterValue() as string}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>{ ... }</Table>
      </div>
    </div>
  )
}
```

## Row Selection

Add row selection to your table.

### Update Column Definitions

```typescript
"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
]
```

### Update `<DataTable>`

```typescript
export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div>
      <div className="rounded-md border">
        <Table />
      </div>
    </div>
  )
}
```

### Show Selected Rows

Show the number of selected rows:

```typescript
<div className="flex-1 text-sm text-muted-foreground">
  {table.getFilteredSelectedRowModel().rows.length} of{" "}
  {table.getFilteredRowModel().rows.length} row(s) selected.
</div>
```

## Reusable Components

### Column Header

Make any column header sortable and hideable.

```typescript
import { Column } from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ChevronsUpDown, EyeOff } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ArrowDown />
            ) : column.getIsSorted() === "asc" ? (
              <ArrowUp />
            ) : (
              <ChevronsUpDown />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUp className="h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDown className="h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeOff className="h-3.5 w-3.5 text-muted-foreground/70" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
```

### Pagination

Add pagination controls to your table including page size and selection count.

```typescript
import { Table } from "@tanstack/react-table"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  )
}
```

### Column Toggle

A component to toggle column visibility.

```typescript
"use client"

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Table } from "@tanstack/react-table"
import { Settings2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>
}

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
        >
          <Settings2 />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide()
          )
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            )
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

## Conclusion

This documentation provides a comprehensive guide to building custom data tables using TanStack Table, covering installation, project structure, and various features like sorting, filtering, pagination, and more.

------- END OF data-table.md -------





------- START OF date-picker.md -------

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

------- END OF date-picker.md -------





------- START OF dialog.md -------

# Dialog Component Documentation

## Overview
A dialog is a window overlaid on either the primary window or another dialog window, rendering the content underneath inert.

## Installation
To install the Dialog component, use the following command:

```bash
pnpm dlx shadcn@latest add dialog
```

## Usage
Import the necessary components from the Dialog module:

```javascript
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
```

### Example Usage

```javascript
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

## Examples

### Custom Close Button
To activate the `Dialog` component from within a `Context Menu` or `Dropdown Menu`, you must encase the `Context Menu` or `Dropdown Menu` component in the `Dialog` component.

```javascript
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

## Notes
For more information on using the Dialog component with context menus, refer to the [linked issue](https://github.com/radix-ui/primitives/issues/1836).

------- END OF dialog.md -------





------- START OF docs-components-json.md -------

# components.json

The `components.json` file holds configuration for your project. It is used to understand how your project is set up and to generate components customized for your project.

**Note:** The `components.json` file is optional and only required if you're using the CLI to add components to your project. If you're using the copy and paste method, you don't need this file.

## Creating `components.json`

You can create a `components.json` file in your project by running the following command:

```shell
pnpm dlx shadcn@latest init
```

See the [CLI section](/docs/cli) for more information.

## Configuration Options

### $schema

You can see the JSON Schema for `components.json` [here](https://ui.shadcn.com/schema.json).

```json
{
  "$schema": "https://ui.shadcn.com/schema.json"
}
```

### style

The style for your components. **This cannot be changed after initialization.**

```json
{
  "style": "default" | "new-york"
}
```

### tailwind

Configuration to help the CLI understand how Tailwind CSS is set up in your project. See the [installation section](/docs/installation) for how to set up Tailwind CSS.

#### tailwind.config

Path to where your `tailwind.config.js` file is located.

```json
{
  "tailwind": {
    "config": "tailwind.config.js" | "tailwind.config.ts"
  }
}
```

#### tailwind.css

Path to the CSS file that imports Tailwind CSS into your project.

```json
{
  "tailwind": {
    "css": "styles/global.css"
  }
}
```

#### tailwind.baseColor

This is used to generate the default color palette for your components. **This cannot be changed after initialization.**

```json
{
  "tailwind": {
    "baseColor": "gray" | "neutral" | "slate" | "stone" | "zinc"
  }
}
```

#### tailwind.cssVariables

You can choose between using CSS variables or Tailwind CSS utility classes for theming. To use utility classes for theming set `tailwind.cssVariables` to `false`. For CSS variables, set `tailwind.cssVariables` to `true`.

```json
{
  "tailwind": {
    "cssVariables": true | false
  }
}
```

**This cannot be changed after initialization.** To switch between CSS variables and utility classes, you'll have to delete and re-install your components.

#### tailwind.prefix

The prefix to use for your Tailwind CSS utility classes. Components will be added with this prefix.

```json
{
  "tailwind": {
    "prefix": "tw-"
  }
}
```

### rsc

Whether or not to enable support for React Server Components. The CLI automatically adds a `use client` directive to client components when set to `true`.

```json
{
  "rsc": true | false
}
```

### tsx

Choose between TypeScript or JavaScript components. Setting this option to `false` allows components to be added as JavaScript with the `.jsx` file extension.

```json
{
  "tsx": true | false
}
```

### aliases

The CLI uses these values and the `paths` config from your `tsconfig.json` or `jsconfig.json` file to place generated components in the correct location. Path aliases have to be set up in your `tsconfig.json` or `jsconfig.json` file.

**Important:** If you're using the `src` directory, make sure it is included under `paths` in your `tsconfig.json` or `jsconfig.json` file.

#### aliases.utils

Import alias for your utility functions.

```json
{
  "aliases": {
    "utils": "@/lib/utils"
  }
}
```

#### aliases.components

Import alias for your components.

```json
{
  "aliases": {
    "components": "@/components"
  }
}
```

#### aliases.ui

Import alias for `ui` components. The CLI will use the `aliases.ui` value to determine where to place your `ui` components. Use this config if you want to customize the installation directory for your `ui` components.

```json
{
  "aliases": {
    "ui": "@/app/ui"
  }
}
```

#### aliases.lib

Import alias for `lib` functions such as `format-date` or `generate-id`.

```json
{
  "aliases": {
    "lib": "@/lib"
  }
}
```

#### aliases.hooks

Import alias for `hooks` such as `use-media-query` or `use-toast`.

```json
{
  "aliases": {
    "hooks": "@/hooks"
  }
}
```

For more information, see the [theming docs](/docs/theming).

------- END OF docs-components-json.md -------





------- START OF drawer.md -------

# Drawer Component for React

## About

The Drawer component is built on top of [Vaul](https://github.com/emilkowalski/vaul) by [emilkowalski_](https://twitter.com/emilkowalski_).

## Installation

To install the Drawer component, use the following command:

```bash
pnpm dlx shadcn@latest add drawer
```

## Usage

To use the Drawer component, import it as follows:

```javascript
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

Here is an example of how to implement the Drawer component:

```jsx
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

## Examples

### Responsive Dialog

You can combine the `Dialog` and `Drawer` components to create a responsive dialog. This setup renders a `Dialog` component on desktop and a `Drawer` on mobile.

------- END OF drawer.md -------





------- START OF dropdown-menu.md -------

# Dropdown Menu Documentation

## Overview
The Dropdown Menu component displays a menu to the user, such as a set of actions or functions, triggered by a button.

## Installation
To install the Dropdown Menu component, use the following command:

```bash
pnpm dlx shadcn@latest add dropdown-menu
```

## Usage
Import the necessary components from the Dropdown Menu module:

```javascript
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
```

Example usage of the Dropdown Menu component:

```jsx
<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## Examples

### Checkboxes

### Radio Group

## Changelog

### 2024-10-16: Classes for Icons
Added `gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0` to the `DropdownMenuItem` to automatically style icons inside the dropdown menu item. Update your `dropdown-menu.tsx` file as follows:

```javascript
const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative ... gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
```

### 2024-10-25: Classes for `<DropdownMenuSubTrigger />`
Added `gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0` to the `<DropdownMenuSubTrigger />` to automatically style icons inside. Update your `dropdown-menu.tsx` file as follows:

```javascript
<DropdownMenuPrimitive.SubTrigger
  ref={ref}
  className={cn(
    "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    inset && "pl-8",
    className
  )}
  {...props}
>
  {/* ... */}
</DropdownMenuPrimitive.SubTrigger>
```


------- END OF dropdown-menu.md -------





------- START OF form.md -------

# React Hook Form

## Overview

Building forms with React Hook Form and Zod.

Forms are a common yet complex part of web applications. Well-designed HTML forms should be:

- Well-structured and semantically correct.
- Easy to use and navigate (keyboard accessible).
- Accessible with ARIA attributes and proper labels.
- Supportive of client and server-side validation.
- Well-styled and consistent with the rest of the application.

This guide covers building forms using `react-hook-form` and `zod`, utilizing a `<FormField>` component to create accessible forms with Radix UI components.

## Features

The `<Form />` component is a wrapper around the `react-hook-form` library, offering:

- Composable components for building forms.
- A `<FormField />` component for controlled form fields.
- Form validation using `zod`.
- Accessibility and error message handling.
- Unique ID generation with `React.useId()`.
- Correct `aria` attributes based on form field states.
- Compatibility with all Radix UI components.
- Full control over markup and styling.

## Anatomy

```jsx
<Form>
  <FormField
    control={...}
    name="..."
    render={() => (
      <FormItem>
        <FormLabel />
        <FormControl>
          { /* Your form field */ }
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
</Form>
```

## Example

```jsx
const form = useForm()

<FormField
  control={form.control}
  name="username"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Username</FormLabel>
      <FormControl>
        <Input placeholder="shadcn" {...field} />
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
```

## Installation

### Command

```bash
pnpm dlx shadcn@latest add form
```

## Usage

### Create a Form Schema

Define your form's shape using a Zod schema. More details can be found in the [Zod documentation](https://zod.dev).

```jsx
"use client"

import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})
```

### Define a Form

Use the `useForm` hook from `react-hook-form` to create a form.

```jsx
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
}
```

### Build Your Form

Use the `<Form />` components to construct your form.

```jsx
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

### Done

You now have a fully accessible form with type-safe client-side validation.

## Examples

For more examples on using the `<Form />` component with other components, see:

- [Checkbox](/docs/components/checkbox#form)
- [Date Picker](/docs/components/date-picker#form)
- [Input](/docs/components/input#form)
- [Radio Group](/docs/components/radio-group#form)
- [Select](/docs/components/select#form)
- [Switch](/docs/components/switch#form)
- [Textarea](/docs/components/textarea#form)
- [Combobox](/docs/components/combobox#form)

------- END OF form.md -------





------- START OF hover-card.md -------

# Hover Card

The Hover Card component allows users to preview content available behind a link. It is designed for sighted users to enhance their browsing experience.

## Installation

To install the Hover Card component, use the following command:

```bash
pnpm dlx shadcn@latest add hover-card
```

## Usage

To use the Hover Card component, import it into your project:

```javascript
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
```

Here is an example of how to implement the Hover Card:

```jsx
<HoverCard>
  <HoverCardTrigger>Hover</HoverCardTrigger>
  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>
```

For more information, refer to the [API Reference](https://www.radix-ui.com/docs/primitives/components/hover-card#api-reference).

------- END OF hover-card.md -------





------- START OF input-otp.md -------

# Input OTP Documentation

## Overview

Input OTP is an accessible one-time password component with copy-paste functionality. It is built on top of [input-otp](https://github.com/guilhermerodz/input-otp) by [@guilherme_rodz](https://twitter.com/guilherme_rodz).

## Installation

### Using CLI

Run the following command to add Input OTP:

```bash
pnpm dlx shadcn@latest add input-otp
```

### Update Tailwind Configuration

Add the following animations to your `tailwind.config.js` file:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
}
```

## Usage

Import the necessary components:

```javascript
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
```

Example usage:

```jsx
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

## Examples

### Pattern

Use the `pattern` prop to define a custom pattern for the OTP input:

```javascript
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

<InputOTP
  maxLength={6}
  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    {/* ... */}
  </InputOTPGroup>
</InputOTP>
```

### Separator

Add a separator between input groups using `<InputOTPSeparator />`:

```jsx
<InputOTP maxLength={4}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>
```

### Controlled

Control the input value using `value` and `onChange` props.

## Changelog

### 2024-03-19 Composition

Updates have been made to replace the render props pattern with composition. Update your code if you prefer the composition pattern. The `render` prop is still supported.

Update to the latest version of `input-otp`:

```bash
pnpm add input-otp@latest
```

Update `input-otp.tsx`:

```diff
- import { OTPInput, SlotProps } from "input-otp"
+ import { OTPInput, OTPInputContext } from "input-otp"

 const InputOTPSlot = React.forwardRef<
   React.ElementRef<"div">,
-   SlotProps & React.ComponentPropsWithoutRef<"div">
+   React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
+   const inputOTPContext = React.useContext(OTPInputContext)
+   const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
```

Replace the `render` prop in your code:

```jsx
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

### 2024-03-19 Disabled

To add a disabled state to the input, update `<InputOTP />` as follows:

```javascript
const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"
```


------- END OF input-otp.md -------





------- START OF input.md -------

# Input Component Documentation

## Overview
The Input component displays a form input field or a component that resembles an input field.

## Installation
To install the Input component, use the following command:

```bash
pnpm dlx shadcn@latest add input
```

## Usage
To use the Input component, import it into your project as follows:

```javascript
import { Input } from "@/components/ui/input"
```

Then, you can use the component in your JSX:

```jsx
<Input />
```

## Examples

### Default
A basic example of the Input component.

### File
An example of the Input component used for file uploads.

### Disabled
An example of a disabled Input component.

### With Label
An example of the Input component with an associated label.

### With Button
An example of the Input component used alongside a button, such as a subscribe button.

### Form
An example of the Input component used within a form, including a username field and a submit button.

------- END OF input.md -------





------- START OF label.md -------

# Label Component Documentation

## Overview

The Label component renders an accessible label associated with controls. It is part of the Radix UI primitives.

## Installation

To install the Label component, use the following command:

```bash
pnpm dlx shadcn@latest add label
```

## Usage

To use the Label component, import it into your project and use it as shown in the example below:

```javascript
import { Label } from "@/components/ui/label"

<Label htmlFor="email">Your email address</Label>
```

## Additional Resources

- [Radix UI Label Documentation](https://www.radix-ui.com/docs/primitives/components/label)
- [API Reference](https://www.radix-ui.com/docs/primitives/components/label#api-reference)

------- END OF label.md -------





------- START OF menubar.md -------

# Menubar

A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.

## Installation

To install the Menubar component, use the following command:

```shell
pnpm dlx shadcn@latest add menubar
```

## Usage

To use the Menubar component, import it as follows:

```javascript
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
```

Here is an example of how to implement the Menubar:

```jsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

For more information, refer to the [API Reference](https://www.radix-ui.com/docs/primitives/components/menubar#api-reference).

------- END OF menubar.md -------





------- START OF navigation-menu.md -------

# Navigation Menu Documentation

## Installation

To install the Navigation Menu component, use the following command:

```bash
pnpm dlx shadcn@latest add navigation-menu
```

## Usage

Import the necessary components from the Navigation Menu module:

```javascript
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
```

Example of using the Navigation Menu component:

```jsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

## Examples

### Link Component

When using the Next.js `<Link />` component, apply the `navigationMenuTriggerStyle()` for correct styling:

```javascript
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
```

Example usage with Next.js `<Link />`:

```jsx
<NavigationMenuItem>
  <Link href="/docs" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Documentation
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>
```

For more information on handling client-side routing, see the [Radix UI documentation](https://www.radix-ui.com/docs/primitives/components/navigation-menu#with-client-side-routing).

------- END OF navigation-menu.md -------





------- START OF pagination.md -------

# Pagination

Pagination with page navigation, next and previous links.

## Installation

To install the pagination component, use the following command:

```bash
pnpm dlx shadcn@latest add pagination
```

## Usage

Import the necessary components for pagination:

```javascript
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
```

Example usage of the pagination component:

```jsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

### Next.js Integration

By default, the `<PaginationLink />` component renders an `<a />` tag. To use the Next.js `<Link />` component, update `pagination.tsx` as follows:

```diff
+ import Link from "next/link"

- type PaginationLinkProps = ... & React.ComponentProps<"a">
+ type PaginationLinkProps = ... & React.ComponentProps<typeof Link>

const PaginationLink = ({...props }: ) => (
  <PaginationItem>
-   <a>
+   <Link>
      // ...
-   </a>
+   </Link>
  </PaginationItem>
)
```

**Note:** We are updating the CLI to automate this process for you.

------- END OF pagination.md -------





------- START OF popover.md -------

# Popover

Displays rich content in a portal, triggered by a button.

## Installation

To install the Popover component, use the following command:

```bash
pnpm dlx shadcn@latest add popover
```

## Usage

Import the Popover components into your project:

```javascript
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
```

Use the Popover component in your JSX:

```jsx
<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>
```

This setup allows you to display rich content in a popover, triggered by a button.

------- END OF popover.md -------





------- START OF progress.md -------

# Progress Component Documentation

## Overview
The Progress component displays an indicator showing the completion progress of a task, typically displayed as a progress bar.

## Installation
To install the Progress component, use the following command:

```shell
pnpm dlx shadcn@latest add progress
```

## Usage
To use the Progress component in your application, import it and include it in your JSX as shown below:

```javascript
import { Progress } from "@/components/ui/progress";

<Progress value={33} />
```

## Additional Resources
- [API Reference](https://www.radix-ui.com/docs/primitives/components/progress#api-reference)

------- END OF progress.md -------





------- START OF radio-group.md -------

# Radio Group

A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.

## Installation

To install the Radio Group component, use the following command:

```bash
pnpm dlx shadcn@latest add radio-group
```

## Usage

To use the Radio Group component, import it into your project:

```javascript
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
```

Here is an example of how to implement the Radio Group:

```javascript
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

## Examples

### Form Example

A form using the Radio Group component might look like this:

```html
<form>
  <RadioGroup defaultValue="all-messages">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="all-messages" id="all-messages" />
      <Label htmlFor="all-messages">All new messages</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="direct-messages" id="direct-messages" />
      <Label htmlFor="direct-messages">Direct messages and mentions</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="nothing" id="nothing" />
      <Label htmlFor="nothing">Nothing</Label>
    </div>
  </RadioGroup>
  <button type="submit">Submit</button>
</form>
```

For more information, refer to the [API Reference](https://www.radix-ui.com/docs/primitives/components/radio-group#api-reference).

------- END OF radio-group.md -------





------- START OF resizable.md -------

# Resizable

Accessible resizable panel groups and layouts with keyboard support.

## About

The `Resizable` component is built on top of [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels) by [bvaughn](https://github.com/bvaughn).

## Installation

To install the `Resizable` component, use the following command:

```bash
pnpm dlx shadcn@latest add resizable
```

## Usage

Import the necessary components from the `resizable` package:

```javascript
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
```

Example of a horizontal resizable panel group:

```javascript
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel>One</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Two</ResizablePanel>
</ResizablePanelGroup>
```

## Examples

### Vertical

Use the `direction` prop to set the direction of the resizable panels to vertical:

```javascript
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

### Handle

You can set or hide the handle by using the `withHandle` prop on the `ResizableHandle` component:

```javascript
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

------- END OF resizable.md -------





------- START OF scroll-area.md -------

# Scroll-area

Augments native scroll functionality for custom, cross-browser styling.

## Installation

To install the Scroll-area component, use the following command:

```bash
pnpm dlx shadcn@latest add scroll-area
```

## Usage

Import the ScrollArea component into your project:

```javascript
import { ScrollArea } from "@/components/ui/scroll-area"
```

Use the ScrollArea component in your JSX:

```jsx
<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  Jokester began sneaking into the castle in the middle of the night and leaving
  jokes all over the place: under the king's pillow, in his soup, even in the
  royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
  then, one day, the people of the kingdom discovered that the jokes left by
  Jokester were so funny that they couldn't help but laugh. And once they
  started laughing, they couldn't stop.
</ScrollArea>
```

## Examples

### Horizontal Scrolling

Include images or other content to demonstrate horizontal scrolling capabilities.

---

This documentation provides essential information on installing and using the Scroll-area component, along with a basic example of its implementation.

------- END OF scroll-area.md -------





------- START OF select.md -------

# Select Component Documentation

The Select component displays a list of options for the user to pick from, triggered by a button.

## Installation

To install the Select component, use the following command:

```bash
pnpm dlx shadcn@latest add select
```

## Usage

To use the Select component, import it as follows:

```javascript
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
```

Here is an example of how to implement the Select component:

```javascript
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

## Examples

### Scrollable

Example of a scrollable Select component for selecting a timezone.

### Form

Example of a Select component used in a form to select a verified email address. You can manage email addresses in your email settings.

---

For more information, refer to the [API Reference](https://www.radix-ui.com/docs/primitives/components/select#api-reference).

------- END OF select.md -------





------- START OF separator.md -------

# Separator Component Documentation

## Overview
The Separator component is used to visually or semantically separate content within a UI.

## Installation
To install the Separator component, use the following command:

```bash
pnpm dlx shadcn@latest add separator
```

## Usage
To use the Separator component in your project, import it and include it in your JSX as shown below:

```javascript
import { Separator } from "@/components/ui/separator";

<Separator />
```

## Additional Resources
- [Radix Primitives Documentation](https://www.radix-ui.com/docs/primitives/components/separator)
- [API Reference](https://www.radix-ui.com/docs/primitives/components/separator#api-reference)

------- END OF separator.md -------





------- START OF sheet.md -------

# Sheet Component Documentation

The Sheet component extends the Dialog component to display content that complements the main content of the screen.

## Installation

To install the Sheet component, use one of the following package managers:

```bash
pnpm dlx shadcn@latest add sheet
```

## Usage

Import the necessary components from the Sheet module:

```javascript
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
```

Example usage of the Sheet component:

```javascript
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

## Examples

### Side

Use the `side` property on `<SheetContent />` to specify the edge of the screen where the component will appear. Possible values are `top`, `right`, `bottom`, or `left`.

### Size

Adjust the size of the sheet using CSS classes:

```javascript
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent className="w-[400px] sm:w-[540px]">
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

For more information, refer to the [API Reference](https://www.radix-ui.com/docs/primitives/components/dialog#api-reference).

------- END OF sheet.md -------





------- START OF sidebar.md -------

# Sidebar Component Documentation

## Overview

The Sidebar is a composable, themeable, and customizable component designed to be central to any application. It is built to handle various configurations and extracted into `sidebar.tsx` for ease of use.

## Installation

### Install `sidebar.tsx`

Run the following command:

```bash
pnpm dlx shadcn@latest add sidebar
```

### Add Colors to CSS

If the installation does not automatically add colors, include the following in your CSS file:

```css
@layer base {
  :root {
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}
```

## Structure

A `Sidebar` component consists of:

- `SidebarProvider`: Manages collapsible state.
- `Sidebar`: The main container.
- `SidebarHeader` and `SidebarFooter`: Sticky elements at the top and bottom.
- `SidebarContent`: Scrollable content area.
- `SidebarGroup`: Sections within `SidebarContent`.
- `SidebarTrigger`: Toggles the sidebar.

## Usage

### Basic Layout

`app/layout.tsx`

```tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
```

### Sidebar Component

`components/app-sidebar.tsx`

```tsx
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
```

## Creating Your First Sidebar

### Add `SidebarProvider` and `SidebarTrigger`

`app/layout.tsx`

```tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
```

### Create Sidebar Component

`components/app-sidebar.tsx`

```tsx
import { Sidebar, SidebarContent } from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent />
    </Sidebar>
  )
}
```

### Add `SidebarMenu`

`components/app-sidebar.tsx`

```tsx
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
```

## Components

### SidebarProvider

Wrap your application in `SidebarProvider` to provide context to the `Sidebar` component.

#### Props

| Name | Type | Description |
| --- | --- | --- |
| `defaultOpen` | `boolean` | Default open state of the sidebar. |
| `open` | `boolean` | Open state of the sidebar (controlled). |
| `onOpenChange` | `(open: boolean) => void` | Sets open state of the sidebar (controlled). |

### Sidebar

The main `Sidebar` component renders a collapsible sidebar.

#### Props

| Property | Type | Description |
| --- | --- | --- |
| `side` | `left` or `right` | The side of the sidebar. |
| `variant` | `sidebar`, `floating`, or `inset` | The variant of the sidebar. |
| `collapsible` | `offcanvas`, `icon`, or `none` | Collapsible state of the sidebar. |

### useSidebar Hook

The `useSidebar` hook is used to control the sidebar.

```tsx
import { useSidebar } from "@/components/ui/sidebar"

export function AppSidebar() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar()
}
```

### SidebarHeader and SidebarFooter

Use `SidebarHeader` and `SidebarFooter` to add sticky elements to the sidebar.

### SidebarContent

Wrap the content of the sidebar with `SidebarContent`. It is scrollable.

### SidebarGroup

Create sections within the sidebar using `SidebarGroup`.

### SidebarMenu

Build a menu within a `SidebarGroup` using `SidebarMenu`, `SidebarMenuItem`, and `SidebarMenuButton`.

### SidebarTrigger

Render a button to toggle the sidebar using `SidebarTrigger`. Must be used within `SidebarProvider`.

### Theming

Use CSS variables to theme the sidebar:

```css
@layer base {
  :root {
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 0 0% 98%;
    --sidebar-primary-foreground: 240 5.9% 10%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}
```

## Changelog

### 2024-10-30

- Improved `setOpen` callback logic in `<SidebarProvider>`.

### 2024-10-21

- Moved `text-sidebar-foreground` from `<SidebarProvider>` to `<Sidebar>` component.

### 2024-10-20

- Fixed typo in `useSidebar` hook.

------- END OF sidebar.md -------





------- START OF skeleton.md -------

# Skeleton Component Documentation

## Overview
The Skeleton component is used to display a placeholder while content is loading.

## Installation
To install the Skeleton component, use the following command:

```bash
pnpm dlx shadcn@latest add skeleton
```

## Usage
To use the Skeleton component in your project, import it as follows:

```javascript
import { Skeleton } from "@/components/ui/skeleton"
```

You can then use the Skeleton component in your JSX:

```jsx
<Skeleton className="w-[100px] h-[20px] rounded-full" />
```

## Examples

### Card Example
This section would typically include examples of how to use the Skeleton component within a card layout.

---

This documentation provides a basic guide to using the Skeleton component in your application. For more detailed examples and advanced usage, refer to the full documentation on the official site.

------- END OF skeleton.md -------





------- START OF slider.md -------

# Slider Component Documentation

## Overview
The Slider component is an input element that allows users to select a value from a specified range.

## Installation
To install the Slider component, use the following command:

```bash
pnpm dlx shadcn@latest add slider
```

## Usage
To use the Slider component in your project, import it and include it in your JSX as shown below:

```javascript
import { Slider } from "@/components/ui/slider";

<Slider defaultValue={[33]} max={100} step={1} />
```

## Additional Resources
- [Slider Documentation](https://www.radix-ui.com/docs/primitives/components/slider)
- [API Reference](https://www.radix-ui.com/docs/primitives/components/slider#api-reference)

------- END OF slider.md -------





------- START OF sonner.md -------

# Sonner

An opinionated toast component for React.

## About

Sonner is built and maintained by [emilkowalski\_](https://twitter.com/emilkowalski_).

## Installation

### Run the following command:

```bash
pnpm dlx shadcn@latest add sonner
```

### Add the Toaster component

In `app/layout.tsx`:

```javascript
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
```

## Usage

To use the toast functionality:

```javascript
import { toast } from "sonner"

toast("Event has been created.")
```


------- END OF sonner.md -------





------- START OF switch.md -------

# Switch Component Documentation

## Overview
The Switch component is a control that allows the user to toggle between checked and not checked states.

## Installation
To install the Switch component, use the following command:

```bash
pnpm dlx shadcn@latest add switch
```

## Usage
To use the Switch component, import it into your project:

```javascript
import { Switch } from "@/components/ui/switch"
```

Then, include it in your JSX:

```jsx
<Switch />
```

## Examples

### Form Example

#### Email Notifications
- **Marketing emails**: Receive emails about new products, features, and more.
- **Security emails**: Receive emails about your account security.

## Additional Resources
- [Switch Documentation](https://www.radix-ui.com/docs/primitives/components/switch)
- [API Reference](https://www.radix-ui.com/docs/primitives/components/switch#api-reference)

------- END OF switch.md -------





------- START OF table.md -------

# Table Component Documentation

## Overview
A responsive table component designed to display a list of recent invoices.

### Example Table

| Invoice | Status | Method | Amount |
| --- | --- | --- | --- |
| INV001 | Paid | Credit Card | $250.00 |
| INV002 | Pending | PayPal | $150.00 |
| INV003 | Unpaid | Bank Transfer | $350.00 |
| INV004 | Paid | Credit Card | $450.00 |
| INV005 | Paid | PayPal | $550.00 |
| INV006 | Pending | Bank Transfer | $200.00 |
| INV007 | Unpaid | Credit Card | $300.00 |
| **Total** | | | **$2,500.00** |

## Installation
To install the table component, use the following command:

```bash
pnpm dlx shadcn@latest add table
```

## Usage
Import the necessary components from the table module:

```javascript
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
```

### Example Usage

```javascript
<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Data Table
The `<Table />` component can be used to build more complex data tables. Combine it with [@tanstack/react-table](https://tanstack.com/table/v8) to create tables with sorting, filtering, and pagination capabilities.

For more information, see the [Data Table documentation](/docs/components/data-table) and the [Tasks demo](/examples/tasks).

------- END OF table.md -------





------- START OF tabs.md -------

# Tabs

Tabs are a set of layered sections of content, known as tab panels, that are displayed one at a time.

## Installation

To install the Tabs component, use the following command:

```bash
pnpm dlx shadcn@latest add tabs
```

## Usage

Import the necessary components from your UI library:

```javascript
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
```

Here is an example of how to use the Tabs component:

```javascript
<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
```

This example creates a tab interface with two tabs: Account and Password. Each tab displays different content when selected.

------- END OF tabs.md -------





------- START OF textarea.md -------

# Textarea Component Documentation

## Installation

To install the Textarea component, use the following command:

```bash
pnpm dlx shadcn@latest add textarea
```

## Usage

To use the Textarea component in your project, import it as follows:

```javascript
import { Textarea } from "@/components/ui/textarea"
```

Then, you can include it in your JSX:

```jsx
<Textarea />
```

## Examples

### Default

A basic example of the Textarea component:

```jsx
<Textarea />
```

### Disabled

An example of a disabled Textarea:

```jsx
<Textarea disabled />
```

### With Label

Example of a Textarea with a label:

```jsx
<label htmlFor="message">Message</label>
<Textarea id="message" />
```

### With Text

Textarea pre-filled with text:

```jsx
<Textarea defaultValue="Your message will be copied to the support team." />
```

### With Button

Textarea with a submit button:

```jsx
<Textarea />
<button type="submit">Send message</button>
```

### Form

Using Textarea within a form:

```jsx
<form>
  <Textarea placeholder="Bio" />
  <button type="submit">Submit</button>
</form>
```

## Additional Resources

- [Tabs Component Documentation](/docs/components/tabs)
- [Toast Component Documentation](/docs/components/toast)

------- END OF textarea.md -------





------- START OF toast.md -------

# Toast Documentation

## Overview
A toast is a succinct message that is displayed temporarily to inform users of a process or action.

## Installation

### Run the following command:
```bash
pnpm dlx shadcn@latest add toast
```

### Add the Toaster component
In your `app/layout.tsx` file, add the following:
```javascript
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
```

## Usage

The `useToast` hook returns a `toast` function that you can use to display a toast.

Import the hook:
```javascript
import { useToast } from "@/hooks/use-toast"
```

Example usage:
```javascript
export const ToastDemo = () => {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
```

To display multiple toasts at the same time, update the `TOAST_LIMIT` in `use-toast.tsx`.

## Examples

### Simple
A basic toast example.

### With Title
A toast with a title.

### With Action
A toast that includes an action.

### Destructive
Use `toast({ variant: "destructive" })` to display a destructive toast.

------- END OF toast.md -------





------- START OF toggle-group.md -------

# Toggle Group

A set of two-state buttons that can be toggled on or off.

## Installation

To install the Toggle Group component, use the following command:

```bash
pnpm dlx shadcn@latest add toggle-group
```

## Usage

Import the Toggle Group components into your project:

```javascript
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
```

Use the Toggle Group in your component:

```jsx
<ToggleGroup type="single">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
  <ToggleGroupItem value="c">C</ToggleGroupItem>
</ToggleGroup>
```

## Examples

### Default

Example of a default Toggle Group.

### Outline

Example of an outlined Toggle Group.

### Single

Example of a single selection Toggle Group.

### Small

Example of a small-sized Toggle Group.

### Large

Example of a large-sized Toggle Group.

### Disabled

Example of a disabled Toggle Group.

------- END OF toggle-group.md -------





------- START OF toggle.md -------

# Toggle Component Documentation

## Overview

The Toggle component is a two-state button that can be either on or off.

## Installation

To install the Toggle component, use the following command:

```bash
pnpm dlx shadcn@latest add toggle
```

## Usage

To use the Toggle component, import it into your project:

```javascript
import { Toggle } from "@/components/ui/toggle"
```

Then, you can use it in your JSX:

```jsx
<Toggle>Toggle</Toggle>
```

## Examples

### Default

A basic example of the Toggle component.

### Outline

An example of the Toggle component with an outline style.

### With Text

An example of the Toggle component with accompanying text.

### Small

A smaller version of the Toggle component.

### Large

A larger version of the Toggle component.

### Disabled

An example of the Toggle component in a disabled state.

## Related Components

- [Toast](/docs/components/toast)
- [Toggle Group](/docs/components/toggle-group)

## Additional Resources

- [Radix UI Toggle Documentation](https://www.radix-ui.com/docs/primitives/components/toggle)
- [API Reference](https://www.radix-ui.com/docs/primitives/components/toggle#api-reference)

------- END OF toggle.md -------





------- START OF tooltip.md -------

# Tooltip Documentation

## Overview
A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.

## Installation
To install the tooltip component, use the following command:

```bash
pnpm dlx shadcn@latest add tooltip
```

## Usage
To use the tooltip component, import the necessary modules:

```javascript
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
```

Here is an example of how to implement the tooltip:

```javascript
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover</TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## Additional Resources
- [Tooltip Documentation](https://www.radix-ui.com/docs/primitives/components/tooltip)
- [API Reference](https://www.radix-ui.com/docs/primitives/components/tooltip#api-reference)

------- END OF tooltip.md -------





------- START OF typography.md -------

# Typography Documentation

## Overview
This documentation provides styles for headings, paragraphs, lists, and other typographic elements.

## Styles
- **Style:** New York

## Example: The Joke Tax Chronicles

### The King's Plan
The king decided to tax jokes in the kingdom:

- **1st level of puns:** 5 gold coins
- **2nd level of jokes:** 10 gold coins
- **3rd level of one-liners:** 20 gold coins

### Jokester's Revolt
A court jester named Jokester left jokes around the castle, leading to a rebellion of laughter.

### The People's Rebellion
The kingdom's people began telling jokes again, leading to increased happiness.

| King's Treasury | People's Happiness |
| --- | --- |
| Empty | Overflowing |
| Modest | Satisfied |
| Full | Ecstatic |

The king repealed the joke tax, and the kingdom thrived.

## Code Example
```javascript
@radix-ui/react-alert-dialog
```

## Additional Elements
- **Lead:** A modal dialog that interrupts the user with important content and expects a response.
- **Large:** Are you absolutely sure?
- **Small:** Email address
- **Muted:** Enter your email address.

## Deployment
Deploy your app with Vercel for scalable infrastructure.

[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)

------- END OF typography.md -------



