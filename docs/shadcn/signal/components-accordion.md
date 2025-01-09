# Accordion

A vertically stacked set of interactive headings that each reveal a section of content.

## Installation

To install the Accordion component, use the following command:

```bash
pnpm dlx shadcn@latest add accordion
```

## Usage

To use the Accordion component, import it as follows:

```javascript
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
```

Here is an example of how to implement the Accordion component:

```javascript
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Additional Information

- The Accordion component is accessible and adheres to the WAI-ARIA design pattern.
- It can be styled and animated according to your needs.