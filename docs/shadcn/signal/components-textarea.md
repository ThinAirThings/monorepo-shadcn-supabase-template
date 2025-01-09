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