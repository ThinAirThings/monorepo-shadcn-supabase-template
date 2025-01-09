# Drizzle ORM Documentation

## Overview
Drizzle ORM is a thin typed layer on top of SQL, designed to provide a seamless developer experience for querying nested relational data from SQL databases using TypeScript. It supports PostgreSQL, SQLite, MySQL, and SingleStore.

## Schema Definition

### Example Schema
```typescript
import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
    posts: many(posts),
}));

export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    content: text('content').notNull(),
    authorId: integer('author_id').notNull(),
});

export const postsRelations = relations(posts, ({ one }) => ({
    author: one(users, { fields: [posts.authorId], references: [users.id] }),
}));
```

## Querying

### Basic Queries

#### Find Many
```typescript
const users = await db.query.users.findMany();
```

#### Find First
```typescript
const user = await db.query.users.findFirst();
```

### Relational Queries

#### Include Relations
```typescript
const posts = await db.query.posts.findMany({
    with: {
        comments: true,
    },
});
```

#### Nested Relations
```typescript
const users = await db.query.users.findMany({
    with: {
        posts: {
            with: {
                comments: true,
            },
        },
    },
});
```

### Partial Fields Select

#### Include Specific Columns
```typescript
const posts = await db.query.posts.findMany({
    columns: {
        id: true,
        content: true,
    },
    with: {
        comments: true,
    }
});
```

#### Exclude Specific Columns
```typescript
const posts = await db.query.posts.findMany({
    columns: {
        content: false,
    },
});
```

### Filters and Conditions

#### Using Operators
```typescript
import { eq } from 'drizzle-orm';

const users = await db.query.users.findMany({
    where: eq(users.id, 1)
})
```

### Limit & Offset

#### Limit Results
```typescript
await db.query.posts.findMany({
    limit: 5,
});
```

#### Offset Results
```typescript
await db.query.posts.findMany({
    limit: 5,
    offset: 2,
});
```

### Order By

#### Ascending and Descending Order
```typescript
import { desc, asc } from 'drizzle-orm';

await db.query.posts.findMany({
    orderBy: [asc(posts.id)],
});
```

### Custom Fields

#### Adding Custom Fields
```typescript
import { sql } from 'drizzle-orm';

await db.query.users.findMany({
    extras: {
        loweredName: sql`lower(${users.name})`.as('lowered_name'),
    },
})
```

### Prepared Statements

#### Using Placeholders
```typescript
const prepared = db.query.users.findMany({
    where: ((users, { eq }) => eq(users.id, placeholder('id'))),
    with: {
        posts: {
            where: ((users, { eq }) => eq(users.id, 1)),
        },
    },
}).prepare('query_name');

const usersWithPosts = await prepared.execute({ id: 1 });
```

## Modes
Drizzle supports different modes for compatibility with various databases. For example, when using the `mysql2` driver with PlanetScale, specify `mode: "planetscale"`.

```typescript
import * as schema from './schema';
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  uri: process.env.PLANETSCALE_DATABASE_URL,
});

const db = drizzle({ client: connection, schema, mode: 'planetscale' });
```

## Conclusion
Drizzle ORM provides a robust and flexible way to interact with SQL databases using TypeScript, offering a rich set of features for relational queries, schema management, and performance optimization through prepared statements.