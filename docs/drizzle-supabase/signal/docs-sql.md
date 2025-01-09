# Drizzle ORM SQL Template Documentation

## Overview

Drizzle ORM provides a powerful `sql` template feature that allows developers to write type-safe and parameterized SQL queries. This feature enhances the safety and flexibility of your code by enabling the use of raw SQL queries while maintaining type safety and query parameterization.

## Magical `sql` Operator

When using an ORM library, you might encounter situations where writing a specific query using the ORM syntax is challenging. In such cases, you can use raw queries, but they often lack type safety and parameterization. Drizzle's `sql` template addresses this by allowing you to write type-safe and parameterized queries.

### Usage

The `sql` template can be used in various parts of a query, such as SELECT statements, WHERE clauses, ORDER BY clauses, HAVING clauses, GROUP BY clauses, and relational query builders.

### Example

```javascript
import { sql } from 'drizzle-orm';

const id = 69;
await db.execute(sql`select * from ${usersTable} where ${usersTable.id} = ${id}`);
```

This generates the query:

```sql
select * from "users" where "users"."id" = $1; --> [69]
```

## `sql<T>`

The `sql<T>` feature allows you to define a custom type for SQL queries, ensuring consistent typing for selected fields.

### Example

```javascript
// without sql<T> type defined
const response: { id: unknown }[] = await db.select({
    lowerName: sql`lower(${usersTable.id})`
}).from(usersTable);

// with sql<T> type defined
const response: { id: string }[] = await db.select({
    lowerName: sql<string>`lower(${usersTable.id})`
}).from(usersTable);
```

## `sql.mapWith()`

Use `.mapWith()` for runtime mapping of values from the database driver to Drizzle.

### Example

```javascript
const usersTable = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
});

sql`...`.mapWith(usersTable.name);
```

## `sql.as<T>()`

The `.as('alias_name')` helper allows you to define an alias for a field in complex queries.

### Example

```javascript
sql`lower(usersTable.name)`.as('lower_name');
```

## `sql.raw()`

The `sql.raw()` function allows you to include raw SQL statements without additional processing or escaping.

### Example

```javascript
sql.raw(`select * from users where id = ${12}`);
```

## `sql.fromList()`

The `fromList` function combines multiple SQL chunks into a single SQL statement.

### Example

```javascript
const sqlChunks: SQL[] = [];

sqlChunks.push(sql`select * from users`);

// some logic

sqlChunks.push(sql` where `);

// some logic

for (let i = 0; i < 5; i++) {
    sqlChunks.push(sql`id = ${i}`);

    if (i === 4) continue;
    sqlChunks.push(sql` or `);
}

const finalSql: SQL = sql.fromList(sqlChunks);
```

## `sql.join()`

The `sql.join` function concatenates SQL chunks using a specified separator.

### Example

```javascript
const sqlChunks: SQL[] = [];

sqlChunks.push(sql`select * from users`);

// some logic

sqlChunks.push(sql`where`);

// some logic

for (let i = 0; i < 5; i++) {
    sqlChunks.push(sql`id = ${i}`);

    if (i === 4) continue;
    sqlChunks.push(sql`or`);
}

const finalSql: SQL = sql.join(sqlChunks, sql.raw(' '));
```

## `sql.append()`

The `append` function allows you to dynamically add SQL chunks to an existing SQL string.

### Example

```javascript
const finalSql = sql`select * from users`;

// some logic

finalSql.append(sql` where `);

// some logic

for (let i = 0; i < 5; i++) {
    finalSql.append(sql`id = ${i}`);

    if (i === 4) continue;
    finalSql.append(sql` or `);
}
```

## `sql.empty()`

The `sql.empty()` function initializes a blank SQL object to which you can append SQL chunks.

### Example

```javascript
const finalSql = sql.empty();

// some logic

finalSql.append(sql`select * from users`);

// some logic

finalSql.append(sql` where `);

// some logic

for (let i = 0; i < 5; i++) {
    finalSql.append(sql`id = ${i}`);

    if (i === 4) continue;
    finalSql.append(sql` or `);
}
```

## Convert `sql` to String and Params

To obtain the query string and parameters from the SQL template, specify the database dialect.

### Example

```javascript
import { PgDialect } from 'drizzle-orm/pg-core';

const pgDialect = new PgDialect();
pgDialect.sqlToQuery(sql`select * from ${usersTable} where ${usersTable.id} = ${12}`);
```

## `sql` Select

Use the `sql` functionality in partial select queries to retrieve specific fields from a table.

### Example

```javascript
import { sql } from 'drizzle-orm';
import { usersTable } from 'schema';

await db.select({
    id: usersTable.id,
    lowerName: sql<string>`lower(${usersTable.name})`,
    aliasedName: sql<string>`lower(${usersTable.name})`.as('aliased_column'),
    count: sql<number>`count(*)`.mapWith(Number)
}).from(usersTable);
```

## `sql` in WHERE

Use the `sql` template in WHERE clauses for complex expressions.

### Example

```javascript
import { sql } from 'drizzle-orm';
import { usersTable } from 'schema';

const id = 77;

await db.select()
        .from(usersTable)
        .where(sql`${usersTable.id} = ${id}`);
```

## `sql` in ORDER BY

Use the `sql` template in ORDER BY clauses for custom ordering.

### Example

```javascript
import { sql } from 'drizzle-orm';
import { usersTable } from 'schema';

await db.select().from(usersTable).orderBy(sql`${usersTable.id} desc nulls first`);
```

## `sql` in HAVING and GROUP BY

Use the `sql` template in HAVING and GROUP BY clauses for custom expressions.

### Example

```javascript
import { sql } from 'drizzle-orm';
import { usersTable } from 'schema';

await db.select({
    projectId: usersTable.projectId,
    count: sql<number>`count(${usersTable.id})`.mapWith(Number)
}).from(usersTable)
    .groupBy(sql`${usersTable.projectId}`)
    .having(sql`count(${usersTable.id}) > 300`);
```
