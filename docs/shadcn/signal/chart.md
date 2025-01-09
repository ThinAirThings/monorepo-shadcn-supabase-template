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