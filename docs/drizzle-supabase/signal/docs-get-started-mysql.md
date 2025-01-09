# Drizzle with MySQL

To use Drizzle with a MySQL database, you should use the `mysql2` driver. According to the [official website](https://github.com/sidorares/node-mysql2), `mysql2` is a MySQL client for Node.js with a focus on performance. Drizzle ORM natively supports `mysql2` with the `drizzle-orm/mysql2` package.

## Step 1 - Install Packages

### Using npm
```bash
npm i drizzle-orm mysql2
npm i -D drizzle-kit
```

### Using yarn
```bash
yarn add drizzle-orm mysql2
yarn add -D drizzle-kit
```

### Using pnpm
```bash
pnpm add drizzle-orm mysql2
pnpm add -D drizzle-kit
```

### Using bun
```bash
bun add drizzle-orm mysql2
bun add -D drizzle-kit
```

## Step 2 - Initialize the Driver and Make a Query

### Basic Initialization
```javascript
import { drizzle } from "drizzle-orm/mysql2";

const db = drizzle(process.env.DATABASE_URL);

const response = await db.select().from(...);
```

### Initialization with Configuration
```javascript
import { drizzle } from "drizzle-orm/mysql2";

// You can specify any property from the mysql2 connection options
const db = drizzle({ connection: { uri: process.env.DATABASE_URL }});

const response = await db.select().from(...);
```

### Using an Existing Driver

#### Client Connection
```javascript
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "host",
  user: "user",
  database: "database",
  // other options
});

const db = drizzle({ client: connection });
```

#### Pool Connection
```javascript
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const poolConnection = mysql.createPool({
  host: "host",
  user: "user",
  database: "database",
  // other options
});

const db = drizzle({ client: poolConnection });
```

## Important Notes

For the built-in `migrate` function with DDL migrations, it is strongly encouraged to use a single `client` connection. For querying purposes, feel free to use either `client` or `pool` based on your business demands.

## What’s Next?

### Manage Schema
- [Drizzle Schema](/docs/sql-schema-declaration)
- [PostgreSQL Data Types](/docs/column-types/pg)
- [Indexes and Constraints](/docs/indexes-constraints)
- [Database Views](/docs/views)
- [Database Schemas](/docs/schemas)
- [Sequences](/docs/sequences)
- [Extensions](/docs/extensions/pg)

### Query Data
- [Relational Queries](/docs/rqb)
- [Select](/docs/select)
- [Insert](/docs/insert)
- [Update](/docs/update)
- [Delete](/docs/delete)
- [Filters](/docs/operators)
- [Joins](/docs/joins)
- [sql`` Operator](/docs/sql)