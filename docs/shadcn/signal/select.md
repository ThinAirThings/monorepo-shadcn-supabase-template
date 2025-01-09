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