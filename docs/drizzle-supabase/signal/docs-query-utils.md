# Drizzle Query Utilities

## $count

`db.$count()` is a utility wrapper for `count(*)`. It is a flexible operator that can be used directly or as a subquery. More details can be found in our [GitHub discussion](https://github.com/drizzle-team/drizzle-orm/discussions/3119).

### Usage Examples

```javascript
const count = await db.$count(users);
//    ^? number

const count = await db.$count(users, eq(users.name, "Dan")); // works with filters
```

Equivalent SQL:

```sql
select count(*) from "users";
select count(*) from "users" where "name" = 'Dan';
```

### Subqueries

The `$count` utility is exceptionally useful in [subqueries](/docs/select#select-from-subquery):

```javascript
const users = await db.select({
  ...users,
  postsCount: db.$count(posts, eq(posts.authorId, users.id)),
}).from(users);
```

### Relational Queries

Usage example with [relational queries](/docs/rqb):

```javascript
const users = await db.query.users.findMany({
  extras: {
    postsCount: db.$count(posts, eq(posts.authorId, users.id)),
  },
});
```