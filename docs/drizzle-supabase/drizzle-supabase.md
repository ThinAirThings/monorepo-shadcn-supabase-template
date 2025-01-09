
##### Next Steps

- **Per-Driver Documentation**  
  - [PostgreSQL](/docs/get-started-postgresql)  
  - [Neon](/docs/connect-neon)  
  - [Vercel Postgres](/docs/connect-vercel-postgres)  
  - [Supabase](/docs/connect-supabase)  
  - [Xata](/docs/connect-xata)  
  - [PGLite](/docs/connect-pglite)

- **MySQL Drivers**  
  - [MySQL](/docs/get-started-mysql)  
  - [PlanetsScale](/docs/connect-planetscale)  
  - [TiDB](/docs/connect-tidb)

- **SQLite Drivers**  
  - [SQLite](/docs/get-started-sqlite)  
  - [Turso](/docs/connect-turso)  
  - [Cloudflare D1](/docs/connect-cloudflare-d1)  
  - [Bun SQLite](/docs/connect-bun-sqlite)

- **Native SQLite**  
  - [Expo SQLite](/docs/get-started/expo-new)  
  - [OP SQLite](/docs/connect-op-sqlite)  
  - [React Native SQLite](/docs/connect-react-native-sqlite)

- **Others**  
  - [Drizzle Proxy](/docs/connect-drizzle-proxy)

---

## Drizzle ORM with React Native SQLite

### File Origin: `docs-connect-react-native-sqlite.md`

#### Overview

To integrate Drizzle ORM with React Native applications, it is recommended to use the `Expo SQLite` library. This ensures compatibility with the Hermes JavaScript runtime, standard for React Native and Expo.

#### Compatibility

