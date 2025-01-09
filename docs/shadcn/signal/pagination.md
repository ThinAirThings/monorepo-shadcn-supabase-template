# Pagination

Pagination with page navigation, next and previous links.

## Installation

To install the pagination component, use the following command:

```bash
pnpm dlx shadcn@latest add pagination
```

## Usage

Import the necessary components for pagination:

```javascript
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
```

Example usage of the pagination component:

```jsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

### Next.js Integration

By default, the `<PaginationLink />` component renders an `<a />` tag. To use the Next.js `<Link />` component, update `pagination.tsx` as follows:

```diff
+ import Link from "next/link"

- type PaginationLinkProps = ... & React.ComponentProps<"a">
+ type PaginationLinkProps = ... & React.ComponentProps<typeof Link>

const PaginationLink = ({...props }: ) => (
  <PaginationItem>
-   <a>
+   <Link>
      // ...
-   </a>
+   </Link>
  </PaginationItem>
)
```

**Note:** We are updating the CLI to automate this process for you.