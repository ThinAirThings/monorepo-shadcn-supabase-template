# Drizzle ORM SQL Insert Documentation

Drizzle ORM provides a SQL-like interface for inserting rows into database tables. This documentation covers various insertion methods, including single and multiple row inserts, upserts, and handling conflicts.

## Insert One Row

Inserting data with Drizzle is straightforward and SQL-like:

```javascript
await db.insert(users).values({ name: 'Andrew' });
```

Equivalent SQL:

```sql
insert into "users" ("name") values ("Andrew");
```

To define an insert type for a table, use the `typeof usersTable.$inferInsert` syntax:

```javascript
type NewUser = typeof users.$inferInsert;

const insertUser = async (user: NewUser) => {
  return db.insert(users).values(user);
}

const newUser: NewUser = { name: "Alef" };
await insertUser(newUser);
```

## Insert Returning

### PostgreSQL and SQLite

You can insert a row and retrieve it in PostgreSQL and SQLite:

```javascript
await db.insert(users).values({ name: "Dan" }).returning();

// Partial return
await db.insert(users).values({ name: "Partial Dan" }).returning({ insertedId: users.id });
```

## Insert $returningId

### MySQL and SingleStore

MySQL does not natively support `RETURNING` after `INSERT`. Drizzle provides a way to handle this and automatically receive all inserted IDs:

```javascript
import { boolean, int, text, mysqlTable } from 'drizzle-orm/mysql-core';

const usersTable = mysqlTable('users', {
  id: int('id').primaryKey(),
  name: text('name').notNull(),
  verified: boolean('verified').notNull().default(false),
});

const result = await db.insert(usersTable).values([{ name: 'John' }, { name: 'John1' }]).$returningId();
//    ^? { id: number }[]
```

You can specify a `primary key` with `$default` to generate custom keys at runtime:

```javascript
import { varchar, text, mysqlTable } from 'drizzle-orm/mysql-core';
import { createId } from '@paralleldrive/cuid2';

const usersTableDefFn = mysqlTable('users_default_fn', {
  customId: varchar('id', { length: 256 }).primaryKey().$defaultFn(createId),
  name: text('name').notNull(),
});

const result = await db.insert(usersTableDefFn).values([{ name: 'John' }, { name: 'John1' }]).$returningId();
//  ^? { customId: string }[]
```

## Insert Multiple Rows

```javascript
await db.insert(users).values([{ name: 'Andrew' }, { name: 'Dan' }]);
```

## Upserts and Conflicts

Drizzle ORM provides interfaces for handling upserts and conflicts.

### On Conflict Do Nothing

```javascript
await db.insert(users)
  .values({ id: 1, name: 'John' })
  .onConflictDoNothing();

// Specify conflict target
await db.insert(users)
  .values({ id: 1, name: 'John' })
  .onConflictDoNothing({ target: users.id });
```

### On Conflict Do Update

```javascript
await db.insert(users)
  .values({ id: 1, name: 'Dan' })
  .onConflictDoUpdate({ target: users.id, set: { name: 'John' } });
```

#### `where` Clauses

```javascript
await db.insert(employees)
  .values({ employeeId: 123, name: 'John Doe' })
  .onConflictDoUpdate({
    target: employees.employeeId,
    targetWhere: sql`name <> 'John Doe'`,
    set: { name: sql`excluded.name` }
  });

await db.insert(employees)
  .values({ employeeId: 123, name: 'John Doe' })
  .onConflictDoUpdate({
    target: employees.employeeId,
    set: { name: 'John Doe' },
    setWhere: sql`name <> 'John Doe'`
  });
```

### On Duplicate Key Update (MySQL)

```javascript
await db.insert(users)
  .values({ id: 1, name: 'John' })
  .onDuplicateKeyUpdate({ set: { name: 'John' } });

// No-op example
await db.insert(users)
  .values({ id: 1, name: 'John' })
  .onDuplicateKeyUpdate({ set: { id: sql`id` } });
```

## `with insert` Clause

Using the `with` clause to simplify complex queries:

```javascript
const userCount = db.$with('user_count').as(
  db.select({ value: sql`count(*)`.as('value') }).from(users)
);

const result = await db.with(userCount)
  .insert(users)
  .values([{ username: 'user1', admin: sql`((select * from ${userCount}) = 0)` }])
  .returning({
    admin: users.admin
  });
```

## Insert into … Select

Drizzle supports `INSERT INTO ... SELECT` for all dialects:

```javascript
const insertedEmployees = await db
  .insert(employees)
  .select(
    db.select({ name: users.name }).from(users).where(eq(users.role, 'employee'))
  )
  .returning({
    id: employees.id,
    name: employees.name
  });
```

```javascript
await db.insert(employees).select(
    sql`select "users"."name" as "name" from "users" where "users"."role" = 'employee'`
);
```

This documentation provides a comprehensive guide to using Drizzle ORM for SQL insert operations, covering various scenarios and database dialects.