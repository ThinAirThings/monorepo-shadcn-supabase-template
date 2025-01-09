Docs

React Hook Form

# React Hook Form

Building forms with React Hook Form and Zod.

[Docs](https://react-hook-form.com)

Forms are tricky. They are one of the most common things you'll build in a web application, but also one of the most complex.

Well-designed HTML forms are:

- Well-structured and semantically correct.
- Easy to use and navigate (keyboard).
- Accessible with ARIA attributes and proper labels.
- Has support for client and server side validation.
- Well-styled and consistent with the rest of the application.

In this guide, we will take a look at building forms with [`react-hook-form`](https://react-hook-form.com/) and [`zod`](https://zod.dev). We're going to use a `<FormField>` component to compose accessible forms using Radix UI components.

## [Link to section](\#features) Features

The `<Form />` component is a wrapper around the `react-hook-form` library. It provides a few things:

- Composable components for building forms.
- A `<FormField />` component for building controlled form fields.
- Form validation using `zod`.
- Handles accessibility and error messages.
- Uses `React.useId()` for generating unique IDs.
- Applies the correct `aria` attributes to form fields based on states.
- Built to work with all Radix UI components.
- Bring your own schema library. We use `zod` but you can use anything you want.
- **You have full control over the markup and styling.**

## [Link to section](\#anatomy) Anatomy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Form>
  <FormField
    control={...}
    name="..."
    render={() => (
      <FormItem>
        <FormLabel />
        <FormControl>
          { /* Your form field */}
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
</Form>
```

Copy

## [Link to section](\#example) Example

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
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

Copy

## [Link to section](\#installation) Installation

CLIManual

### [Link to section](\#command) Command

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add form

```

Copy

## [Link to section](\#usage) Usage

### [Link to section](\#create-a-form-schema) Create a form schema

Define the shape of your form using a Zod schema. You can read more about using Zod in the [Zod documentation](https://zod.dev).

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
"use client"

import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})
```

Copy

### [Link to section](\#define-a-form) Define a form

Use the `useForm` hook from `react-hook-form` to create a form.

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
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
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
}
```

Copy

Since `FormField` is using a controlled component, you need to provide a default value for the field. See the [React Hook Form docs](https://react-hook-form.com/docs/usecontroller) to learn more about controlled components.

### [Link to section](\#build-your-form) Build your form

We can now use the `<Form />` components to build our form.

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
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
  // ...

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

Copy

### [Link to section](\#done) Done

That's it. You now have a fully accessible form that is type-safe with client-side validation.

PreviewCode

Style: New York

Copy

Username

This is your public display name.

Submit

## [Link to section](\#examples) Examples

See the following links for more examples on how to use the `<Form />` component with other components:

- [Checkbox](/docs/components/checkbox#form)
- [Date Picker](/docs/components/date-picker#form)
- [Input](/docs/components/input#form)
- [Radio Group](/docs/components/radio-group#form)
- [Select](/docs/components/select#form)
- [Switch](/docs/components/switch#form)
- [Textarea](/docs/components/textarea#form)
- [Combobox](/docs/components/combobox#form)

[Dropdown Menu](/docs/components/dropdown-menu) [Hover Card](/docs/components/hover-card)

On This Page

- [React Hook Form](#react-hook-form)
  - [Link to section Features](#link-to-section-features)
  - [Link to section Anatomy](#link-to-section-anatomy)
  - [Link to section Example](#link-to-section-example)
  - [Link to section Installation](#link-to-section-installation)
    - [Link to section Command](#link-to-section-command)
  - [Link to section Usage](#link-to-section-usage)
    - [Link to section Create a form schema](#link-to-section-create-a-form-schema)
    - [Link to section Define a form](#link-to-section-define-a-form)
    - [Link to section Build your form](#link-to-section-build-your-form)
    - [Link to section Done](#link-to-section-done)
  - [Link to section Examples](#link-to-section-examples)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)