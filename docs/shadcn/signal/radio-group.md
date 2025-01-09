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