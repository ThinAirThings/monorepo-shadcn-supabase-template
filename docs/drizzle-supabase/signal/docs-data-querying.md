# Drizzle Queries + CRUD

## Prerequisites

This guide assumes familiarity with:

- [Schema Fundamentals](/docs/sql-schema-declaration): How to define your schema
- [Connection Fundamentals](/docs/connect-overview): How to connect to the database

## Querying with Drizzle

Drizzle provides multiple ways to query your database, allowing you to choose the best fit for your project. You can use either SQL-like syntax or a more abstracted relational syntax.

### SQL-like Syntax

**If you know SQL, you know Drizzle.**

Drizzle embraces SQL, minimizing the learning curve and providing full access to SQL's capabilities.

#### Example Queries

- **Select with Join**
  ```javascript
  // Access your data
  await db
    .select()
    .from(posts)
    .leftJoin(comments, eq(posts.id, comments.post_id))
    .where(eq(posts.id, 10))
  ```
  ```sql
  SELECT *
  FROM posts
  LEFT JOIN comments ON posts.id = comments.post_id
  WHERE posts.id = 10
  ```

- **Insert**
  ```javascript
  await db.insert(users).values({ email: 'user@gmail.com' })
  ```
  ```sql
  INSERT INTO users (email) VALUES ('user@gmail.com')
  ```

- **Update**
  ```javascript
  await db.update(users)
          .set({ email: 'user@gmail.com' })
          .where(eq(users.id, 1))
  ```
  ```sql
  UPDATE users
  SET email = 'user@gmail.com'
  WHERE users.id = 1
  ```

- **Delete**
  ```javascript
  await db.delete(users).where(eq(users.id, 1))
  ```
  ```sql
  DELETE FROM users WHERE users.id = 1
  ```

### Relational Syntax

While SQL-like queries are comprehensive, the Queries API allows for efficient data retrieval, especially for relational and nested data, without the need for complex joins or data mapping.

- **Example**
  ```javascript
  const result = await db.query.users.findMany({
    with: {
      posts: true
    },
  });
  ```

## Advanced Querying

Drizzle allows for advanced query composition and partitioning, enabling flexible and powerful data retrieval.

### Examples

- **Compose a WHERE Statement**
  ```javascript
  async function getProductsBy({
    name,
    category,
    maxPrice,
  }: {
    name?: string;
    category?: string;
    maxPrice?: string;
  }) {
    const filters: SQL[] = [];

    if (name) filters.push(ilike(products.name, name));
    if (category) filters.push(eq(products.category, category));
    if (maxPrice) filters.push(lte(products.price, maxPrice));

    return db
      .select()
      .from(products)
      .where(and(...filters));
  }
  ```

- **Use Subqueries**
  ```javascript
  const subquery = db
    .select()
    .from(internalStaff)
    .leftJoin(customUser, eq(internalStaff.userId, customUser.id))
    .as('internal_staff');

  const mainQuery = await db
    .select()
    .from(ticket)
    .leftJoin(subquery, eq(subquery.internal_staff.userId, ticket.staffId));
  ```

## Further Reading

- [Query](/docs/rqb)
- [Select](/docs/select)
- [Insert](/docs/insert)
- [Update](/docs/update)
- [Delete](/docs/delete)
- [Filters](/docs/operators)
- [Joins](/docs/joins)
- [sql`` operator](/docs/sql)

## Zero to Hero

- [Migrations](/docs/migrations)