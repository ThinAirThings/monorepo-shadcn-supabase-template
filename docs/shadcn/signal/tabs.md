# Tabs

Tabs are a set of layered sections of content, known as tab panels, that are displayed one at a time.

## Installation

To install the Tabs component, use the following command:

```bash
pnpm dlx shadcn@latest add tabs
```

## Usage

Import the necessary components from your UI library:

```javascript
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
```

Here is an example of how to use the Tabs component:

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

This example creates a tab interface with two tabs: Account and Password. Each tab displays different content when selected.