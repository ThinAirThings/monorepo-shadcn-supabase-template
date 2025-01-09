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