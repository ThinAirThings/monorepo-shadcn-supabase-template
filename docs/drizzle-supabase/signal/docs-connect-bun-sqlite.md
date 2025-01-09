# Drizzle <> Bun SQLite Integration Guide

## Prerequisites

This guide assumes familiarity with:

- Database [connection basics](/docs/connect-overview) with Drizzle
- Bun - [website](https://bun.sh/docs)
- Bun SQLite driver - [docs](https://bun.sh/docs/api/sqlite)

Bun is a fast all-in-one JavaScript runtime. Drizzle ORM natively supports the [`bun:sqlite`](https://bun.sh/docs/api/sqlite) module, offering both **async** and **sync** APIs for synchronous drivers like `bun:sqlite`. It mirrors popular SQLite query methods such as `all`, `get`, `values`, and `run`.

## Step 1 - Install Packages

### Using npm
```bash
npm i drizzle-orm
npm i -D drizzle-kit
```

### Using yarn
```bash
yarn add drizzle-orm
yarn add -D drizzle-kit
```

### Using pnpm
```bash
pnpm add drizzle-orm
pnpm add -D drizzle-kit
```

### Using bun
```bash
bun add drizzle-orm
bun add -D drizzle-kit
```

## Step 2 - Initialize the Driver and Make a Query

### Basic Initialization
```javascript
import { drizzle } from 'drizzle-orm/bun-sqlite';

const db = drizzle();

const result = await db.select().from(...);
```

### Using an Existing Driver
```javascript
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';

const sqlite = new Database('sqlite.db');
const db = drizzle({ client: sqlite });

const result = await db.select().from(...);
```

### Using Sync APIs
```javascript
import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';

const sqlite = new Database('sqlite.db');
const db = drizzle({ client: sqlite });

const result = db.select().from(users).all();
const result = db.select().from(users).get();
const result = db.select().from(users).values();
const result = db.select().from(users).run();
```

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
- [sql`` operator](/docs/sql)