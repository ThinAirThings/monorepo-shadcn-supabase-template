# Tabs Documentation

Tabs are a set of layered sections of content, known as tab panels, that are displayed one at a time.

## Installation

To install the Tabs component, use one of the following package managers:

### Using pnpm
```bash
pnpm dlx shadcn@latest add tabs
```

## Usage

To use the Tabs component, import the necessary modules:

```javascript
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
```

Here is an example of how to implement the Tabs component:

```javascript
<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
```

## Additional Resources

- [API Reference](https://www.radix-ui.com/docs/primitives/components/tabs#api-reference)
- [Table Component](/docs/components/table)
- [Textarea Component](/docs/components/textarea)