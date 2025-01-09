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

Use the Alert component in your JSX:

```jsx
<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>
```

## Examples

### Default Alert
The default Alert component can be used to notify users of general information.

### Destructive Alert
The Destructive Alert is used to inform users of critical issues, such as session expiration.

```jsx
<Alert>
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>
```

## Additional Resources
- [Accordion Component](/docs/components/accordion)
- [Alert Dialog Component](/docs/components/alert-dialog)