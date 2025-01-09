# Drizzle ORM: Filter and Conditional Operators

Drizzle ORM supports a variety of filter and conditional operators across multiple SQL dialects, including PostgreSQL, MySQL, SQLite, and SingleStore. Below is a comprehensive guide on how to use these operators.

## Importing Operators

You can import all filter and conditional operators from `drizzle-orm`:

```javascript
import { eq, ne, gt, gte, ... } from "drizzle-orm";
```

## Operators

### Equality and Inequality

#### `eq` - Equal to

```javascript
import { eq } from "drizzle-orm";

db.select().from(table).where(eq(table.column, 5));
// SELECT * FROM table WHERE table.column = 5

db.select().from(table).where(eq(table.column1, table.column2));
// SELECT * FROM table WHERE table.column1 = table.column2
```

#### `ne` - Not equal to

```javascript
import { ne } from "drizzle-orm";

db.select().from(table).where(ne(table.column, 5));
// SELECT * FROM table WHERE table.column <> 5

db.select().from(table).where(ne(table.column1, table.column2));
// SELECT * FROM table WHERE table.column1 <> table.column2
```

### Comparison

#### `gt` - Greater than

```javascript
import { gt } from "drizzle-orm";

db.select().from(table).where(gt(table.column, 5));
// SELECT * FROM table WHERE table.column > 5

db.select().from(table).where(gt(table.column1, table.column2));
// SELECT * FROM table WHERE table.column1 > table.column2
```

#### `gte` - Greater than or equal to

```javascript
import { gte } from "drizzle-orm";

db.select().from(table).where(gte(table.column, 5));
// SELECT * FROM table WHERE table.column >= 5

db.select().from(table).where(gte(table.column1, table.column2));
// SELECT * FROM table WHERE table.column1 >= table.column2
```

#### `lt` - Less than

```javascript
import { lt } from "drizzle-orm";

db.select().from(table).where(lt(table.column, 5));
// SELECT * FROM table WHERE table.column < 5

db.select().from(table).where(lt(table.column1, table.column2));
// SELECT * FROM table WHERE table.column1 < table.column2
```

#### `lte` - Less than or equal to

```javascript
import { lte } from "drizzle-orm";

db.select().from(table).where(lte(table.column, 5));
// SELECT * FROM table WHERE table.column <= 5

db.select().from(table).where(lte(table.column1, table.column2));
// SELECT * FROM table WHERE table.column1 <= table.column2
```

### Existence

#### `exists`

```javascript
import { exists } from "drizzle-orm";

const query = db.select().from(table2);
db.select().from(table).where(exists(query));
// SELECT * FROM table WHERE EXISTS (SELECT * from table2)
```

#### `notExists`

```javascript
import { notExists } from "drizzle-orm";

const query = db.select().from(table2);
db.select().from(table).where(notExists(query));
// SELECT * FROM table WHERE NOT EXISTS (SELECT * from table2)
```

### Null Checks

#### `isNull`

```javascript
import { isNull } from "drizzle-orm";

db.select().from(table).where(isNull(table.column));
// SELECT * FROM table WHERE table.column IS NULL
```

#### `isNotNull`

```javascript
import { isNotNull } from "drizzle-orm";

db.select().from(table).where(isNotNull(table.column));
// SELECT * FROM table WHERE table.column IS NOT NULL
```

### Array Operations

#### `inArray`

```javascript
import { inArray } from "drizzle-orm";

db.select().from(table).where(inArray(table.column, [1, 2, 3, 4]));
// SELECT * FROM table WHERE table.column in (1, 2, 3, 4)

const query = db.select({ data: table2.column }).from(table2);
db.select().from(table).where(inArray(table.column, query));
// SELECT * FROM table WHERE table.column IN (SELECT table2.column FROM table2)
```

#### `notInArray`

```javascript
import { notInArray } from "drizzle-orm";

db.select().from(table).where(notInArray(table.column, [1, 2, 3, 4]));
// SELECT * FROM table WHERE table.column NOT in (1, 2, 3, 4)

const query = db.select({ data: table2.column }).from(table2);
db.select().from(table).where(notInArray(table.column, query));
// SELECT * FROM table WHERE table.column NOT IN (SELECT table2.column FROM table2)
```

#### `between`

```javascript
import { between } from "drizzle-orm";

db.select().from(table).where(between(table.column, 2, 7));
// SELECT * FROM table WHERE table.column BETWEEN 2 AND 7
```

#### `notBetween`

```javascript
import { notBetween } from "drizzle-orm";

db.select().from(table).where(notBetween(table.column, 2, 7));
// SELECT * FROM table WHERE table.column NOT BETWEEN 2 AND 7
```

### Pattern Matching

#### `like`

```javascript
import { like } from "drizzle-orm";

db.select().from(table).where(like(table.column, "%llo wor%"));
// SELECT * FROM table WHERE table.column LIKE '%llo wor%'
```

#### `ilike`

```javascript
import { ilike } from "drizzle-orm";

db.select().from(table).where(ilike(table.column, "%llo wor%"));
// SELECT * FROM table WHERE table.column ILIKE '%llo wor%'
```

#### `notIlike`

```javascript
import { notIlike } from "drizzle-orm";

db.select().from(table).where(notIlike(table.column, "%llo wor%"));
// SELECT * FROM table WHERE table.column NOT ILIKE '%llo wor%'
```

### Logical Operators

#### `not`

```javascript
import { eq, not } from "drizzle-orm";

db.select().from(table).where(not(eq(table.column, 5)));
// SELECT * FROM table WHERE NOT (table.column = 5)
```

#### `and`

```javascript
import { gt, lt, and } from "drizzle-orm";

db.select().from(table).where(and(gt(table.column, 5), lt(table.column, 7)));
// SELECT * FROM table WHERE (table.column > 5 AND table.column < 7)
```

#### `or`

```javascript
import { gt, lt, or } from "drizzle-orm";

db.select().from(table).where(or(gt(table.column, 5), lt(table.column, 7)));
// SELECT * FROM table WHERE (table.column > 5 OR table.column < 7)
```

### Array Specific

#### `arrayContains`

```javascript
import { arrayContains } from "drizzle-orm";

const contains = await db.select({ id: posts.id }).from(posts)
  .where(arrayContains(posts.tags, ['Typescript', 'ORM']));

const withSubQuery = await db.select({ id: posts.id }).from(posts)
  .where(arrayContains(
    posts.tags,
    db.select({ tags: posts.tags }).from(posts).where(eq(posts.id, 1)),
  ));
// select "id" from "posts" where "posts"."tags" @> {Typescript,ORM};
// select "id" from "posts" where "posts"."tags" @> (select "tags" from "posts" where "posts"."id" = 1);
```

#### `arrayContained`

```javascript
import { arrayContained } from "drizzle-orm";

const contained = await db.select({ id: posts.id }).from(posts)
  .where(arrayContained(posts.tags, ['Typescript', 'ORM']));
// select "id" from "posts" where "posts"."tags" <@ {Typescript,ORM};
```

#### `arrayOverlaps`

```javascript
import { arrayOverlaps } from "drizzle-orm";

const overlaps = await db.select({ id: posts.id }).from(posts)
  .where(arrayOverlaps(posts.tags, ['Typescript', 'ORM']));
// select "id" from "posts" where "posts"."tags" && {Typescript,ORM}
```