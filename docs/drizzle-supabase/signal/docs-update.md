# SQL Update Documentation

## Basic Update

```javascript
await db.update(users)
  .set({ name: 'Mr. Dan' })
  .where(eq(users.name, 'Dan'));
```

- The object passed to `update` should have keys matching column names in your database schema.
- Values of `undefined` are ignored; to set a column to `null`, pass `null`.
- SQL can be used as a value in the update object:

```javascript
await db.update(users)
  .set({ updatedAt: sql`NOW()` })
  .where(eq(users.name, 'Dan'));
```

## Limit Clause

Use `.limit()` to add a `limit` clause to the query:

```javascript
await db.update(usersTable).set({ verified: true }).limit(2);
```

SQL equivalent:

```sql
update "users" set "verified" = $1 limit $2;
```

## Order By Clause

Use `.orderBy()` to add an `order by` clause, sorting results by specified fields:

```javascript
import { asc, desc } from 'drizzle-orm';

await db.update(usersTable).set({ verified: true }).orderBy(usersTable.name);
await db.update(usersTable).set({ verified: true }).orderBy(desc(usersTable.name));

// Order by multiple fields
await db.update(usersTable).set({ verified: true }).orderBy(usersTable.name, usersTable.name2);
await db.update(usersTable).set({ verified: true }).orderBy(asc(usersTable.name), desc(usersTable.name2));
```

SQL equivalent:

```sql
update "users" set "verified" = $1 order by "name";
update "users" set "verified" = $1 order by "name" desc;

update "users" set "verified" = $1 order by "name", "name2";
update "users" set "verified" = $1 order by "name" asc, "name2" desc;
```

## Update with Returning

Supported in PostgreSQL and SQLite:

```javascript
const updatedUserId: { updatedId: number }[] = await db.update(users)
  .set({ name: 'Mr. Dan' })
  .where(eq(users.name, 'Dan'))
  .returning({ updatedId: users.id });
```

## `WITH` Update Clause

Using the `WITH` clause can simplify complex queries by splitting them into smaller subqueries (CTEs):

```javascript
const averagePrice = db.$with('average_price').as(
        db.select({ value: sql`avg(${products.price})`.as('value') }).from(products)
);

const result = await db.with(averagePrice)
    .update(products)
    .set({ cheap: true })
    .where(lt(products.price, sql`(select * from ${averagePrice})`))
    .returning({ id: products.id });
```

SQL equivalent:

```sql
with "average_price" as (select avg("price") as "value" from "products")
update "products" set "cheap" = $1
where "products"."price" < (select * from "average_price")
returning "id"
```

## Update … from

Supported in PostgreSQL, MySQL, SQLite, and SingleStore:

```javascript
await db
  .update(users)
  .set({ cityId: cities.id })
  .from(cities)
  .where(and(eq(cities.name, 'Seattle'), eq(users.name, 'John')));
```

SQL equivalent:

```sql
update "users" set "city_id" = "cities"."id"
from "cities"
where ("cities"."name" = $1 and "users"."name" = $2)

-- params: [ 'Seattle', 'John' ]
```

### Aliasing Tables

You can alias tables that are joined:

```javascript
const c = alias(cities, 'c');
await db
  .update(users)
  .set({ cityId: c.id })
  .from(c);
```

SQL equivalent:

```sql
update "users" set "city_id" = "c"."id"
from "cities" "c"
```

### Returning Columns from Joined Tables

In PostgreSQL, you can return columns from joined tables:

```javascript
const updatedUsers = await db
  .update(users)
  .set({ cityId: cities.id })
  .from(cities)
  .returning({ id: users.id, cityName: cities.name });
```

SQL equivalent:

```sql
update "users" set "city_id" = "cities"."id"
from "cities"
returning "users"."id", "cities"."name"
```