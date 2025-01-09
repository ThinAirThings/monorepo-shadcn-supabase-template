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