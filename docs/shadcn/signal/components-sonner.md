# Sonner

An opinionated toast component for React.

## About

Sonner is built and maintained by [emilkowalski\_](https://twitter.com/emilkowalski_).

## Installation

### Run the following command:

```bash
pnpm dlx shadcn@latest add sonner
```

### Add the Toaster component

In `app/layout.tsx`:

```javascript
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
```

## Usage

To use the toast functionality:

```javascript
import { toast } from "sonner"

toast("Event has been created.")
```