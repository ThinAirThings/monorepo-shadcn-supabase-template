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