The library [react-native-sqlite-storage](https://github.com/andpor/react-native-sqlite-storage) does **not** support the Hermes runtime. Thus, it is **not** recommended for use with Drizzle in React Native.

#### Recommended Library

- **Expo SQLite**: Ensures compatibility with Hermes and Drizzle ORM in React Native apps.

---

## Drizzle and Supabase Integration Guide

### File Origin: `docs-connect-supabase.md`

#### Prerequisites

- Database connection basics with Drizzle  
- Drizzle PostgreSQL drivers  
- Familiarity with [Supabase documentation](https://supabase.com/docs)

#### Step 1: Install Packages

    ```bash
    npm i drizzle-orm postgres
    npm i -D drizzle-kit
    ```

    ```bash
    yarn add drizzle-orm postgres
    yarn add -D drizzle-kit
    ```

    ```bash
    pnpm add drizzle-orm postgres
    pnpm add -D drizzle-kit
    ```

    ```bash
    bun add drizzle-orm postgres
    bun add -D drizzle-kit
    ```

#### Step 2: Initialize the Driver and Make a Query

##### Basic Initialization

    ```javascript
    import { drizzle } from 'drizzle-orm/postgres-js';

    const db = drizzle(process.env.DATABASE_URL);

    const allUsers = await db.select().from(...);
    ```

##### Using an Existing Driver

    ```javascript
    import { drizzle } from 'drizzle-orm/postgres-js';
    import postgres from 'postgres';

    const client = postgres(process.env.DATABASE_URL);
    const db = drizzle({ client });

    const allUsers = await db.select().from(...);
    ```

##### Connection Pooling with Supabase

For "Transaction" pool mode, disable prepared statements:

    ```javascript
    import { drizzle } from 'drizzle-orm/postgres-js';
    import postgres from 'postgres';

    const client = postgres(process.env.DATABASE_URL, { prepare: false });
    const db = drizzle({ client });

    const allUsers = await db.select().from(...);
    ```

#### Next Steps

- **Manage Schema**  
  - [Drizzle Schema](https://drizzle.link/docs/sql-schema-declaration)  
  - [PostgreSQL Data Types](https://drizzle.link/docs/column-types/pg)  
  - [Indexes and Constraints](https://drizzle.link/docs/indexes-constraints)  
  - [Database Views](https://drizzle.link/docs/views)  
  - [Database Schemas](https://drizzle.link/docs/schemas)  
  - [Sequences](https://drizzle.link/docs/sequences)  
  - [Extensions](https://drizzle.link/docs/extensions/pg)

- **Query Data**  
  - [Relational Queries](https://drizzle.link/docs/rqb)  
  - [Select](https://drizzle.link/docs/select)  
  - [Insert](https://drizzle.link/docs/insert)  
  - [Update](https://drizzle.link/docs/update)  
  - [Delete](https://drizzle.link/docs/delete)  
  - [Filters](https://drizzle.link/docs/operators)  
  - [Joins](https://drizzle.link/docs/joins)  
  - [SQL Operator](https://drizzle.link/docs/sql)

---

## Drizzle Queries + CRUD

### File Origin: `docs-data-querying.md`

#### Prerequisites

- [Schema Fundamentals](/docs/sql-schema-declaration)  
- [Connection Fundamentals](/docs/connect-overview)

#### Querying with Drizzle

Drizzle allows multiple ways to query your database, including SQL-like syntax or a more abstracted relational syntax.

##### SQL-like Syntax

    ```javascript
    await db
      .select()
      .from(posts)
      .leftJoin(comments, eq(posts.id, comments.post_id))
      .where(eq(posts.id, 10))
    ```

Equivalent SQL:

    ```sql
    SELECT *
    FROM posts
    LEFT JOIN comments ON posts.id = comments.post_id
    WHERE posts.id = 10
    ```

##### Insert

    ```javascript
    await db.insert(users).values({ email: 'user@gmail.com' })
    ```

##### Update

    ```javascript
    await db.update(users)
            .set({ email: 'user@gmail.com' })
            .where(eq(users.id, 1))
    ```

##### Delete

    ```javascript
    await db.delete(users).where(eq(users.id, 1))
    ```

##### Relational Syntax

    ```javascript
    const result = await db.query.users.findMany({
      with: {
        posts: true
      },
    });
    ```

#### Advanced Querying

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

##### Subqueries

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

---

## SQL Delete Operations

### File Origin: `docs-delete.md`

#### Basic Delete

    ```javascript
    await db.delete(users);
    await db.delete(users).where(eq(users.name, 'Dan'));
    ```

#### Limit Clause

    ```javascript
    await db.delete(users).where(eq(users.name, 'Dan')).limit(2);
    ```

#### Order By Clause

    ```javascript
    import { asc, desc } from 'drizzle-orm';

    await db.delete(users).where(eq(users.name, 'Dan')).orderBy(users.name);
    await db.delete(users).where(eq(users.name, 'Dan')).orderBy(desc(users.name));
    ```

#### Delete with Return

PostgreSQL & SQLite can return:

    ```javascript
    const deletedUser = await db.delete(users)
      .where(eq(users.name, 'Dan'))
      .returning();
    ```

#### WITH DELETE Clause

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

---

## Drizzle with MySQL

### File Origin: `docs-get-started-mysql.md`

To use Drizzle with MySQL, use the `mysql2` driver. Drizzle ORM supports `mysql2` via `drizzle-orm/mysql2`.

#### Step 1 - Install Packages

    ```bash
    npm i drizzle-orm mysql2
    npm i -D drizzle-kit
    ```

    ```bash
    yarn add drizzle-orm mysql2
    yarn add -D drizzle-kit
    ```

    ```bash
    pnpm add drizzle-orm mysql2
    pnpm add -D drizzle-kit
    ```

    ```bash
    bun add drizzle-orm mysql2
    bun add -D drizzle-kit
    ```

#### Step 2 - Initialize the Driver and Make a Query

    ```javascript
    import { drizzle } from "drizzle-orm/mysql2";

    const db = drizzle(process.env.DATABASE_URL);

    const response = await db.select().from(...);
    ```

##### Initialization with Configuration

    ```javascript
    import { drizzle } from "drizzle-orm/mysql2";

    const db = drizzle({ connection: { uri: process.env.DATABASE_URL }});
    const response = await db.select().from(...);
    ```

##### Using an Existing Driver

###### Client Connection

    ```javascript
    import { drizzle } from "drizzle-orm/mysql2";
    import mysql from "mysql2/promise";

    const connection = await mysql.createConnection({
      host: "host",
      user: "user",
      database: "database",
    });

    const db = drizzle({ client: connection });
    ```

###### Pool Connection

    ```javascript
    import { drizzle } from "drizzle-orm/mysql2";
    import mysql from "mysql2/promise";

    const poolConnection = mysql.createPool({
      host: "host",
      user: "user",
      database: "database",
    });

    const db = drizzle({ client: poolConnection });
    ```

#### Important Notes

For built-in `migrate` with DDL migrations, use a single `client` connection. For querying, `client` or `pool` are fine.

#### What’s Next?

- **Manage Schema**  
  - [Drizzle Schema](/docs/sql-schema-declaration)  
  - [PostgreSQL Data Types](/docs/column-types/pg)  
  - [Indexes and Constraints](/docs/indexes-constraints)  
  - [Database Views](/docs/views)  
  - [Database Schemas](/docs/schemas)  
  - [Sequences](/docs/sequences)  
  - [Extensions](/docs/extensions/pg)

- **Query Data**  
  - [Relational Queries](/docs/rqb)  
  - [Select](/docs/select)  
  - [Insert](/docs/insert)  
  - [Update](/docs/update)  
  - [Delete](/docs/delete)  
  - [Filters](/docs/operators)  
  - [Joins](/docs/joins)  
  - [sql`` Operator](/docs/sql)

---

## Drizzle and PostgreSQL Integration Guide

### File Origin: `docs-get-started-postgresql.md`

#### Prerequisites

- [node-postgres](https://node-postgres.com/)  
- [postgres.js](https://github.com/porsager/postgres?tab=readme-ov-file#usage)

#### Differences Between Drivers

- **node-postgres**: can install `pg-native` for ~10% speed boost.  
- **postgres.js**: uses prepared statements by default.

#### node-postgres Setup

##### Step 1 - Install Packages

    ```bash
    npm i drizzle-orm pg
    npm i -D drizzle-kit @types/pg
    ```

    ```bash
    yarn add drizzle-orm pg
    yarn add -D drizzle-kit @types/pg
    ```

    ```bash
    pnpm add drizzle-orm pg
    pnpm add -D drizzle-kit @types/pg
    ```

    ```bash
    bun add drizzle-orm pg
    bun add -D drizzle-kit @types/pg
    ```

##### Step 2 - Initialize the Driver

###### Basic Configuration

    ```javascript
    import { drizzle } from 'drizzle-orm/node-postgres';

    const db = drizzle(process.env.DATABASE_URL);
    const result = await db.execute('select 1');
    ```

###### With Custom Configuration

    ```javascript
    import { drizzle } from 'drizzle-orm/node-postgres';

    const db = drizzle({
      connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: true
      }
    });
    const result = await db.execute('select 1');
    ```

###### Using an Existing Driver

    ```javascript
    import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
    import { drizzle } from "drizzle-orm/node-postgres";
    import { Pool } from "pg";

    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    const db = drizzle({ client: pool });
    const result = await db.execute('select 1');
    ```

#### postgres.js Setup

##### Step 1 - Install Packages

    ```bash
    npm i drizzle-orm postgres
    npm i -D drizzle-kit
    ```

    ```bash
    yarn add drizzle-orm postgres
    yarn add -D drizzle-kit
    ```

    ```bash
    pnpm add drizzle-orm postgres
    pnpm add -D drizzle-kit
    ```

    ```bash
    bun add drizzle-orm postgres
    bun add -D drizzle-kit
    ```

##### Step 2 - Initialize the Driver

###### Basic Configuration

    ```javascript
    import { drizzle } from 'drizzle-orm/postgres-js';

    const db = drizzle(process.env.DATABASE_URL);
    const result = await db.execute('select 1');
    ```

###### With Custom Configuration

    ```javascript
    import { drizzle } from 'drizzle-orm/postgres-js';

    const db = drizzle({
      connection: {
        url: process.env.DATABASE_URL,
        ssl: true
      }
    });
    const result = await db.execute('select 1');
    ```

###### Using an Existing Driver

    ```javascript
    import { drizzle } from 'drizzle-orm/postgres-js';
    import postgres from 'postgres';

    const queryClient = postgres(process.env.DATABASE_URL);
    const db = drizzle({ client: queryClient });
    const result = await db.execute('select 1');
    ```

#### Next Steps

- **Manage Schema**  
- **Query Data**

---

## Drizzle and SQLite Integration

### File Origin: `docs-get-started-sqlite.md`

Drizzle provides native support for SQLite connections via `libsql` and `better-sqlite3`.

#### libsql Driver

- Connects to SQLite files and Turso remote DBs  
- More ALTER statements  
- Encryption at rest  

##### Installation

    ```bash
    npm i drizzle-orm @libsql/client
    npm i -D drizzle-kit
    ```

    ```bash
    yarn add drizzle-orm @libsql/client
    yarn add -D drizzle-kit
    ```

    ```bash
    pnpm add drizzle-orm @libsql/client
    pnpm add -D drizzle-kit
    ```

    ```bash
    bun add drizzle-orm @libsql/client
    bun add -D drizzle-kit
    ```

##### Initialize the Driver

    ```javascript
    import { drizzle } from 'drizzle-orm/libsql';

    const db = drizzle({ connection: {
      url: process.env.DATABASE_URL,
      authToken: process.env.DATABASE_AUTH_TOKEN
    }});
    ```

##### Making a Query

    ```javascript
    import { drizzle } from 'drizzle-orm/libsql';

    const db = drizzle(process.env.DATABASE_URL);
    const result = await db.execute('select 1');
    ```

#### better-sqlite3 Driver

##### Installation

    ```bash
    npm i drizzle-orm better-sqlite3
    npm i -D drizzle-kit @types/better-sqlite3
    ```

    ```bash
    yarn add drizzle-orm better-sqlite3
    yarn add -D drizzle-kit @types/better-sqlite3
    ```

    ```bash
    pnpm add drizzle-orm better-sqlite3
    pnpm add -D drizzle-kit @types/better-sqlite3
    ```

    ```bash
    bun add drizzle-orm better-sqlite3
    bun add -D drizzle-kit @types/better-sqlite3
    ```

##### Initialize the Driver

    ```javascript
    import { drizzle } from 'drizzle-orm/better-sqlite3';

    const db = drizzle(process.env.DATABASE_URL);
    const result = await db.execute('select 1');
    ```

##### Using an Existing Driver

    ```javascript
    import { drizzle } from 'drizzle-orm/better-sqlite3';
    import Database from 'better-sqlite3';

    const sqlite = new Database('sqlite.db');
    const db = drizzle({ client: sqlite });
    const result = await db.execute('select 1');
    ```

---

## Drizzle ORM SQL Insert Documentation

### File Origin: `docs-insert.md`

#### Insert One Row

    ```javascript
    await db.insert(users).values({ name: 'Andrew' });
    ```

#### Insert Returning

PostgreSQL & SQLite:

    ```javascript
    await db.insert(users).values({ name: "Dan" }).returning();
    ```

#### Insert $returningId

MySQL:

    ```javascript
    import { boolean, int, text, mysqlTable } from 'drizzle-orm/mysql-core';

    const usersTable = mysqlTable('users', {
      id: int('id').primaryKey(),
      name: text('name').notNull(),
      verified: boolean('verified').notNull().default(false),
    });

    const result = await db.insert(usersTable).values([
      { name: 'John' }, 
      { name: 'John1' }
    ]).$returningId();
    ```

#### Insert Multiple Rows

    ```javascript
    await db.insert(users).values([{ name: 'Andrew' }, { name: 'Dan' }]);
    ```

#### Upserts and Conflicts

- **On Conflict Do Nothing**
  
      ```javascript
      await db.insert(users)
        .values({ id: 1, name: 'John' })
        .onConflictDoNothing();
      ```

- **On Conflict Do Update**
  
      ```javascript
      await db.insert(users)
        .values({ id: 1, name: 'Dan' })
        .onConflictDoUpdate({
          target: users.id,
          set: { name: 'John' }
        });
      ```

#### On Duplicate Key Update (MySQL)

    ```javascript
    await db.insert(users)
      .values({ id: 1, name: 'John' })
      .onDuplicateKeyUpdate({ set: { name: 'John' } });
    ```

#### `with insert` Clause

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

#### Insert into … Select

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

---

## Drizzle ORM Joins Documentation

### File Origin: `docs-joins.md`

#### Join Types

- `INNER JOIN`
- `FULL JOIN`
- `LEFT JOIN`
- `RIGHT JOIN`

#### Left Join

    ```javascript
    const result = await db.select().from(users).leftJoin(pets, eq(users.id, pets.ownerId));
    ```

#### Right Join

    ```javascript
    const result = await db.select().from(users).rightJoin(pets, eq(users.id, pets.ownerId));
    ```

#### Inner Join

    ```javascript
    const result = await db.select().from(users).innerJoin(pets, eq(users.id, pets.ownerId));
    ```

#### Full Join

    ```javascript
    const result = await db.select().from(users).fullJoin(pets, eq(users.id, pets.ownerId));
    ```

#### Partial Select

    ```javascript
    await db.select({
      userId: users.id,
      petId: pets.id,
    }).from(users).leftJoin(pets, eq(users.id, pets.ownerId));
    ```

#### Aliases & Selfjoins

    ```javascript
    import { user } from "./schema";

    const parent = aliasedTable(user, "parent");
    const result = db
      .select()
      .from(user)
      .leftJoin(parent, eq(parent.id, user.parentId));
    ```

#### Aggregating Results

    ```javascript
    const rows = await db.select({
        user: users,
        pet: pets,
      })
      .from(users)
      .leftJoin(pets, eq(users.id, pets.ownerId))
      .all();

    // reduce to a nested structure
    const result = rows.reduce<Record<number, { user: User; pets: Pet[] }>>(...);
    ```

---

## Drizzle ORM: Filter and Conditional Operators

### File Origin: `docs-operators.md`

#### Common Imports

    ```javascript
    import { eq, ne, gt, gte, lt, lte, like, ilike, notIlike, exists, inArray, notInArray, between, notBetween, and, or, not } from "drizzle-orm";
    ```

#### Equality & Comparison

- `eq`, `ne`, `gt`, `gte`, `lt`, `lte`

#### Existence

- `exists`, `notExists`

#### Null Checks

- `isNull`, `isNotNull`

#### Array Operations

- `inArray`, `notInArray`, `between`, `notBetween`

#### Pattern Matching

- `like`, `ilike`, `notIlike`

#### Logical Operators

- `and`, `or`, `not`

#### Array Specific

- `arrayContains`, `arrayContained`, `arrayOverlaps`

---

## Drizzle ORM Documentation Overview

### File Origin: `docs-overview.md`

Drizzle ORM is a headless TypeScript ORM offering:

- **Relational and SQL-like Query APIs**  
- **Lightweight and Performant**  
- **TypeScript Support**  
- **Zero Dependencies**  

#### SQL-like Approach

    ```typescript
    await db
      .select()
      .from(countries)
      .leftJoin(cities, eq(cities.countryId, countries.id))
      .where(eq(countries.id, 10));
    ```

---

## Drizzle Query Utilities

### File Origin: `docs-query-utils.md`

#### $count

`db.$count()` is a utility for `count(*)`.

    ```javascript
    const count = await db.$count(users);
    const count = await db.$count(users, eq(users.name, "Dan"));
    ```

#### Subqueries

Useful in subqueries:

    ```javascript
    const users = await db.select({
      ...users,
      postsCount: db.$count(posts, eq(posts.authorId, users.id)),
    }).from(users);
    ```

#### Relational Queries

    ```javascript
    const users = await db.query.users.findMany({
      extras: {
        postsCount: db.$count(posts, eq(posts.authorId, users.id)),
      },
    });
    ```

---

## Drizzle ORM Documentation

### File Origin: `docs-rqb.md`

Drizzle ORM is a typed layer on top of SQL with strong TypeScript support.  

#### Example Schema

    ```typescript
    import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core';
    import { relations } from 'drizzle-orm';

    export const users = pgTable('users', {
        id: serial('id').primaryKey(),
        name: text('name').notNull(),
    });

    export const posts = pgTable('posts', {
        id: serial('id').primaryKey(),
        content: text('content').notNull(),
        authorId: integer('author_id').notNull(),
    });
    ```

#### Relational Queries

    ```typescript
    const users = await db.query.users.findMany({
        with: {
            posts: true,
        },
    });
    ```

#### Partial Fields Select

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

---

## SQL Select

### File Origin: `docs-select.md`

#### Table Definition Examples

    ```javascript
    import { pgTable, serial, text } from 'drizzle-orm/pg-core';
    // ...
    ```

#### Basic Select

    ```javascript
    const result = await db.select().from(users);
    ```

#### Partial Select

    ```javascript
    const result = await db.select({
      field1: users.id,
      field2: users.name,
    }).from(users);
    ```

#### Distinct Select

    ```javascript
    await db.selectDistinct().from(users).orderBy(users.id, users.name);
    ```

#### Filters

    ```javascript
    import { eq } from 'drizzle-orm';

    await db.select().from(users).where(eq(users.id, 42));
    ```

#### Limit & Offset

    ```javascript
    await db.select().from(users).limit(10).offset(10);
    ```

#### Order By

    ```javascript
    import { asc, desc } from 'drizzle-orm';

    await db.select().from(users).orderBy(users.name);
    ```

#### Aggregations

    ```javascript
    await db.select({
      age: users.age,
      count: sql<number>`cast(count(${users.id}) as int)`,
    })
    .from(users)
    .groupBy(users.age);
    ```

#### Iterator

    ```javascript
    const iterator = await db.select().from(users).iterator();

    for await (const row of iterator) {
      console.log(row);
    }
    ```

#### Index Hints (MySQL)

    ```javascript
    await db.select()
      .from(users, { useIndex: usersTableNameIndex })
      .where(eq(users.name, 'David'));
    ```

---

## Drizzle Schema Documentation

### File Origin: `docs-sql-schema-declaration.md`

#### Overview

Drizzle uses TypeScript to define schema, which Drizzle-Kit uses for migrations.

#### Organizing Schema Files

- **Single File**: all tables in `schema.ts`  
- **Multiple Files**: large projects

#### Defining Data Schema

- Tables, constraints, columns, etc.  
- Supports schemas, enums, sequences, views, materialized views

#### Example

    ```typescript
    import { pgTable, integer } from "drizzle-orm/pg-core"

    export const users = pgTable('users', {
      id: integer()
    });
    ```

#### Camel and Snake Casing

    ```typescript
    const db = drizzle({ connection: process.env.DATABASE_URL, casing: 'snake_case' })
    ```

#### Example PostgreSQL

    ```typescript
    import { AnyPgColumn } from "drizzle-orm/pg-core";
    import { pgEnum, pgTable } from "drizzle-orm/pg-core";
    import * as t from "drizzle-orm/pg-core";

    export const rolesEnum = pgEnum("roles", ["guest", "user", "admin"]);

    export const users = pgTable(
      "users",
      {
        id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
        firstName: t.varchar("first_name", { length: 256 }),
        lastName: t.varchar("last_name", { length: 256 }),
        email: t.varchar().notNull(),
        invitee: t.integer().references((): AnyPgColumn => users.id),
        role: rolesEnum().default("guest"),
      },
      (table) => {
        return {
          emailIndex: t.uniqueIndex("email_idx").on(table.email),
        };
      }
    );
    ```

---

## Drizzle ORM SQL Template Documentation

### File Origin: `docs-sql.md`

#### Magical `sql` Operator

Allows writing type-safe, parameterized raw SQL queries in Drizzle.

    ```javascript
    import { sql } from 'drizzle-orm';

    const id = 69;
    await db.execute(sql`select * from ${usersTable} where ${usersTable.id} = ${id}`);
    ```

#### `sql<T>` for Custom Types

    ```javascript
    await db.select({
      lowerName: sql<string>`lower(${usersTable.name})`
    }).from(usersTable);
    ```

#### `sql.mapWith()`

Map driver values to Drizzle columns:

    ```javascript
    sql`...`.mapWith(usersTable.name);
    ```

#### `sql.as<T>()`

    ```javascript
    sql`lower(usersTable.name)`.as('lower_name');
    ```

#### `sql.raw()`

Insert raw SQL:

    ```javascript
    sql.raw(`select * from users where id = ${12}`);
    ```

#### `sql.fromList()`, `sql.join()`, `sql.append()`, `sql.empty()`

Combine or manipulate multiple SQL chunks.

#### Convert `sql` to String and Params

    ```javascript
    import { PgDialect } from 'drizzle-orm/pg-core';

    const pgDialect = new PgDialect();
    pgDialect.sqlToQuery(sql`select * from ${usersTable} where ${usersTable.id} = ${12}`);
    ```

---

## SQL Update Documentation

### File Origin: `docs-update.md`

#### Basic Update

    ```javascript
    await db.update(users)
      .set({ name: 'Mr. Dan' })
      .where(eq(users.name, 'Dan'));
    ```

#### Limit Clause

    ```javascript
    await db.update(usersTable).set({ verified: true }).limit(2);
    ```

#### Order By Clause

    ```javascript
    import { asc, desc } from 'drizzle-orm';

    await db.update(usersTable).set({ verified: true }).orderBy(usersTable.name);
    ```

#### Update with Returning

PostgreSQL & SQLite:

    ```javascript
    const updatedUserId: { updatedId: number }[] = await db.update(users)
      .set({ name: 'Mr. Dan' })
      .where(eq(users.name, 'Dan'))
      .returning({ updatedId: users.id });
    ```

#### `WITH` Update Clause

    ```javascript
    const averagePrice = db.$with('average_price').as(
      db.select({ value: sql`avg(${products.price})`.as('value') }).from(products)
    );

    await db.with(averagePrice)
      .update(products)
      .set({ cheap: true })
      .where(lt(products.price, sql`(select * from ${averagePrice})`))
      .returning({ id: products.id });
    ```

#### Update … from

    ```javascript
    await db
      .update(users)
      .set({ cityId: cities.id })
      .from(cities)
      .where(and(eq(cities.name, 'Seattle'), eq(users.name, 'John')));
    ```

---

## Drizzle ORM: Conditional Filters in Queries

### File Origin: `guides-conditional-filters-in-query.md`

#### Using Conditional Filters

    ```javascript
    import { ilike } from 'drizzle-orm';

    const searchPosts = async (term?: string) => {
      await db
        .select()
        .from(posts)
        .where(term ? ilike(posts.title, term) : undefined);
    };
    ```

#### Combining Conditional Filters

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
    ```

#### Reusing Filters Across Projects

    ```javascript
    import { SQL, ilike, inArray, gt } from 'drizzle-orm';

    const filters: SQL[] = [];
    filters.push(ilike(posts.title, 'AI'));
    filters.push(inArray(posts.category, ['Tech', 'Art', 'Science']));
    filters.push(gt(posts.views, 200));

    await db
      .select()
      .from(posts)
      .where(and(...filters));
    ```

#### Custom Filter Operators

    ```javascript
    const lenlt = (column: AnyColumn, value: number) => {
      return sql`length(${column}) < ${value}`;
    };
    ```

---

## Drizzle ORM: Include or Exclude Columns in Queries

### File Origin: `guides-include-or-exclude-columns.md`

#### Overview

Include or exclude columns in queries for PostgreSQL, MySQL, and SQLite.

#### Including Columns

    ```typescript
    await db.select().from(posts);
    ```

#### Including Specific Columns

    ```typescript
    await db.select({ title: posts.title }).from(posts);
    ```

#### Including All Columns with Extra Columns

    ```typescript
    import { getTableColumns, sql } from 'drizzle-orm';

    await db
      .select({
        ...getTableColumns(posts),
        titleLength: sql<number>`length(${posts.title})`,
      })
      .from(posts);
    ```

#### Excluding Columns

    ```typescript
    const { content, ...rest } = getTableColumns(posts);

    await db.select({ ...rest }).from(posts);
    ```

#### Including or Excluding Columns with Joins

    ```typescript
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

---

**End of Comprehensive Documentation**  
