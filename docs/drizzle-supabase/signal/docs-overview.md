# Drizzle ORM Documentation

## Overview

Drizzle ORM is a headless TypeScript ORM designed to be simple, performant, and flexible. It supports both relational and SQL-like query APIs, making it versatile for accessing relational data. Drizzle is lightweight, typesafe, and serverless-ready by design.

## Key Features

- **Relational and SQL-like Query APIs**: Access your data using familiar SQL syntax or relational queries.
- **Lightweight and Performant**: Designed to be efficient and fast, suitable for serverless environments.
- **TypeScript Support**: Define and manage database schemas directly in TypeScript.
- **Zero Dependencies**: Drizzle operates with no external dependencies, ensuring a slim and efficient setup.

## Headless ORM

Drizzle is a library with complementary opt-in tools, allowing you to build projects without being constrained by the ORM. It supports defining and managing database schemas in TypeScript and accessing data in a SQL-like or relational manner.

## SQL-like Approach

Drizzle embraces SQL, minimizing the learning curve by allowing developers to use SQL syntax directly. This approach provides access to SQL schema declarations, queries, and automatic migrations.

### Example Code

#### Accessing Data
```typescript
await db
  .select()
  .from(countries)
  .leftJoin(cities, eq(cities.countryId, countries.id))
  .where(eq(countries.id, 10));
```

#### Managing Schema
```typescript
export const countries = pgTable('countries', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
});

export const cities = pgTable('cities', {
  id: serial('id').primaryKey(),
  name: varchar('name'),
  countryId: integer('country_id').references(() => countries.id),
});
```

#### Generating Migrations
```sql
CREATE TABLE IF NOT EXISTS "countries" (
  "id" serial PRIMARY KEY NOT NULL,
  "name" varchar(256)
);

CREATE TABLE IF NOT EXISTS "cities" (
  "id" serial PRIMARY KEY NOT NULL,
  "name" varchar(256),
  "country_id" integer
);

ALTER TABLE "cities" ADD CONSTRAINT "cities_country_id_countries_id_fk" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE no action ON UPDATE no action;
```

## Queries API

Drizzle provides a Queries API for fetching relational nested data efficiently, ensuring that only one SQL query is executed.

### Example
```typescript
const result = await db.query.users.findMany({
  with: {
    posts: true
  },
});
```

## Serverless Compatibility

Drizzle is designed to be serverless-ready, with no dependencies and support for major SQL dialects like PostgreSQL, MySQL, and SQLite. It operates through standard database drivers, ensuring compatibility and performance.

## Community and Support

Drizzle has a growing community and offers support through its [Discord community](https://driz.link/discord) and [Twitter](https://twitter.com/drizzleorm).