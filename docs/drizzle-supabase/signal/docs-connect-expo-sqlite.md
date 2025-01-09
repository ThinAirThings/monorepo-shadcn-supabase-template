# Drizzle ORM with Expo SQLite

## Overview

Drizzle ORM provides a comprehensive toolkit for integrating with Expo SQLite, a part of the Expo ecosystem for React Native applications. This integration supports the Hermes JavaScript runtime and Metro bundler.

### Key Features
- Native ORM driver for Expo SQLite
- Support for migration generation and bundling with Drizzle Kit
- Development tools plugin via Drizzle Studio for on-device database browsing
- Live Queries for reactive data updates

## Installation

You can install the necessary packages using npm, yarn, pnpm, or bun:

### Using npm
```bash
npm i drizzle-orm expo-sqlite@next
npm i -D drizzle-kit
```

### Using yarn
```bash
yarn add drizzle-orm expo-sqlite@next
yarn add -D drizzle-kit
```

### Using pnpm
```bash
pnpm add drizzle-orm expo-sqlite@next
pnpm add -D drizzle-kit
```

### Using bun
```bash
bun add drizzle-orm expo-sqlite@next
bun add -D drizzle-kit
```

## Basic Usage

### Database Initialization

```javascript
import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite/next";

const expo = openDatabaseSync("db.db");
const db = drizzle(expo);

await db.select().from(users);
```

### Live Queries

Use the `useLiveQuery` hook to make Drizzle queries reactive:

```javascript
import { useLiveQuery, drizzle } from 'drizzle-orm/expo-sqlite';
import { openDatabaseSync } from 'expo-sqlite/next';
import { Text } from 'react-native';
import * as schema from './schema';

const expo = openDatabaseSync('db.db', { enableChangeListener: true });
const db = drizzle(expo);

const App = () => {
  const { data } = useLiveQuery(db.select().from(schema.users));
  return <Text>{JSON.stringify(data)}</Text>;
};

export default App;
```

## Migrations with Drizzle Kit

### SQL Migration Generation

Drizzle Kit can be used to generate SQL migrations. Ensure SQL migrations are bundled into the app for Expo/React Native.

#### Install Babel Plugin

```bash
npm install babel-plugin-inline-import
```

#### Update Configuration Files

Update `babel.config.js`, `metro.config.js`, and `drizzle.config.ts`:

**babel.config.js**
```javascript
module.exports = function(api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [["inline-import", { "extensions": [".sql"] }]]
  };
};
```

**metro.config.js**
```javascript
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push('sql');

module.exports = config;
```

**drizzle.config.ts**
```typescript
import type { Config } from 'drizzle-kit';

export default {
  schema: './db/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  driver: 'expo',
} satisfies Config;
```

### Generate Migrations

After setting up your SQL schema and configuration files, generate migrations:

```bash
npx drizzle-kit generate
```

### Add Migrations to Your App

Import the `migrations.js` file into your Expo/React Native app and run migrations on startup using the `useMigrations` hook:

```javascript
import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite/next";
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from './drizzle/migrations';

const expoDb = openDatabaseSync("db.db");
const db = drizzle(expoDb);

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