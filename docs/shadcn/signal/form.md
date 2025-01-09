# React Hook Form

## Overview

Building forms with React Hook Form and Zod.

Forms are a common yet complex part of web applications. Well-designed HTML forms should be:

- Well-structured and semantically correct.
- Easy to use and navigate (keyboard accessible).
- Accessible with ARIA attributes and proper labels.
- Supportive of client and server-side validation.
- Well-styled and consistent with the rest of the application.

This guide covers building forms using `react-hook-form` and `zod`, utilizing a `<FormField>` component to create accessible forms with Radix UI components.

## Features

The `<Form />` component is a wrapper around the `react-hook-form` library, offering:

- Composable components for building forms.
- A `<FormField />` component for controlled form fields.
- Form validation using `zod`.
- Accessibility and error message handling.
- Unique ID generation with `React.useId()`.
- Correct `aria` attributes based on form field states.
- Compatibility with all Radix UI components.
- Full control over markup and styling.

## Anatomy

```jsx
<Form>
  <FormField
    control={...}
    name="..."
    render={() => (
      <FormItem>
        <FormLabel />
        <FormControl>
          { /* Your form field */ }
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
</Form>
```

## Example

```jsx
const form = useForm()

<FormField
  control={form.control}
  name="username"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Username</FormLabel>
      <FormControl>
        <Input placeholder="shadcn" {...field} />
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
```

## Installation

### Command

```bash
pnpm dlx shadcn@latest add form
```

## Usage

### Create a Form Schema

Define your form's shape using a Zod schema. More details can be found in the [Zod documentation](https://zod.dev).

```jsx
"use client"

import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})
```

### Define a Form

Use the `useForm` hook from `react-hook-form` to create a form.

```jsx
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
}
```

### Build Your Form

Use the `<Form />` components to construct your form.

```jsx
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

### Done

You now have a fully accessible form with type-safe client-side validation.

## Examples

For more examples on using the `<Form />` component with other components, see:

- [Checkbox](/docs/components/checkbox#form)
- [Date Picker](/docs/components/date-picker#form)
- [Input](/docs/components/input#form)
- [Radio Group](/docs/components/radio-group#form)
- [Select](/docs/components/select#form)
- [Switch](/docs/components/switch#form)
- [Textarea](/docs/components/textarea#form)
- [Combobox](/docs/components/combobox#form)