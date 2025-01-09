# Sheet Component Documentation

The Sheet component extends the Dialog component to display content that complements the main content of the screen.

## Installation

To install the Sheet component, use one of the following package managers:

```bash
pnpm dlx shadcn@latest add sheet
```

## Usage

Import the necessary components from the Sheet module:

```javascript
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
```

Example usage of the Sheet component:

```javascript
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

## Examples

### Side

Use the `side` property on `<SheetContent />` to specify the edge of the screen where the component will appear. Possible values are `top`, `right`, `bottom`, or `left`.

### Size

Adjust the size of the sheet using CSS classes:

```javascript
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent className="w-[400px] sm:w-[540px]">
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

For more information, refer to the [API Reference](https://www.radix-ui.com/docs/primitives/components/dialog#api-reference).