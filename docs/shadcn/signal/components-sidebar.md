# Sidebar Component Documentation

## Overview

The Sidebar component is a composable, themeable, and customizable UI element that can collapse to icons. It is central to many applications and often contains multiple interactive parts.

## Installation

### CLI Installation

Run the following command to install `sidebar.tsx`:

```bash
pnpm dlx shadcn@latest add sidebar
```

### CSS Configuration

Add the following colors to your CSS file if not automatically installed:

```css
@layer base {
  :root {
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}
```

## Structure

A `Sidebar` component is composed of the following parts:

- `SidebarProvider`: Handles collapsible state.
- `Sidebar`: The sidebar container.
- `SidebarHeader` and `SidebarFooter`: Sticky at the top and bottom of the sidebar.
- `SidebarContent`: Scrollable content.
- `SidebarGroup`: Section within the `SidebarContent`.
- `SidebarTrigger`: Trigger for the `Sidebar`.

## Usage

### Basic Layout

`app/layout.tsx`

```jsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
```

### Sidebar Component

`components/app-sidebar.tsx`

```jsx
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
```

## Creating Your First Sidebar

### Basic Sidebar Setup

Add a `SidebarProvider` and `SidebarTrigger` at the root of your application.

`app/layout.tsx`

```jsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
```

### Sidebar with Menu

Add a `SidebarMenu` to the sidebar.

`components/app-sidebar.tsx`

```jsx
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
```

## Components

### SidebarProvider

The `SidebarProvider` component provides the sidebar context to the `Sidebar` component. Always wrap your application in a `SidebarProvider`.

#### Props

| Name | Type | Description |
| --- | --- | --- |
| `defaultOpen` | `boolean` | Default open state of the sidebar. |
| `open` | `boolean` | Open state of the sidebar (controlled). |
| `onOpenChange` | `(open: boolean) => void` | Sets open state of the sidebar (controlled). |

### Sidebar

#### Props

| Property | Type | Description |
| --- | --- | --- |
| `side` | `left` or `right` | The side of the sidebar. |
| `variant` | `sidebar`, `floating`, or `inset` | The variant of the sidebar. |
| `collapsible` | `offcanvas`, `icon`, or `none` | Collapsible state of the sidebar. |

### useSidebar

The `useSidebar` hook is used to control the sidebar.

```jsx
import { useSidebar } from "@/components/ui/sidebar"

export function AppSidebar() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar()
}
```

### SidebarHeader

Use the `SidebarHeader` component to add a sticky header to the sidebar.

### SidebarFooter

Use the `SidebarFooter` component to add a sticky footer to the sidebar.

### SidebarContent

The `SidebarContent` component is used to wrap the content of the sidebar. It is scrollable.

### SidebarGroup

Use the `SidebarGroup` component to create a section within the sidebar.

### SidebarMenu

The `SidebarMenu` component is used for building a menu within a `SidebarGroup`.

### SidebarMenuButton

The `SidebarMenuButton` component is used to render a menu button within a `SidebarMenuItem`.

### SidebarMenuAction

The `SidebarMenuAction` component is used to render a menu action within a `SidebarMenuItem`.

### SidebarMenuSub

The `SidebarMenuSub` component is used to render a submenu within a `SidebarMenu`.

### SidebarMenuBadge

The `SidebarMenuBadge` component is used to render a badge within a `SidebarMenuItem`.

### SidebarMenuSkeleton

The `SidebarMenuSkeleton` component is used to render a skeleton for a `SidebarMenu`.

### SidebarSeparator

The `SidebarSeparator` component is used to render a separator within a `Sidebar`.

### SidebarTrigger

Use the `SidebarTrigger` component to render a button that toggles the sidebar.

### SidebarRail

The `SidebarRail` component is used to render a rail within a `Sidebar`.

## Theming

We use the following CSS variables to theme the sidebar:

```css
@layer base {
  :root {
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 0 0% 98%;
    --sidebar-primary-foreground: 240 5.9% 10%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}
```

## Styling

### Styling Based on State

- **Collapsible State**: Hide the `SidebarGroup` when the sidebar is in `icon` mode.

```jsx
<Sidebar collapsible="icon">
  <SidebarContent>
    <SidebarGroup className="group-data-[collapsible=icon]:hidden" />
  </SidebarContent>
</Sidebar>
```

- **Menu Button Active State**: Force the menu action to be visible when the menu button is active.

```jsx
<SidebarMenuItem>
  <SidebarMenuButton />
  <SidebarMenuAction className="peer-data-[active=true]/menu-button:opacity-100" />
</SidebarMenuItem>
```

## Changelog

### 2024-10-30

- Improved `setOpen` callback logic in `<SidebarProvider>`.

### 2024-10-21

- Moved `text-sidebar-foreground` from `<SidebarProvider>` to `<Sidebar>` component.

### 2024-10-20

- Fixed typo in `useSidebar` hook.