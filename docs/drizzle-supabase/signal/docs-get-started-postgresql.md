# Drizzle and PostgreSQL Integration Guide

## Prerequisites

This guide assumes familiarity with:

- Database [connection basics](/docs/connect-overview) with Drizzle
- [node-postgres basics](https://node-postgres.com/)
- [postgres.js basics](https://github.com/porsager/postgres?tab=readme-ov-file#usage)

Drizzle has native support for PostgreSQL connections using the `node-postgres` and `postgres.js` drivers.

## Differences Between Drivers

- **node-postgres**: 
  - You can install `pg-native` to boost speed by approximately 10%.
  - Supports providing type parsers on a per-query basis. See [Types Docs](https://node-postgres.com/features/queries#types).
- **postgres.js**:
  - Uses prepared statements by default, which may need to be disabled in certain environments like AWS.

## node-postgres Setup

### Step 1 - Install Packages

#### Using npm
```bash
npm i drizzle-orm pg
npm i -D drizzle-kit @types/pg
```

#### Using yarn
```bash
yarn add drizzle-orm pg
yarn add -D drizzle-kit @types/pg
```

#### Using pnpm
```bash
pnpm add drizzle-orm pg
pnpm add -D drizzle-kit @types/pg
```

#### Using bun
```bash
bun add drizzle-orm pg
bun add -D drizzle-kit @types/pg
```

### Step 2 - Initialize the Driver and Make a Query

#### Basic Configuration
```javascript
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(process.env.DATABASE_URL);
const result = await db.execute('select 1');
```

#### With Custom Configuration
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

#### Using an Existing Driver
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

## postgres.js Setup

### Step 1 - Install Packages

#### Using npm
```bash
npm i drizzle-orm postgres
npm i -D drizzle-kit
```

#### Using yarn
```bash
yarn add drizzle-orm postgres
yarn add -D drizzle-kit
```

#### Using pnpm
```bash
pnpm add drizzle-orm postgres
pnpm add -D drizzle-kit
```

#### Using bun
```bash
bun add drizzle-orm postgres
bun add -D drizzle-kit
```

### Step 2 - Initialize the Driver and Make a Query

#### Basic Configuration
```javascript
import { drizzle } from 'drizzle-orm/postgres-js';

const db = drizzle(process.env.DATABASE_URL);
const result = await db.execute('select 1');
```

#### With Custom Configuration
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

#### Using an Existing Driver
```javascript
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const queryClient = postgres(process.env.DATABASE_URL);
const db = drizzle({ client: queryClient });
const result = await db.execute('select 1');
```

## Next Steps

- **Manage Schema**: [Drizzle Schema](/docs/sql-schema-declaration), [PostgreSQL data types](/docs/column-types/pg), [Indexes and Constraints](/docs/indexes-constraints), [Database Views](/docs/views), [Database Schemas](/docs/schemas), [Sequences](/docs/sequences), [Extensions](/docs/extensions/pg)
- **Query Data**: [Relational Queries](/docs/rqb), [Select](/docs/select), [Insert](/docs/insert), [Update](/docs/update), [Delete](/docs/delete), [Filters](/docs/operators), [Joins](/docs/joins), [sql`` operator](/docs/sql)