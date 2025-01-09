# Drizzle ORM Joins Documentation

## Overview
Join clauses in SQL are used to combine two or more tables based on related columns. Drizzle ORM provides a syntax that balances SQL-likeness with type safety.

## Join Types
Drizzle ORM supports the following join types:
- `INNER JOIN`
- `FULL JOIN`
- `LEFT JOIN`
- `RIGHT JOIN`

### Table Schemas
```javascript
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
});

export const pets = pgTable('pets', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  ownerId: integer('owner_id').notNull().references(() => users.id),
});
```

### Left Join
```javascript
const result = await db.select().from(users).leftJoin(pets, eq(users.id, pets.ownerId));
```
SQL:
```sql
SELECT ... FROM "users" LEFT JOIN "pets" ON "users"."id" = "pets"."owner_id";
```
Result Type:
```javascript
const result: {
    user: {
        id: number;
        name: string;
    };
    pets: {
        id: number;
        name: string;
        ownerId: number;
    } | null;
}[];
```

### Right Join
```javascript
const result = await db.select().from(users).rightJoin(pets, eq(users.id, pets.ownerId));
```
SQL:
```sql
SELECT ... FROM "users" RIGHT JOIN "pets" ON "users"."id" = "pets"."owner_id";
```
Result Type:
```javascript
const result: {
    user: {
        id: number;
        name: string;
    } | null;
    pets: {
        id: number;
        name: string;
        ownerId: number;
    };
}[];
```

### Inner Join
```javascript
const result = await db.select().from(users).innerJoin(pets, eq(users.id, pets.ownerId));
```
SQL:
```sql
SELECT ... FROM "users" INNER JOIN "pets" ON "users"."id" = "pets"."owner_id";
```
Result Type:
```javascript
const result: {
    user: {
        id: number;
        name: string;
    };
    pets: {
        id: number;
        name: string;
        ownerId: number;
    };
}[];
```

### Full Join
```javascript
const result = await db.select().from(users).fullJoin(pets, eq(users.id, pets.ownerId));
```
SQL:
```sql
SELECT ... FROM "users" FULL JOIN "pets" ON "users"."id" = "pets"."owner_id";
```
Result Type:
```javascript
const result: {
    user: {
        id: number;
        name: string;
    } | null;
    pets: {
        id: number;
        name: string;
        ownerId: number;
    } | null;
}[];
```

## Partial Select
Drizzle ORM supports joins with partial select, automatically inferring return types based on the `.select({ ... })` structure.

Example:
```javascript
await db.select({
  userId: users.id,
  petId: pets.id,
}).from(users).leftJoin(pets, eq(users.id, pets.ownerId));
```
SQL:
```sql
SELECT "users"."id", "pets"."id" FROM "users" LEFT JOIN "pets" ON "users"."id" = "pets"."owner_id";
```
Result Type:
```javascript
const result: {
  userId: number;
  petId: number | null;
}[];
```

## Aliases & Selfjoins
Drizzle ORM supports table aliases, useful for selfjoins.

Example:
```javascript
import { user } from "./schema";

const parent = aliasedTable(user, "parent");
const result = db
  .select()
  .from(user)
  .leftJoin(parent, eq(parent.id, user.parentId));
```
SQL:
```sql
SELECT ... FROM "user" LEFT JOIN "user" "parent" ON "parent"."id" = "user"."parent_id";
```
Result Type:
```javascript
const result: {
    user: {
        id: number;
        name: string;
        parentId: number;
    };
    parent: {
        id: number;
        name: string;
        parentId: number;
    } | null;
}[];
```

## Aggregating Results
Drizzle ORM delivers name-mapped results from the driver without changing the structure.

Example:
```javascript
type User = typeof users.$inferSelect;
type Pet = typeof pets.$inferSelect;

const rows = db.select({
    user: users,
    pet: pets,
  }).from(users).leftJoin(pets, eq(users.id, pets.ownerId)).all();

const result = rows.reduce<Record<number, { user: User; pets: Pet[] }>>(
  (acc, row) => {
    const user = row.user;
    const pet = row.pet;

    if (!acc[user.id]) {
      acc[user.id] = { user, pets: [] };
    }

    if (pet) {
      acc[user.id].pets.push(pet);
    }

    return acc;
  },
  {}
);

// result type
const result: Record<number, {
    user: User;
    pets: Pet[];
}>;
```

## Many-to-One Example
```javascript
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { drizzle } from 'drizzle-orm/better-sqlite3';

const cities = sqliteTable('cities', {
  id: integer('id').primaryKey(),
  name: text('name'),
});

const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name'),
  cityId: integer('city_id').references(() => cities.id)
});

const db = drizzle();

const result = db.select().from(cities).leftJoin(users, eq(cities.id, users.cityId)).all();
```

## Many-to-Many Example
```javascript
const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name'),
});

const chatGroups = sqliteTable('chat_groups', {
  id: integer('id').primaryKey(),
  name: text('name'),
});

const usersToChatGroups = sqliteTable('usersToChatGroups', {
  userId: integer('user_id').notNull().references(() => users.id),
  groupId: integer('group_id').notNull().references(() => chatGroups.id),
});

// Querying user group with id 1 and all the participants(users)
db.select()
  .from(usersToChatGroups)
  .leftJoin(users, eq(usersToChatGroups.userId, users.id))
  .leftJoin(chatGroups, eq(usersToChatGroups.groupId, chatGroups.id))
  .where(eq(chatGroups.id, 1))
  .all();
```