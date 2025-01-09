# Drizzle ORM Documentation

## SQL Select

Drizzle provides a SQL-like way to fetch data from your database, ensuring type safety and composability. It supports most query features across different SQL dialects, and users can extend functionality using the `sql` operator.

### Table Definition Examples

#### PostgreSQL
```javascript
import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('age'),
});
```

#### MySQL
```javascript
import { mysqlTable, serial, text, int } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  age: int('age'),
});
```

#### SQLite
```javascript
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('age'),
});
```

#### SingleStore
```javascript
import { singlestoreTable, serial, text, int } from 'drizzle-orm/singlestore-core';

export const users = singlestoreTable('users', {
  id: int('id').primaryKey(),
  name: text('name').notNull(),
  age: int('age'),
});
```

### Basic Select

Select all rows from a table including all columns:

```javascript
const result = await db.select().from(users);
```

```sql
select "id", "name", "age" from "users";
```

### Partial Select

Select a subset of columns:

```javascript
const result = await db.select({
  field1: users.id,
  field2: users.name,
}).from(users);
```

```sql
select "id", "name" from "users";
```

### Conditional Select

Dynamic selection based on conditions:

```javascript
async function selectUsers(withName: boolean) {
  return db
    .select({
      id: users.id,
      ...(withName ? { name: users.name } : {}),
    })
    .from(users);
}
```

### Distinct Select

Retrieve unique rows:

```javascript
await db.selectDistinct().from(users).orderBy(usersTable.id, usersTable.name);
```

```sql
select distinct "id", "name" from "users" order by "id", "name";
```

### Advanced Select

Build flexible select queries using TypeScript:

```javascript
import { getTableColumns, sql } from 'drizzle-orm';

await db.select({
    ...getTableColumns(posts),
    titleLength: sql<number>`length(${posts.title})`,
  }).from(posts);
```

## Filters

Filter query results using operators:

```javascript
import { eq, lt, gte, ne } from 'drizzle-orm';

await db.select().from(users).where(eq(users.id, 42));
```

```sql
select "id", "name", "age" from "users" where "id" = 42;
```

### Combining Filters

Combine filters with `and()` and `or()`:

```javascript
import { eq, and, sql } from 'drizzle-orm';

await db.select().from(users).where(
  and(
    eq(users.id, 42),
    eq(users.name, 'Dan')
  )
);
```

```sql
select "id", "name", "age" from "users" where "id" = 42 and "name" = 'Dan';
```

## Limit & Offset

Implement pagination using `.limit()` and `.offset()`:

```javascript
await db.select().from(users).limit(10).offset(10);
```

```sql
select "id", "name", "age" from "users" limit 10 offset 10;
```

## Order By

Sort results with `.orderBy()`:

```javascript
import { asc, desc } from 'drizzle-orm';

await db.select().from(users).orderBy(users.name);
```

```sql
select "id", "name", "age" from "users" order by "name";
```

## Aggregations

Perform aggregations using functions like `sum`, `count`, `avg`:

```javascript
import { gt } from 'drizzle-orm';

await db.select({
  age: users.age,
  count: sql<number>`cast(count(${users.id}) as int)`,
})
  .from(users)
  .groupBy(users.age);
```

```sql
select "age", cast(count("id") as int)
  from "users"
  group by "age";
```

## Iterator

Use `.iterator()` for large result sets:

```javascript
const iterator = await db.select().from(users).iterator();

for await (const row of iterator) {
  console.log(row);
}
```

## Index Hints

### Use Index

Suggest indexes to the optimizer:

```javascript
export const users = mysqlTable('users', {
	id: int('id').primaryKey(),
	name: varchar('name', { length: 100 }).notNull(),
}, () => [usersTableNameIndex]);

const usersTableNameIndex = index('users_name_index').on(users.name);

await db.select()
  .from(users, { useIndex: usersTableNameIndex })
  .where(eq(users.name, 'David'));
```

### Ignore Index

Avoid specific indexes:

```javascript
await db.select()
  .from(users, { ignoreIndex: usersTableNameIndex })
  .where(eq(users.name, 'David'));
```

### Force Index

Force the use of specific indexes:

```javascript
await db.select()
  .from(users, { forceIndex: usersTableNameIndex })
  .where(eq(users.name, 'David'));
```
