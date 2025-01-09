Docs

Input OTP

# Input OTP

Accessible one-time password component with copy paste functionality.

[Docs](https://input-otp.rodz.dev)

PreviewCode

Style: New York

Open in Copy

## [Link to section](\#about) About

Input OTP is built on top of [input-otp](https://github.com/guilhermerodz/input-otp) by [@guilherme\_rodz](https://twitter.com/guilherme_rodz).

## [Link to section](\#installation) Installation

CLIManual

### Run the following command:

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add input-otp

```

Copy

### Update `tailwind.config.js`

Add the following animations to your `tailwind.config.js` file:

tailwind.config.js

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
}
```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

Copy

## [Link to section](\#examples) Examples

### [Link to section](\#pattern) Pattern

Use the `pattern` prop to define a custom pattern for the OTP input.

PreviewCode

Style: New York

Open in Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

...

<InputOTP
  maxLength={6}
  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    {/* ... */}
  </InputOTPGroup>
</InputOTP>
```

Copy

### [Link to section](\#separator) Separator

You can use the `<InputOTPSeparator />` component to add a separator between the input groups.

PreviewCode

Style: New York

Open in Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

...

<InputOTP maxLength={4}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>
```

Copy

### [Link to section](\#controlled) Controlled

You can use the `value` and `onChange` props to control the input value.

PreviewCode

Style: New York

Copy

Enter your one-time password.

### [Link to section](\#form) Form

PreviewCode

Style: New York

Copy

One-Time Password

Please enter the one-time password sent to your phone.

Submit

## [Link to section](\#changelog) Changelog

### [Link to section](\#2024-03-19-composition) 2024-03-19 Composition

We've made some updates and replaced the render props pattern with composition. Here's how to update your code if you prefer the composition pattern.

**Note:** You are not required to update your code if you are using the
`render` prop. It is still supported.

### Update to the latest version of `input-otp`.

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm add input-otp@latest

```

Copy

### Update `input-otp.tsx`

input-otp.tsx

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
- import { OTPInput, SlotProps } from "input-otp"
+ import { OTPInput, OTPInputContext } from "input-otp"

 const InputOTPSlot = React.forwardRef<
   React.ElementRef<"div">,
-   SlotProps & React.ComponentPropsWithoutRef<"div">
-  >(({ char, hasFakeCaret, isActive, className, ...props }, ref) => {
+   React.ComponentPropsWithoutRef<"div"> & { index: number }
+  >(({ index, className, ...props }, ref) => {
+   const inputOTPContext = React.useContext(OTPInputContext)
+   const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
```

Copy

### Then replace the `render` prop in your code.

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

Copy

### [Link to section](\#2024-03-19-disabled) 2024-03-19 Disabled

To add a disabled state to the input, update `<InputOTP />` as follows:

input-otp.tsx

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"
```

Copy

[Input](/docs/components/input) [Label](/docs/components/label)

On This Page

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [Pattern](#pattern)
  - [Separator](#separator)
  - [Controlled](#controlled)
  - [Form](#form)
- [Changelog](#changelog)
  - [2024-03-19 Composition](#2024-03-19-composition)
  - [2024-03-19 Disabled](#2024-03-19-disabled)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)