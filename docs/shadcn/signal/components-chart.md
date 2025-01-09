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