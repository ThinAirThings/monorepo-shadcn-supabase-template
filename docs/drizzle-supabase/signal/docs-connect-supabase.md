# Drizzle and Supabase Integration Guide

## Prerequisites

This guide assumes familiarity with:

- Database connection basics with Drizzle
- Drizzle PostgreSQL drivers

For more information, refer to the [official Supabase documentation](https://supabase.com/docs).

## Step 1: Install Packages

To get started, install the necessary packages using your preferred package manager:

### npm
```bash
npm i drizzle-orm postgres
npm i -D drizzle-kit
```

### yarn
```bash
yarn add drizzle-orm postgres
yarn add -D drizzle-kit
```

### pnpm
```bash
pnpm add drizzle-orm postgres
pnpm add -D drizzle-kit
```

### bun
```bash
bun add drizzle-orm postgres
bun add -D drizzle-kit
```

## Step 2: Initialize the Driver and Make a Query

### Basic Initialization

```javascript
import { drizzle } from 'drizzle-orm/postgres-js';

const db = drizzle(process.env.DATABASE_URL);

const allUsers = await db.select().from(...);
```

### Using an Existing Driver

```javascript
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres(process.env.DATABASE_URL);
const db = drizzle({ client });

const allUsers = await db.select().from(...);
```

### Connection Pooling with Supabase

If using connection pooling via Supabase with "Transaction" pool mode, disable prepared statements:

```javascript
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(process.env.DATABASE_URL, { prepare: false });
const db = drizzle({ client });

const allUsers = await db.select().from(...);
```

## Next Steps

### Manage Schema

- [Drizzle Schema](https://drizzle.link/docs/sql-schema-declaration)
- [PostgreSQL Data Types](https://drizzle.link/docs/column-types/pg)
- [Indexes and Constraints](https://drizzle.link/docs/indexes-constraints)
- [Database Views](https://drizzle.link/docs/views)
- [Database Schemas](https://drizzle.link/docs/schemas)
- [Sequences](https://drizzle.link/docs/sequences)
- [Extensions](https://drizzle.link/docs/extensions/pg)

### Query Data

- [Relational Queries](https://drizzle.link/docs/rqb)
- [Select](https://drizzle.link/docs/select)
- [Insert](https://drizzle.link/docs/insert)
- [Update](https://drizzle.link/docs/update)
- [Delete](https://drizzle.link/docs/delete)
- [Filters](https://drizzle.link/docs/operators)
- [Joins](https://drizzle.link/docs/joins)
- [SQL Operator](https://drizzle.link/docs/sql)