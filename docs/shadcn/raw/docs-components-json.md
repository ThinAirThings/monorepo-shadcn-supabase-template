Docs

components.json

# components.json

Configuration for your project.

The `components.json` file holds configuration for your project.

We use it to understand how your project is set up and how to generate components customized for your project.

Note: The `components.json` file is optional and **only required if you're**
**using the CLI** to add components to your project. If you're using the copy
and paste method, you don't need this file.

You can create a `components.json` file in your project by running the following command:

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest init

```

Copy

See the [CLI section](/docs/cli) for more information.

## [Link to section](\#schema) $schema

You can see the JSON Schema for `components.json` [here](https://ui.shadcn.com/schema.json).

components.json

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
{
  "$schema": "https://ui.shadcn.com/schema.json"
}
```

Copy

## [Link to section](\#style) style

The style for your components. **This cannot be changed after initialization.**

components.json

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
{
  "style": "default" | "new-york"
}
```

Copy

PreviewCode

Style: New York

Copy

Create project

Deploy your new project in one-click.

Name

FrameworkSelectNext.jsSvelteKitAstroNuxt.js

CancelDeploy

## [Link to section](\#tailwind) tailwind

Configuration to help the CLI understand how Tailwind CSS is set up in your project.

See the [installation section](/docs/installation) for how to set up Tailwind CSS.

### [Link to section](\#tailwindconfig) tailwind.config

Path to where your `tailwind.config.js` file is located.

components.json

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
{
  "tailwind": {
    "config": "tailwind.config.js" | "tailwind.config.ts"
  }
}
```

Copy

### [Link to section](\#tailwindcss) tailwind.css

Path to the CSS file that imports Tailwind CSS into your project.

components.json

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
{
  "tailwind": {
    "css": "styles/global.css"
  }
}
```

Copy

### [Link to section](\#tailwindbasecolor) tailwind.baseColor

This is used to generate the default color palette for your components. **This cannot be changed after initialization.**

components.json

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
{
  "tailwind": {
    "baseColor": "gray" | "neutral" | "slate" | "stone" | "zinc"
  }
}
```

Copy

### [Link to section](\#tailwindcssvariables) tailwind.cssVariables

You can choose between using CSS variables or Tailwind CSS utility classes for theming.

To use utility classes for theming set `tailwind.cssVariables` to `false`. For CSS variables, set `tailwind.cssVariables` to `true`.

components.json

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
{
  "tailwind": {
    "cssVariables": `true` | `false`
  }
}
```

Copy

For more information, see the [theming docs](/docs/theming).

**This cannot be changed after initialization.** To switch between CSS variables and utility classes, you'll have to delete and re-install your components.

### [Link to section](\#tailwindprefix) tailwind.prefix

The prefix to use for your Tailwind CSS utility classes. Components will be added with this prefix.

components.json

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
{
  "tailwind": {
    "prefix": "tw-"
  }
}
```

Copy

## [Link to section](\#rsc) rsc

Whether or not to enable support for React Server Components.

The CLI automatically adds a `use client` directive to client components when set to `true`.

components.json

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
{
  "rsc": `true` | `false`
}
```

Copy

## [Link to section](\#tsx) tsx

Choose between TypeScript or JavaScript components.

Setting this option to `false` allows components to be added as JavaScript with the `.jsx` file extension.

components.json

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
{
  "tsx": `true` | `false`
}
```

Copy

## [Link to section](\#aliases) aliases

The CLI uses these values and the `paths` config from your `tsconfig.json` or `jsconfig.json` file to place generated components in the correct location.

Path aliases have to be set up in your `tsconfig.json` or `jsconfig.json` file.

**Important:** If you're using the `src` directory, make sure it is included
under `paths` in your `tsconfig.json` or `jsconfig.json` file.

### [Link to section](\#aliasesutils) aliases.utils

Import alias for your utility functions.

components.json

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
{
  "aliases": {
    "utils": "@/lib/utils"
  }
}
```

Copy

### [Link to section](\#aliasescomponents) aliases.components

Import alias for your components.

components.json

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
{
  "aliases": {
    "components": "@/components"
  }
}
```

Copy

### [Link to section](\#aliasesui) aliases.ui

Import alias for `ui` components.

The CLI will use the `aliases.ui` value to determine where to place your `ui` components. Use this config if you want to customize the installation directory for your `ui` components.

components.json

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
{
  "aliases": {
    "ui": "@/app/ui"
  }
}
```

Copy

### [Link to section](\#aliaseslib) aliases.lib

Import alias for `lib` functions such as `format-date` or `generate-id`.

components.json

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
{
  "aliases": {
    "lib": "@/lib"
  }
}
```

Copy

### [Link to section](\#aliaseshooks) aliases.hooks

Import alias for `hooks` such as `use-media-query` or `use-toast`.

components.json

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
{
  "aliases": {
    "hooks": "@/hooks"
  }
}
```

Copy

[Installation](/docs/installation) [Theming](/docs/theming)

On This Page

- [$schema](#schema)
- [style](#style)
- [tailwind](#tailwind)
  - [tailwind.config](#tailwindconfig)
  - [tailwind.css](#tailwindcss)
  - [tailwind.baseColor](#tailwindbasecolor)
  - [tailwind.cssVariables](#tailwindcssvariables)
  - [tailwind.prefix](#tailwindprefix)
- [rsc](#rsc)
- [tsx](#tsx)
- [aliases](#aliases)
  - [aliases.utils](#aliasesutils)
  - [aliases.components](#aliasescomponents)
  - [aliases.ui](#aliasesui)
  - [aliases.lib](#aliaseslib)
  - [aliases.hooks](#aliaseshooks)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)