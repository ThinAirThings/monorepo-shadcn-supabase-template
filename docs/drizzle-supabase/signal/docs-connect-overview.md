# Drizzle ORM Documentation

## Database Connection with Drizzle

Drizzle ORM allows you to run SQL queries on your database using **database drivers**.

### Example Code

#### index.ts

```javascript
import { drizzle } from "drizzle-orm/node-postgres";
import { users } from "./schema";

const db = drizzle(process.env.DATABASE_URL);
const usersCount = await db.$count(users);
```

#### schema.ts

```javascript
import { pgTable, integer, text } from "drizzle-orm";

export const users = pgTable("users", {
  id: integer("id").generateAlwaysAsIdentity(),
  name: text("name"),
});
```

### Database Driver

Drizzle creates a **node-postgres** driver instance, accessible via `db.$client` if needed.

```javascript
import { drizzle } from "drizzle-orm/node-postgres";

const db = drizzle(process.env.DATABASE_URL);
const pool = db.$client;
```

Equivalent to:

```javascript
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const db = drizzle({ client: pool });
```

### Compatibility

Drizzle is compatible with **edge** or **serverless** runtimes, supporting various serverless databases:

- **Neon HTTP**

  ```javascript
  import { drizzle } from "drizzle-orm/neon-http";

  const db = drizzle(process.env.DATABASE_URL);
  ```

- **Neon with Websockets**

  ```javascript
  import { drizzle } from "drizzle-orm/neon-serverless";

  const db = drizzle(process.env.DATABASE_URL);
  ```

- **Vercel Postgres**

  ```javascript
  import { drizzle } from "drizzle-orm/vercel-postgres";

  const db = drizzle();
  ```

- **PlanetScale HTTP**

  ```javascript
  import { drizzle } from "drizzle-orm/planetscale";

  const db = drizzle(process.env.DATABASE_URL);
  ```

- **Cloudflare D1**

  ```javascript
  import { drizzle } from "drizzle-orm/d1";

  const db = drizzle({ connection: env.DB });
  ```

### Runtime Specific Drivers

- **Bun SQLite**

  ```javascript
  import { drizzle } from "drizzle-orm/bun-sqlite";

  const db = drizzle(); // In-memory db
  const db = drizzle("./sqlite.db");
  ```

- **Expo SQLite**

  ```javascript
  import { drizzle } from "drizzle-orm/expo-sqlite";
  import { openDatabaseSync } from "expo-sqlite/next";

  const expo = openDatabaseSync("db.db");
  const db = drizzle(expo);
  ```

### Database Connection URL

A typical database connection URL:

```
postgresql://alex:AbC123dEf@ep-cool-darkness-123456.us-east-2.aws.neon.tech/dbname
             └──┘ └───────┘ └─────────────────────────────────────────────┘ └────┘
              ʌ    ʌ          ʌ                                              ʌ
        role -│    │          │- hostname                                    │- database
                   │
                   │- password
```

## Next Steps

Explore per-driver documentation:

### PostgreSQL Drivers

- [PostgreSQL](/docs/get-started-postgresql)
- [Neon](/docs/connect-neon)
- [Vercel Postgres](/docs/connect-vercel-postgres)
- [Supabase](/docs/connect-supabase)
- [Xata](/docs/connect-xata)
- [PGLite](/docs/connect-pglite)

### MySQL Drivers

- [MySQL](/docs/get-started-mysql)
- [PlanetsScale](/docs/connect-planetscale)
- [TiDB](/docs/connect-tidb)

### SQLite Drivers

- [SQLite](/docs/get-started-sqlite)
- [Turso](/docs/connect-turso)
- [Cloudflare D1](/docs/connect-cloudflare-d1)
- [Bun SQLite](/docs/connect-bun-sqlite)

### Native SQLite

- [Expo SQLite](/docs/get-started/expo-new)
- [OP SQLite](/docs/connect-op-sqlite)
- [React Native SQLite](/docs/connect-react-native-sqlite)

### Others

- [Drizzle Proxy](/docs/connect-drizzle-proxy)