# Responsive Table Component Documentation

## Overview
A responsive table component designed to display invoice data effectively.

### Example Table

| Invoice | Status  | Method       | Amount   |
|---------|---------|--------------|----------|
| INV001  | Paid    | Credit Card  | $250.00  |
| INV002  | Pending | PayPal       | $150.00  |
| INV003  | Unpaid  | Bank Transfer| $350.00  |
| INV004  | Paid    | Credit Card  | $450.00  |
| INV005  | Paid    | PayPal       | $550.00  |
| INV006  | Pending | Bank Transfer| $200.00  |
| INV007  | Unpaid  | Credit Card  | $300.00  |
| **Total** |         |              | **$2,500.00** |

## Installation
To install the table component, use the following command:

```bash
pnpm dlx shadcn@latest add table
```

## Usage
Import the necessary components to use the table in your project:

```javascript
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
```

### Example Usage

```jsx
<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Data Table
The `<Table />` component can be extended to create more complex data tables. Integrate it with [@tanstack/react-table](https://tanstack.com/table/v8) for features like sorting, filtering, and pagination.

For more details, refer to the [Data Table documentation](/docs/components/data-table) and see an example in the [Tasks demo](/examples/tasks).