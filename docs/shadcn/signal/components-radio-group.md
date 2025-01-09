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