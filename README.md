<div align="center">
  # Full-Stack Technical Stack Documentation

  *A comprehensive guide to the full-stack implementation, from AI-powered features to cross-platform deployment.*

  [![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-000000?style=flat-square&logo=next.js)](https://nextjs.org)
  [![Powered by Supabase](https://img.shields.io/badge/Powered%20by-Supabase-3ECF8E?style=flat-square&logo=supabase)](https://supabase.com)
  [![AI Enhanced](https://img.shields.io/badge/AI-Enhanced-412991?style=flat-square&logo=openai)](https://openai.com)
  [![GraphQL API](https://img.shields.io/badge/GraphQL-API-E10098?style=flat-square&logo=graphql)](https://graphql.org)
</div>

## Introduction

{PROJECT_NAME} combines a type-safe, highly structured technology stack with cutting-edge AI capabilities. This documentation provides a holistic view of our system's architecture and development workflows.

### Key Objectives
- Present a transparent and well-structured overview of the entire stack
- Standardize patterns and practices for both web and mobile clients
- Highlight our commitment to robust, type-safe development
- Document our AI integration capabilities

### Target Audience
- Technical leads and senior engineers
- Technical stakeholders
- Internal engineering teams

### Prerequisites
- Familiarity with React, Next.js, and Apollo GraphQL
- Basic understanding of Supabase, PostgreSQL, and vector embeddings
- Experience with TypeScript and modern front-end tooling

---

# Table of Contents

- [Full-Stack Technical Stack Documentation](#full-stack-technical-stack-documentation)
  - [Introduction](#introduction)
    - [Key Objectives](#key-objectives)
    - [Target Audience](#target-audience)
    - [Prerequisites](#prerequisites)
- [Table of Contents](#table-of-contents)
  - [Contact For Help](#contact-for-help)
- [Tech Stack Overview](#tech-stack-overview)
  - [Frontend](#frontend)
  - [API Layer](#api-layer)
  - [Database](#database)
  - [AI/ML](#aiml)
  - [Infrastructure](#infrastructure)
  - [Development Tools](#development-tools)
- [GraphQL Setup with Supabase and Apollo Client](#graphql-setup-with-supabase-and-apollo-client)
  - [Common Commands](#common-commands)
    - [Development](#development)
    - [Database Management](#database-management)
    - [Building](#building)
    - [Type Generation](#type-generation)
  - [GraphQL Patterns](#graphql-patterns)
    - [1. Fragment-Based Component Architecture](#1-fragment-based-component-architecture)
    - [2. Apollo Client Configuration](#2-apollo-client-configuration)
    - [2.1 Authentication Link Setup](#21-authentication-link-setup)
    - [2.2 Initial Schema Configuration](#22-initial-schema-configuration)
    - [2.3 Viewer Pattern Implementation](#23-viewer-pattern-implementation)
    - [2.4 Collection Aggregation Setup](#24-collection-aggregation-setup)
    - [3. Mutation Patterns](#3-mutation-patterns)
    - [4. Form Integration Pattern](#4-form-integration-pattern)
    - [5. Soft Deletion Pattern](#5-soft-deletion-pattern)
    - [6. Edit State Management](#6-edit-state-management)
    - [7. GraphQL Code Generator Configuration](#7-graphql-code-generator-configuration)
      - [7.1 Client Preset Setup](#71-client-preset-setup)
      - [7.2 Apollo Client Type Configuration](#72-apollo-client-type-configuration)
      - [7.3 Fragment Hook Usage](#73-fragment-hook-usage)
    - [8. Cache Update Patterns](#8-cache-update-patterns)
      - [8.1 Mutation Cache Updates](#81-mutation-cache-updates)
    - [9. Configuration Gotchas](#9-configuration-gotchas)
  - [Best Practices](#best-practices)
  - [Common Pitfalls](#common-pitfalls)
  - [References](#references)
  - [Schema Management with Drizzle and Supabase](#schema-management-with-drizzle-and-supabase)
    - [Overview](#overview)
    - [Local Development Workflow](#local-development-workflow)
      - [1. Initial Setup](#1-initial-setup)
      - [2. Schema Definition](#2-schema-definition)
      - [3. Generating Migrations](#3-generating-migrations)
      - [4. Applying Migrations](#4-applying-migrations)
      - [5. Development Reset](#5-development-reset)
    - [Why Drizzle?](#why-drizzle)

## Contact For Help

For technical questions or implementation support, please contact:

**[YOUR_NAME]**  
[YOUR_TITLE]  
[YOUR_EMAIL]

---

# Tech Stack Overview

## Frontend
- **Framework**: Next.js 14 (App Router)
- **Mobile**: React Native with Expo
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Apollo Client or React Query
- **Forms**: React Hook Form + Zod

## API Layer
- **GraphQL**: pg_graphql (auto-generated from Postgres schema)
- **Type Generation**: GraphQL Codegen
- **Authentication**: Supabase Auth
- **File Storage**: Supabase Storage


## Database
- **Primary Database**: PostgreSQL (via Supabase)
- **Schema Management**: Drizzle ORM
- **Vector Storage**: pgvector extension
- **Migrations**: Drizzle Kit + Supabase CLI

## AI/ML
- **Text Generation**: OpenAI GPT-4o
- **Embeddings**: OpenAI text-embedding-3-large
- **Vector Search**: pgvector similarity search

## Infrastructure
- **Hosting**: Vercel
- **Database Hosting**: Supabase
- **Development**: Docker (local Supabase)
- **Version Control**: GitHub

## Development Tools
- **Package Manager**: pnpm
- **Monorepo**: pnpm
- **Type Checking**: TypeScript
- **Schema Validation**: Zod


# GraphQL Setup with Supabase and Apollo Client

This guide documents our GraphQL implementation patterns, focusing on fragment-based component architecture and type-safe data management.


## Common Commands

### Development

```bash
# Start Next.js development server with Turbopack
pnpm --filter web dev

# Start all development servers
pnpm -r run dev

# Watch and generate GraphQL types
pnpm --filter web codegen
```

### Database Management

```bash
# Start local Supabase
pnpm dlx supabase start

# Stop local Supabase
pnpm dlx supabase stop

# Reset local database
pnpm dlx supabase db reset

# Generate database types
pnpm db:types

# Generate new migration from schema changes
pnpm drizzle-kit generate --name=your-schema-change

# Apply migrations
pnpm dlx supabase migrations up
```

### Building

```bash
# Build Next.js application
pnpm --filter web build

# Build all packages except apps
pnpm --filter '!./apps/**' -r run build

# Build specific package
pnpm --filter package-name build
```

### Type Generation

```bash
# Generate Supabase types
pnpm dlx supabase gen types typescript --local > supabase/database.types.ts

# Generate GraphQL types (watch mode)
pnpm --filter web codegen

# Type check
pnpm typecheck
```

These commands cover the most common development tasks in the project. Run them from the root directory unless otherwise specified.


## GraphQL Patterns

### 1. Fragment-Based Component Architecture

We use a parent-child fragment pattern where:
- Parent components define the main query
- Child components declare their data requirements via fragments
- Data flows down through fragment props

Example pattern:

```typescript
// Parent Query (Page Level)
const ProfilePageQuery = graphql(`
    query ProfilePageQuery {
        viewer {
            ...ProfileHeaderFragment
            ...ProfileSectionsFragment
        }
    }
`)

// Child Component with Fragment
export const ProfileHeaderFragment = graphql(`
    fragment ProfileHeaderFragment on Users {
        nodeId
        firstName
        lastName
        city
        state
    }
`)

// Child Component Usage
export function ProfileHeader({
    query,
    children
}: {
    query: FragmentType<DocumentType<typeof ProfileHeaderFragment>>
    children?: React.ReactNode;
}) {
    const { data } = useFragment({
        fragment: ProfileHeaderFragment,
        from: query
    });
    // Render with fragment data
}
```

### 2. Apollo Client Configuration

Our Apollo Client setup focuses on normalized caching using nodeId:

```typescript
const httpLink = createHttpLink({
    // In development, this points to your local Supabase instance
    uri: 'http://127.0.0.1:54331/graphql/v1',
    // In production, this should be your Supabase project URL
    // uri: 'https://[YOUR_PROJECT_ID].supabase.co/graphql/v1',
});

const authLink = setContext(async (_, { headers }) => {
    const { data: { session } } = await createBrowserClient().auth.getSession();
    return {
        ...headers,
        headers: {
            ...headers,
            Authorization: session?.access_token ? `Bearer ${session.access_token}` : '',
        },
    };
});

export const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
        dataIdFromObject(responseObject) {
            // Use nodeId for cache normalization if available
            if ('nodeId' in responseObject) {
                return `${responseObject.nodeId}`
            }
            return defaultDataIdFromObject(responseObject)
        },
        typePolicies: {
            Query: {
                fields: {
                    // Note: Pagination fields commented out
                    // educationCollection: relayStylePagination(),
                    // workExperiencesCollection: relayStylePagination(),
                    node: {
                        read(_, { args, toReference }) {
                            const ref = toReference({
                                nodeId: args?.nodeId,
                            })
                            return ref
                        },
                    },
                },
            },
        },
    }),
    dataMasking: true
});
```

This configuration:
- Uses nodeId for cache normalization
- Implements authentication via Supabase session tokens
- Configures node field reading for GraphQL references
- Enables data masking for security

### 2.1 Authentication Link Setup

Configure the authentication link for Supabase:

```typescript
const httpLink = createHttpLink({
    // In development, this points to your local Supabase instance
    uri: 'http://127.0.0.1:54331/graphql/v1',
    // In production, this should be your Supabase project URL
    // uri: 'https://[YOUR_PROJECT_ID].supabase.co/graphql/v1',
});

const authLink = setContext(async (_, { headers }) => {
    const { data: { session } } = await createBrowserClient().auth.getSession();
    return {
        ...headers,
        headers: {
            ...headers,
            Authorization: session?.access_token ? `Bearer ${session.access_token}` : '',
        },
    };
});
```

**Important Production Note:**
- The `uri` in development points to your local Supabase instance
- In production, replace with your Supabase project URL (e.g., `https://[YOUR_PROJECT_ID].supabase.co/graphql/v1`)
- Ensure your environment variables are properly configured in your deployment platform

### 2.2 Initial Schema Configuration

Configure proper name inflection for GraphQL compatibility:

```sql
comment on schema public is '@graphql({"inflect_names": true})';
```

This ensures:
- SQL: snake_case (e.g., `work_experiences`)
- GraphQL: CamelCase (e.g., `WorkExperiences`)

### 2.3 Viewer Pattern Implementation

Implement the viewer pattern through a PostgreSQL function:

```sql
CREATE OR REPLACE FUNCTION public.viewer()
RETURNS public.users AS $$
    SELECT u.*
    FROM public.users u
    WHERE u.id = auth.uid()
    LIMIT 1;
$$ LANGUAGE sql STABLE;
```

Benefits:
- Returns a single user node directly
- Automatically ties to the authenticated user
- Provides built-in security through `auth.uid()`
- Enables clean GraphQL queries:

```graphql
query ProfilePage_Query {
    viewer {
        city
        state
        idealJobDescription
    }
}
```

### 2.4 Collection Aggregation Setup

Enable aggregation capabilities across collections:

```sql
DO $$ 
DECLARE 
    table_name text;
BEGIN
    FOR table_name IN 
        SELECT tablename 
        FROM pg_tables 
        WHERE schemaname = 'public'
    LOOP
        EXECUTE format(
            'COMMENT ON TABLE %I IS ''@graphql({"totalCount": {"enabled": true}})'';',
            table_name
        );
    END LOOP;
END $$;
```

This enables queries like:

```typescript
const ProfilePage_Query = graphql(`
    query ProfilePage_Query {
        educationCollection {
            totalCount
        }
        workExperiencesCollection {
            totalCount
        }
    }
`)
```

### 3. Mutation Patterns

We follow a consistent pattern for mutations:

```typescript
const UpdateMutation = graphql(`
    mutation UpdateEntity($nodeId: ID!, $field: String!) {
        updateEntityCollection(
            set: { field: $field }
            filter: { nodeId: { eq: $nodeId } }
        ) {
            records {
                ...EntityFragment
            }
        }
    }
`);
```

Key principles:
- Always return fragments in mutation responses
- Use nodeId for entity identification
- Include all fields that might be displayed
- Leverage Apollo's automatic cache updates

### 4. Form Integration Pattern

We combine React Hook Form with GraphQL mutations:

```typescript
const formSchema = z.object({
    field: z.string().min(1, 'Field is required'),
});

type FormData = z.infer<typeof formSchema>;

const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        field: data?.field ?? ''
    }
});

const [updateEntity] = useMutation(UpdateMutation);

const onSubmit = async (formData: FormData) => {
    await updateEntity({
        variables: {
            nodeId: data.nodeId,
            ...formData
        }
    });
};
```

### 5. Soft Deletion Pattern

All collection queries include soft deletion filtering:

```typescript
const CollectionQuery = graphql(`
    query GetCollection {
        entityCollection(
            filter: { deletedAt: { is: NULL } }
        ) {
            edges {
                node {
                    ...EntityFragment
                }
            }
        }
    }
`);
```

### 6. Edit State Management

We manage edit states through URL parameters:

```typescript
export function useEditDrawer({ section, id }: UseEditDrawerProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const isOpen = searchParams.get('edit') === section && 
        (!id || searchParams.get('id') === id);

    const open = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('edit', section);
        if (id) params.set('id', id);
        router.push(`?${params.toString()}`);
    };

    return { isOpen, open, close };
}
```

### 7. GraphQL Code Generator Configuration

#### 7.1 Client Preset Setup

Configure codegen.ts for TypeScript GraphQL clients:

```typescript
const config: CodegenConfig = {
    generates: {
        "src/gql/": {
            preset: "client",
            presetConfig: {
                // Disable incompatible fragment masking
                fragmentMasking: false,
                customDirectives: {
                    apolloUnmask: true
                }
            },
            config: {
                inlineFragmentTypes: "mask",
            }
        }
    }
}
```

#### 7.2 Apollo Client Type Configuration

Create apollo-client.d.ts at project root for proper data masking:

```typescript
import '@apollo/client';

declare module "@apollo/client" {
    interface DataMasking {
        enabled: true;
    }
}
```

#### 7.3 Fragment Hook Usage

Important distinction between fragment hooks:

❌ Don't use generated hooks:

```typescript
import { useFragment, FragmentType } from '@/gql'
```

✅ Use Apollo Client's hooks:

```typescript
import { useFragment, FragmentType } from '@apollo/client'
```

Example of correct fragment usage:

```typescript
import { FragmentType, useFragment } from '@apollo/client';
import { graphql } from '@/gql';

const MyFragment = graphql(`
    fragment MyFragment on MyType {
        field1
        field2
    }
`);

function MyComponent({ data }: { data: FragmentType<typeof MyFragment> }) {
    const { data: fragmentData, complete } = useFragment({
        fragment: MyFragment,
        from: data
    });

    if (!complete) return null;
    return <div>{fragmentData.field1}</div>;
}
```

### 8. Cache Update Patterns

<!-- UPDATE-START: Update this and add the cache pattern of invalidating the query like we do in the profile section of the app (apps/web/src/app/(authenticated)/candidate/(mobile)/profile) -->

#### 8.1 Mutation Cache Updates

Example of proper cache update after mutation:

```typescript
const [createEntity] = useMutation(CreateEntityMutation, {
    update: (cache, { data }) => {
        if (!data?.insertIntoEntityCollection?.records?.length) return;
        const newRecord = data.insertIntoEntityCollection.records[0];

        cache.updateQuery({ query: ParentQuery }, (oldData) => {
            if (!oldData?.viewer?.entityCollection) return oldData;

            return produce(oldData, draft => {
                if (!draft.viewer?.entityCollection) return;
                draft.viewer.entityCollection.totalCount += 1;
                draft.viewer.entityCollection.edges.push({
                    __typename: 'EntityEdge',
                    node: newRecord,
                });
            });
        });
    }
});
```

### 9. Configuration Gotchas

1. **Fragment Masking**
   - Must disable in codegen config
   - Use Apollo Client's fragment hooks
   - Check `complete` flag from useFragment

2. **Cache Configuration**
   - Always use nodeId for entity identification
   - Configure proper typePolicies for collections
   - Set up relayStylePagination for collections

3. **Type Generation**
   - Run codegen after schema changes
   - Keep apollo-client.d.ts up to date
   - Use proper import paths for hooks

4. **Authentication**
   - Configure authLink before httpLink
   - Handle token refresh
   - Proper error handling for auth failures

## Best Practices

1. **Fragment Colocation**
   - Keep fragments with their components
   - Use fragments for component-specific data requirements
   - Leverage fragment composition for nested data

2. **Cache Management**
   - Use nodeId for entity identification
   - Return complete fragments in mutations
   - Leverage automatic cache updates

3. **Type Safety**
   - Use zod for form validation
   - Leverage generated types from GraphQL Codegen
   - Maintain strict typing across components

4. **State Management**
   - Use URL parameters for edit states
   - Implement drawer patterns for edits
   - Maintain consistent navigation patterns

5. **Error Handling**
   - Implement proper error boundaries
   - Handle loading and error states
   - Provide user feedback for mutations

## Common Pitfalls

1. **Fragment Usage**
   - Not returning sufficient fields in mutations
   - Missing fragment spreads in parent queries
   - Incorrect fragment prop typing

2. **Cache Updates**
   - Not including nodeId in responses
   - Missing fields in mutation responses
   - Incorrect cache normalization

3. **Type Safety**
   - Bypassing zod validation
   - Not using generated types
   - Incorrect fragment type assertions

4. **State Management**
   - Direct state manipulation vs URL params
   - Inconsistent navigation patterns
   - Missing loading states

## References

- [Apollo Client Documentation](https://www.apollographql.com/docs/react)
- [GraphQL Code Generator](https://the-guild.dev/graphql/codegen)
- [React Hook Form](https://react-hook-form.com)
- [Zod Documentation](https://zod.dev)

## Schema Management with Drizzle and Supabase

### Overview

We use a declarative schema management approach with Drizzle ORM for defining our database structure. This approach offers several advantages over traditional SQL migrations:

1. Type-safe schema definitions
2. Version controlled schema changes
3. Automated migration generation
4. Consistent schema patterns across the codebase

### Local Development Workflow

#### 1. Initial Setup

First, ensure Docker is installed and running, then start the local Supabase instance:

```bash
pnpm dlx supabase start
```

This command spins up a local version of Supabase with all necessary services (PostgreSQL, Auth, Storage, etc.).

#### 2. Schema Definition

Instead of writing raw SQL, we define our schema using Drizzle ORM in TypeScript:

```typescript
// schema/schema.ts
import { pgTable, text, boolean, pgEnum } from 'drizzle-orm/pg-core';
import { base } from './base';

// Define enums
export const userTypeEnum = pgEnum('user_type', [
    'Employer', 
    'Candidate', 
    'Unspecified'
]);

// Define tables with type-safe columns
export const users = pgTable('users', {
    ...base,
    email: text('email').notNull().unique(),
    userType: userTypeEnum('user_type').default('Unspecified').notNull(),
    // ... other fields
});
```

#### 3. Generating Migrations

When you need to make schema changes:

1. Modify the schema definition in `schema.ts`
2. Generate a migration file:

```bash
pnpm drizzle-kit generate --name=your-schema-change
```

This creates a new migration file in `supabase/migrations/`.

#### 4. Applying Migrations

Apply the generated migrations to your local database:

```bash
pnpm dlx supabase migrations up
```

#### 5. Development Reset

If you need to reset your local database:

```bash
pnpm dlx supabase db reset
```

This resets the database and reapplies all migrations.

### Why Drizzle?

Drizzle ORM provides several advantages for schema management:

1. **Type Safety**
   - Schema definitions are written in TypeScript
   - Automatic type generation for your database schema
   - Compile-time checks for schema changes

2. **Declarative Schema**
   - Clear, readable schema definitions
   - Consistent patterns across the codebase
   - Easy to understand relationships and constraints

3. **Migration Management**
   - Automated migration generation
   - Version controlled schema changes
   - Consistent migration patterns

4. **Developer Experience**
   - IDE autocompletion
   - Refactoring support
   - Inline documentation