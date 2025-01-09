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