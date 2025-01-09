# Drizzle and SQLite Integration

Drizzle provides native support for SQLite connections using the `libsql` and `better-sqlite3` drivers. Below are the key differences and setup instructions for each driver.

## libsql Driver

### Key Features
- Connects to both SQLite files and Turso remote databases.
- Supports more ALTER statements for easier schema management.
- Native support for encryption at rest.
- Extensive support for SQLite extensions.

### Installation

#### Using npm
```bash
npm i drizzle-orm @libsql/client
npm i -D drizzle-kit
```

#### Using yarn
```bash
yarn add drizzle-orm @libsql/client
yarn add -D drizzle-kit
```

#### Using pnpm
```bash
pnpm add drizzle-orm @libsql/client
pnpm add -D drizzle-kit
```

#### Using bun
```bash
bun add drizzle-orm @libsql/client
bun add -D drizzle-kit
```

### Initialize the Driver

Drizzle supports all variations of the `@libsql/client` driver:

- `@libsql/client`: Defaults to `node` import, switches to `web` for bundlers.
- `@libsql/client/node`: Node-compatible, supports `:memory:`, `file`, `wss`, `http`, and `turso` protocols.
- `@libsql/client/web`: For fullstack web frameworks like Next.js, Nuxt, Astro, etc.
- `@libsql/client/http`: For `http` and `https` protocols.
- `@libsql/client/ws`: For `ws` and `wss` protocols.
- `@libsql/client/sqlite3`: For `:memory:` and `file` protocols.
- `@libsql/client-wasm`: Experimental package for WASM.

#### Example Code

```javascript
import { drizzle } from 'drizzle-orm/libsql';

const db = drizzle({ connection: {
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN
}});
```

### Making a Query

```javascript
import { drizzle } from 'drizzle-orm/libsql';

const db = drizzle(process.env.DATABASE_URL);
const result = await db.execute('select 1');
```

## better-sqlite3 Driver

### Installation

#### Using npm
```bash
npm i drizzle-orm better-sqlite3
npm i -D drizzle-kit @types/better-sqlite3
```

#### Using yarn
```bash
yarn add drizzle-orm better-sqlite3
yarn add -D drizzle-kit @types/better-sqlite3
```

#### Using pnpm
```bash
pnpm add drizzle-orm better-sqlite3
pnpm add -D drizzle-kit @types/better-sqlite3
```

#### Using bun
```bash
bun add drizzle-orm better-sqlite3
bun add -D drizzle-kit @types/better-sqlite3
```

### Initialize the Driver and Make a Query

```javascript
import { drizzle } from 'drizzle-orm/better-sqlite3';

const db = drizzle(process.env.DATABASE_URL);
const result = await db.execute('select 1');
```

### Using an Existing Driver

```javascript
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

const sqlite = new Database('sqlite.db');
const db = drizzle({ client: sqlite });
const result = await db.execute('select 1');
```

## Next Steps

- **Manage Schema**: [Drizzle Schema](/docs/sql-schema-declaration), [PostgreSQL Data Types](/docs/column-types/pg), [Indexes and Constraints](/docs/indexes-constraints), [Database Views](/docs/views), [Database Schemas](/docs/schemas), [Sequences](/docs/sequences), [Extensions](/docs/extensions/pg)
- **Query Data**: [Relational Queries](/docs/rqb), [Select](/docs/select), [Insert](/docs/insert), [Update](/docs/update), [Delete](/docs/delete), [Filters](/docs/operators), [Joins](/docs/joins), [sql`` Operator](/docs/sql)