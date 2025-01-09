# Aspect Ratio

Displays content within a desired ratio.

## Installation

To install the Aspect Ratio component, use the following command:

```shell
pnpm dlx shadcn@latest add aspect-ratio
```

## Usage

To use the Aspect Ratio component, import it and use it within your component as shown below:

```javascript
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

<div className="w-[450px]">
  <AspectRatio ratio={16 / 9}>
    <Image src="..." alt="Image" className="rounded-md object-cover" />
  </AspectRatio>
</div>
```

## Additional Resources

- [Aspect Ratio Documentation](https://www.radix-ui.com/docs/primitives/components/aspect-ratio)
- [API Reference](https://www.radix-ui.com/docs/primitives/components/aspect-ratio#api-reference)