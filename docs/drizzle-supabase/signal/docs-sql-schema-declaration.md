# Drizzle Schema Documentation

## Overview
Drizzle allows you to define a schema in TypeScript with various models and properties supported by the underlying database. This schema serves as the source of truth for queries using Drizzle-ORM and migrations using Drizzle-Kit.

## Organizing Schema Files

### Single File Schema
The most common approach is to declare all tables in a single `schema.ts` file. This is suitable for projects with a manageable number of table models.

Example structure:
```
📦 <project root>
└ 📂 src
   └ 📂 db
      └ 📜 schema.ts
```

Configuration in `drizzle.config.ts`:
```typescript
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
  schema: './src/db/schema.ts'
})
```

### Multiple Files Schema
You can also organize your schema across multiple files, which is useful for larger projects. Ensure all models are exported for Drizzle-Kit to use in migrations.

Example structure:
```
📦 <project root>
 └ 📂 src
    └ 📂 db
       └ 📂 schema
          ├ 📜 users.ts
          ├ 📜 countries.ts
          ├ 📜 cities.ts
          ├ 📜 products.ts
          ├ 📜 clients.ts
          └ 📜 etc.ts
```

Configuration in `drizzle.config.ts`:
```typescript
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
  schema: './src/db/schema'
})
```

## Defining Data Schema
Drizzle supports various model types:
- Tables with columns, constraints, etc.
- Schemas (PostgreSQL only)
- Enums
- Sequences (PostgreSQL only)
- Views
- Materialized Views

### Tables and Columns
Define tables with at least one column. Choose the appropriate dialect: PostgreSQL, MySQL, or SQLite.

Example for PostgreSQL:
```typescript
import { pgTable, integer } from "drizzle-orm/pg-core"

export const users = pgTable('users', {
  id: integer()
});
```

### TypeScript Key Mapping
By default, Drizzle uses TypeScript key names for database columns. Use column aliases for different names.

Example:
```typescript
// schema.ts
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: integer(),
  firstName: varchar('first_name')
})
```

### Camel and Snake Casing
Drizzle can automatically map `camelCase` to `snake_case` using the `casing` option during database initialization.

Example:
```typescript
// db.ts
const db = drizzle({ connection: process.env.DATABASE_URL, casing: 'snake_case' })
```

## Advanced Features

### Reusable Columns
Define common columns like `updated_at`, `created_at`, and `deleted_at` in a separate file and reuse them across tables.

Example:
```typescript
// columns.helpers.ts
const timestamps = {
  updated_at: timestamp(),
  created_at: timestamp().defaultNow().notNull(),
  deleted_at: timestamp(),
}
```

## Example Schema

### PostgreSQL Example
```typescript
import { AnyPgColumn } from "drizzle-orm/pg-core";
import { pgEnum, pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

export const rolesEnum = pgEnum("roles", ["guest", "user", "admin"]);

export const users = table(
  "users",
  {
    id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
    firstName: t.varchar("first_name", { length: 256 }),
    lastName: t.varchar("last_name", { length: 256 }),
    email: t.varchar().notNull(),
    invitee: t.integer().references((): AnyPgColumn => users.id),
    role: rolesEnum().default("guest"),
  },
  (table) => {
    return {
      emailIndex: t.uniqueIndex("email_idx").on(table.email),
    };
  }
);
```

### `generateUniqueString` Implementation
```typescript
function generateUniqueString(length: number = 12): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let uniqueString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uniqueString += characters[randomIndex];
  }

  return uniqueString;
}
```

## Next Steps
- [Column Types](/docs/column-types/pg)
- [Indexes and Constraints](/docs/indexes-constraints)
- [Database Views](/docs/views)
- [Database Schemas](/docs/schemas)
- [Sequences](/docs/sequences)
- [Extensions](/docs/extensions/pg)
- [Database Connection](/docs/connect-overview)
- [Data Querying](/docs/data-querying)
- [Migrations](/docs/migrations)