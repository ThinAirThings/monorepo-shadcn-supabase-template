# Drizzle ORM: Include or Exclude Columns in Queries

## Overview
Drizzle ORM provides a flexible API for including or excluding columns in database queries. This guide covers how to use Drizzle ORM with PostgreSQL, MySQL, and SQLite to manage query columns effectively.

### Prerequisites
- Familiarity with [PostgreSQL](/docs/get-started-postgresql), [MySQL](/docs/get-started-mysql), and [SQLite](/docs/get-started-sqlite)
- Understanding of [Select statements](/docs/select)
- Knowledge of [Typed table columns](/docs/goodies#get-typed-table-columns)
- Experience with [Joins](/docs/joins) and [Relational queries](/docs/rqb)

## Including Columns
To include all columns in a query, use the `.select()` method:

```typescript
import { posts } from './schema';

const db = drizzle(...);

await db.select().from(posts);
```

### Result Type
```typescript
type Result = {
  id: number;
  title: string;
  content: string;
  views: number;
}[];
```

## Including Specific Columns
To include specific columns, specify them in the `.select()` method:

```typescript
await db.select({ title: posts.title }).from(posts);
```

### Result Type
```typescript
type Result = {
  title: string;
}[];
```

## Including All Columns with Extra Columns
Use the `getTableColumns()` utility to include all columns and add extra ones:

```typescript
import { getTableColumns, sql } from 'drizzle-orm';

await db
  .select({
    ...getTableColumns(posts),
    titleLength: sql<number>`length(${posts.title})`,
  })
  .from(posts);
```

### Result Type
```typescript
type Result = {
  id: number;
  title: string;
  content: string;
  views: number;
  titleLength: number;
}[];
```

## Excluding Columns
To exclude specific columns, use the `getTableColumns()` utility:

```typescript
import { getTableColumns } from 'drizzle-orm';

const { content, ...rest } = getTableColumns(posts);

await db.select({ ...rest }).from(posts);
```

### Result Type
```typescript
type Result = {
  id: number;
  title: string;
  views: number;
}[];
```

## Including or Excluding Columns with Joins
To manage columns in queries with joins:

```typescript
import { eq, getTableColumns } from 'drizzle-orm';
import { comments, posts, users } from './db/schema';

const { userId, postId, ...rest } = getTableColumns(comments);

await db
  .select({
    postId: posts.id,
    comment: { ...rest },
    user: users,
  })
  .from(posts)
  .leftJoin(comments, eq(posts.id, comments.postId))
  .leftJoin(users, eq(users.id, posts.userId));
```

### Result Type
```typescript
type Result = {
  postId: number;
  comment: {
    id: number;
    content: string;
    createdAt: Date;
  } | null;
  user: {
    id: number;
    name: string;
    email: string;
  } | null;
}[];
```

## Schema Definitions
```typescript
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
});

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  views: integer('views').notNull().default(0),
  userId: integer('user_id').notNull().references(() => users.id),
});

export const comments = pgTable('comments', {
  id: serial('id').primaryKey(),
  postId: integer('post_id').notNull().references(() => posts.id),
  userId: integer('user_id').notNull().references(() => users.id),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
```

## Relational Queries
Drizzle ORM supports relational queries for including or excluding columns.

### Including All Columns
```typescript
import * as schema from './schema';

const db = drizzle(..., { schema });

await db.query.posts.findMany();
```

### Result Type
```typescript
type Result = {
  id: number;
  title: string;
  content: string;
  views: number;
}[];
```

### Including Specific Columns
```typescript
await db.query.posts.findMany({
  columns: {
    title: true,
  },
});
```

### Result Type
```typescript
type Result = {
  title: string;
}[];
```

### Including All Columns with Extra Columns
```typescript
import { sql } from 'drizzle-orm';

await db.query.posts.findMany({
  extras: {
    titleLength: sql<number>`length(${posts.title})`.as('title_length'),
  },
});
```

### Result Type
```typescript
type Result = {
  id: number;
  title: string;
  content: string;
  views: number;
  titleLength: number;
}[];
```

### Excluding Columns
```typescript
await db.query.posts.findMany({
  columns: {
    content: false,
  },
});
```

### Result Type
```typescript
type Result = {
  id: number;
  title: string;
  views: number;
}[];
```

### Including or Excluding Columns with Relations
```typescript
import * as schema from './schema';

const db = drizzle(..., { schema });

await db.query.posts.findMany({
  columns: {
    id: true,
  },
  with: {
    comments: {
      columns: {
        userId: false,
        postId: false,
      },
    },
    user: true,
  },
});
```

### Result Type
```typescript
type Result = {
  id: number;
  user: {
    id: number;
    name: string;
    email: string;
  };
  comments: {
    id: number;
    content: string;
    createdAt: Date;
  }[];
}[];
```

## Custom Conditional Select
Create custom solutions for conditional selects:

```typescript
import { posts } from './schema';

const searchPosts = async (withTitle = false) => {
  await db
    .select({
      id: posts.id,
      ...(withTitle && { title: posts.title }),
    })
    .from(posts);
};

await searchPosts();
await searchPosts(true);
```

### Result Type
```typescript
type Result = {
  id: number;
  title?: string | undefined;
}[];
```

## Schema Definitions
```typescript
import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  views: integer('views').notNull().default(0),
});
```

## Relations
Define relations between tables:

```typescript
import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
});

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  views: integer('views').notNull().default(0),
  userId: integer('user_id').notNull().references(() => users.id),
});

export const comments = pgTable('comments', {
  id: serial('id').primaryKey(),
  postId: integer('post_id').notNull().references(() => posts.id),
  userId: integer('user_id').notNull().references(() => users.id),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
  comments: many(comments),
}));

export const postsRelations = relations(posts, ({ many, one }) => ({
  comments: many(comments),
  user: one(users, { fields: [posts.userId], references: [users.id] }),
}));

export const commentsRelations = relations(comments, ({ one }) => ({
  post: one(posts, { fields: [comments.postId], references: [posts.id] }),
  user: one(users, { fields: [comments.userId], references: [users.id] }),
}));
```