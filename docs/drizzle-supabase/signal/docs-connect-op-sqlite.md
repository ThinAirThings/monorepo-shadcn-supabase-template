# Drizzle and OP SQLite Integration

## Overview
Drizzle ORM can be integrated with OP SQLite to execute SQL queries using the latest version of SQLite. This guide provides instructions on setting up and using Drizzle ORM with OP SQLite, including installation, configuration, and migration management.

## Installation

### Using npm
```bash
npm i drizzle-orm @op-engineering/op-sqlite
npm i -D drizzle-kit
```

### Using yarn
```bash
yarn add drizzle-orm @op-engineering/op-sqlite
yarn add -D drizzle-kit
```

### Using pnpm
```bash
pnpm add drizzle-orm @op-engineering/op-sqlite
pnpm add -D drizzle-kit
```

### Using bun
```bash
bun add drizzle-orm @op-engineering/op-sqlite
bun add -D drizzle-kit
```

## Basic Usage

```javascript
import { drizzle } from "drizzle-orm/op-sqlite";
import { open } from '@op-engineering/op-sqlite';

const opsqlite = open({
  name: 'myDB',
});
const db = drizzle(opsqlite);

await db.select().from(users);
```

## SQL Migrations with Drizzle Kit
Drizzle Kit can be used for generating SQL migrations. Ensure you understand how [Drizzle Kit migrations](/docs/kit-overview) work before proceeding.

### Install Babel Plugin
To bundle SQL migration files as strings directly into your bundle, install the Babel plugin:

```bash
npm install babel-plugin-inline-import
```

### Update Configuration Files
Update the following configuration files to support SQL migrations:

#### `babel.config.js`
```javascript
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'inline-import',
      {
        extensions: ['.sql'],
      },
    ],
  ],
};
```

#### `metro.config.js`
```javascript
const { getDefaultConfig } = require('@react-native/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push('sql');

module.exports = config;
```

#### `drizzle.config.ts`
Ensure to set `dialect: 'sqlite'` and `driver: 'expo'`:

```typescript
import type { Config } from 'drizzle-kit';

export default {
  schema: './db/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  driver: 'expo', // <--- very important
} satisfies Config;
```

### Generate Migrations
After creating the SQL schema file and `drizzle.config.ts`, generate migrations:

```bash
npx drizzle-kit generate
```

### Add Migrations to Your App
Import the `migrations.js` file into your Expo/React Native app from the `./drizzle` folder. Run migrations on application startup using the `useMigrations` hook or manually in the `useEffect` hook.

```javascript
import { drizzle } from "drizzle-orm/op-sqlite";
import { open } from '@op-engineering/op-sqlite';
import { useMigrations } from 'drizzle-orm/op-sqlite/migrator';
import migrations from './drizzle/migrations';

const opsqliteDb = open({
  name: 'myDB',
});

const db = drizzle(opsqliteDb);

export default function App() {
  const { success, error } = useMigrations(db, migrations);

  if (error) {
    return (
      <View>
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }

  if (!success) {
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }

  return ...your application component;
}
```
