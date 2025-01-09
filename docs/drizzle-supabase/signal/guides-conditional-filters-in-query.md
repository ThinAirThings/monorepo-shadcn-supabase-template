# Drizzle ORM: Conditional Filters in Queries

## Supported Databases
- PostgreSQL
- MySQL
- SQLite

## Prerequisites
This guide assumes familiarity with:
- Getting started with [PostgreSQL](/docs/get-started-postgresql), [MySQL](/docs/get-started-mysql), and [SQLite](/docs/get-started-sqlite)
- [Select statement](/docs/select)
- [Filtering](/docs/select#filtering) and [Filter operators](/docs/operators)

## Using Conditional Filters
To pass a conditional filter in a query, use the `.where()` method and logical operators as shown below:

```javascript
import { ilike } from 'drizzle-orm';

const db = drizzle(...);

const searchPosts = async (term?: string) => {
  await db
    .select()
    .from(posts)
    .where(term ? ilike(posts.title, term) : undefined);
};

await searchPosts();
await searchPosts('AI');
```

Equivalent SQL:
```sql
select * from posts;
select * from posts where title ilike 'AI';
```

## Combining Conditional Filters
To combine conditional filters, use `and()` or `or()` operators:

```javascript
import { and, gt, ilike, inArray } from 'drizzle-orm';

const searchPosts = async (term?: string, categories: string[] = [], views = 0) => {
  await db
    .select()
    .from(posts)
    .where(
      and(
        term ? ilike(posts.title, term) : undefined,
        categories.length > 0 ? inArray(posts.category, categories) : undefined,
        views > 100 ? gt(posts.views, views) : undefined,
      ),
    );
};

await searchPosts();
await searchPosts('AI', ['Tech', 'Art', 'Science'], 200);
```

Equivalent SQL:
```sql
select * from posts;
select * from posts
  where (
    title ilike 'AI'
    and category in ('Tech', 'Science', 'Art')
    and views > 200
  );
```

## Reusing Filters Across Projects
To reuse filters, create a variable, push filters, and use it in `.where()` with `and()` or `or()`:

```javascript
import { SQL, ... } from 'drizzle-orm';

const searchPosts = async (filters: SQL[]) => {
  await db
    .select()
    .from(posts)
    .where(and(...filters));
};

const filters: SQL[] = [];
filters.push(ilike(posts.title, 'AI'));
filters.push(inArray(posts.category, ['Tech', 'Art', 'Science']));
filters.push(gt(posts.views, 200));

await searchPosts(filters);
```

## Creating Custom Filter Operators
Drizzle's API allows for custom solutions. Here's how to create a custom filter operator:

```javascript
import { AnyColumn, ... } from 'drizzle-orm';

// length less than
const lenlt = (column: AnyColumn, value: number) => {
  return sql`length(${column}) < ${value}`;
};

const searchPosts = async (maxLen = 0, views = 0) => {
  await db
    .select()
    .from(posts)
    .where(
      and(
        maxLen ? lenlt(posts.title, maxLen) : undefined,
        views > 100 ? gt(posts.views, views) : undefined,
      ),
    );
};

await searchPosts(8);
await searchPosts(8, 200);
```

Equivalent SQL:
```sql
select * from posts where length(title) < 8;
select * from posts where (length(title) < 8 and views > 200);
```

## Example of `lt` Operator Implementation
Drizzle filter operators are SQL expressions. Here's an example of the `lt` operator:

```javascript
const lt = (left, right) => {
  return sql`${left} < ${bindIfParam(right, left)}`; // bindIfParam is an internal function
};
```