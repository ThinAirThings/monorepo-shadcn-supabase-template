Docs

Carousel

# Carousel

A carousel with motion and swipe built using Embla.

[Docs](https://www.embla-carousel.com/get-started/react) [API Reference](https://www.embla-carousel.com/api)

PreviewCode

Style:

Open in Copy

1

2

3

4

5

Previous slideNext slide

## [Link to section](\#about) About

The carousel component is built using the [Embla Carousel](https://www.embla-carousel.com/) library.

## [Link to section](\#installation) Installation

CLIManual

pnpmnpmyarnbun

```relative font-mono text-sm leading-none
pnpm dlx shadcn@latest add carousel

```

Copy

## [Link to section](\#usage) Usage

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
```

Copy

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Carousel>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

Copy

## [Link to section](\#examples) Examples

### [Link to section](\#sizes) Sizes

To set the size of the items, you can use the `basis` utility class on the `<CarouselItem />`.

PreviewCode

Style:

Open in Copy

1

2

3

4

5

Previous slideNext slide

Example

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
// 33% of the carousel width.
<Carousel>
  <CarouselContent>
    <CarouselItem className="basis-1/3">...</CarouselItem>
    <CarouselItem className="basis-1/3">...</CarouselItem>
    <CarouselItem className="basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>
```

Copy

Responsive

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
// 50% on small screens and 33% on larger screens.
<Carousel>
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>
```

Copy

### [Link to section](\#spacing) Spacing

To set the spacing between the items, we use a `pl-[VALUE]` utility on the `<CarouselItem />` and a negative `-ml-[VALUE]` on the `<CarouselContent />`.

**Why:** I tried to use the `gap` property or a `grid` layout on the `   <CarouselContent />` but it required a lot of math and mental effort to get the
spacing right. I found `pl-[VALUE]` and `-ml-[VALUE]` utilities much easier to
use.

You can always adjust this in your own project if you need to.

PreviewCode

Style:

Open in Copy

1

2

3

4

5

Previous slideNext slide

Example

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Carousel>
  <CarouselContent className="-ml-4">
    <CarouselItem className="pl-4">...</CarouselItem>
    <CarouselItem className="pl-4">...</CarouselItem>
    <CarouselItem className="pl-4">...</CarouselItem>
  </CarouselContent>
</Carousel>
```

Copy

Responsive

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Carousel>
  <CarouselContent className="-ml-2 md:-ml-4">
    <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
    <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
    <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
  </CarouselContent>
</Carousel>
```

Copy

### [Link to section](\#orientation) Orientation

Use the `orientation` prop to set the orientation of the carousel.

PreviewCode

Style:

Open in Copy

1

2

3

4

5

Previous slideNext slide

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Carousel orientation="vertical | horizontal">
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
</Carousel>
```

Copy

## [Link to section](\#options) Options

You can pass options to the carousel using the `opts` prop. See the [Embla Carousel docs](https://www.embla-carousel.com/api/options/) for more information.

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
<Carousel
  opts={{
    align: "start",
    loop: true,
  }}
>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
</Carousel>
```

Copy

## [Link to section](\#api) API

Use a state and the `setApi` props to get an instance of the carousel API.

PreviewCode

Style:

Open in Copy

1

2

3

4

5

Previous slideNext slide

Slide 0 of 0

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import { type CarouselApi } from "@/components/ui/carousel"

export function Example() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
```

Copy

## [Link to section](\#events) Events

You can listen to events using the api instance from `setApi`.

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import { type CarouselApi } from "@/components/ui/carousel"

export function Example() {
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      // Do something on select.
    })
  }, [api])

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
```

Copy

See the [Embla Carousel docs](https://www.embla-carousel.com/api/events/) for more information on using events.

## [Link to section](\#plugins) Plugins

You can use the `plugins` prop to add plugins to the carousel.

```relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm
import Autoplay from "embla-carousel-autoplay"

export function Example() {
  return (
    <Carousel
      plugins={[\
        Autoplay({\
          delay: 2000,\
        }),\
      ]}
    >
      // ...
    </Carousel>
  )
}
```

Copy

PreviewCode

Style:

Open in Copy

1

2

3

4

5

Previous slideNext slide

See the [Embla Carousel docs](https://www.embla-carousel.com/api/plugins/) for more information on using plugins.

[Card](/docs/components/card) [Chart](/docs/components/chart)

On This Page

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [Sizes](#sizes)
  - [Spacing](#spacing)
  - [Orientation](#orientation)
- [Options](#options)
- [API](#api)
- [Events](#events)
- [Plugins](#plugins)

Bring your app built with shadcn to life on Vercel

Trusted by OpenAI, Sonos, Chick-fil-A, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now [Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site&utm_medium=web&utm_campaign=docs_cta_deploy_now_callout)