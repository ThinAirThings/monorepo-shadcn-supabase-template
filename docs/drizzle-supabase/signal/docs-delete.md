# SQL Delete Operations

## Basic Delete

To delete all rows in a table:

```javascript
await db.delete(users);
```

To delete rows with specific conditions:

```javascript
await db.delete(users).where(eq(users.name, 'Dan'));
```

## Limit Clause

Use `.limit()` to add a `LIMIT` clause to the query. For example:

```javascript
await db.delete(users).where(eq(users.name, 'Dan')).limit(2);
```

Equivalent SQL:

```sql
delete from "users" where "users"."name" = $1 limit $2;
```

## Order By Clause

Use `.orderBy()` to add an `ORDER BY` clause to the query, sorting the results by specified fields:

```javascript
import { asc, desc } from 'drizzle-orm';

await db.delete(users).where(eq(users.name, 'Dan')).orderBy(users.name);
await db.delete(users).where(eq(users.name, 'Dan')).orderBy(desc(users.name));

// Order by multiple fields
await db.delete(users).where(eq(users.name, 'Dan')).orderBy(users.name, users.name2);
await db.delete(users).where(eq(users.name, 'Dan')).orderBy(asc(users.name), desc(users.name2));
```

Equivalent SQL:

```sql
delete from "users" where "users"."name" = $1 order by "name";
delete from "users" where "users"."name" = $1 order by "name" desc;

delete from "users" where "users"."name" = $1 order by "name", "name2";
delete from "users" where "users"."name" = $1 order by "name" asc, "name2" desc;
```

## Delete with Return

In PostgreSQL and SQLite, you can delete a row and return it:

```javascript
const deletedUser = await db.delete(users)
  .where(eq(users.name, 'Dan'))
  .returning();

// Partial return
const deletedUserIds: { deletedId: number }[] = await db.delete(users)
  .where(eq(users.name, 'Dan'))
  .returning({ deletedId: users.id });
```

## WITH DELETE Clause

Using the `WITH` clause can simplify complex queries by splitting them into smaller subqueries called common table expressions (CTEs):

```javascript
const averageAmount = db.$with('average_amount').as(
  db.select({ value: sql`avg(${orders.amount})`.as('value') }).from(orders)
);

const result = await db
	.with(averageAmount)
	.delete(orders)
	.where(gt(orders.amount, sql`(select * from ${averageAmount})`))
	.returning({
		id: orders.id
	});
```

Equivalent SQL:

```sql
with "average_amount" as (select avg("amount") as "value" from "orders")
delete from "orders"
where "orders"."amount" > (select * from "average_amount")
returning "id"
```