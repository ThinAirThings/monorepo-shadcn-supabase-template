# PostgreSQL Row Level Security (RLS) Guide

## Table of Contents
- [Introduction](#introduction)
- [Core Concepts](#core-concepts)
- [Policy Components](#policy-components)
- [Implementation Patterns](#implementation-patterns)
- [Best Practices](#best-practices)
- [Examples](#examples)

## Introduction

Row Level Security (RLS) in PostgreSQL is a security feature that enables fine-grained access control at the row level. It allows you to define security policies that determine which rows can be accessed by specific users or roles, effectively implementing data access controls directly in the database layer.

## Core Concepts

### 1. Policy Evaluation Flow

RLS policies are evaluated in a specific order:
1. USING clause (Authentication/Authorization)
2. WITH CHECK clause (Validation)
3. Actual operation (if both checks pass)

### 2. Policy Types

#### USING Clause (Authentication/Authorization)
- Acts as middleware for row access
- Determines if a user can see/access a row
- Runs first in the policy evaluation chain
- Similar to auth middleware in REST APIs
- Applied to SELECT, UPDATE, and DELETE operations

#### WITH CHECK Clause (Validation)
- Validates data modifications
- Determines if data changes are allowed
- Runs after USING clause passes
- Applied to INSERT and UPDATE operations
- Focuses on data integrity and business rules

## Policy Components

### 1. Basic Policy Structure

```sql
CREATE POLICY policy_name ON table_name
    FOR operation
    TO role
    USING (using_expression)
    WITH CHECK (check_expression);
```

### 2. Operation Types
- `ALL`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

## Implementation Patterns

### 1. Basic Owner-Based Access

```sql
-- Enable RLS on the table
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- Create policy for owner access
CREATE POLICY documents_owner_access ON documents
    USING (auth.uid() = owner_id)
    WITH CHECK (auth.uid() = owner_id);
```

### 2. Role-Based Access

```sql
-- Policy for admin users
CREATE POLICY admin_all_access ON documents
    TO admin_role
    USING (true)
    WITH CHECK (true);

-- Policy for regular users
CREATE POLICY user_own_access ON documents
    TO authenticated
    USING (auth.uid() = owner_id)
    WITH CHECK (auth.uid() = owner_id);
```

### 3. Shared Resource Access

```sql
-- Allow access to shared resources
CREATE POLICY shared_access ON documents
    USING (
        auth.uid() = owner_id 
        OR document_id IN (
            SELECT document_id 
            FROM shared_documents 
            WHERE user_id = auth.uid()
        )
    );
```

## Best Practices

### 1. Policy Naming
Use clear, descriptive names following the pattern:
```
{table}_{action}_{subject}_policy
```

Example:
```sql
CREATE POLICY documents_view_own_policy ON documents
    FOR SELECT
    USING (auth.uid() = owner_id);
```

### 2. Default Deny
- Always start with denying all access
- Explicitly grant required permissions
```sql
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents FORCE ROW LEVEL SECURITY;
```

### 3. Policy Organization
Group policies by:
1. Table
2. Operation type
3. User role

### 4. Testing Policies
Always test policies with different user contexts:
```sql
-- Test as specific user
SET LOCAL ROLE authenticated_user;
SELECT * FROM documents;

-- Test as different user
SET LOCAL ROLE different_user;
SELECT * FROM documents;
```

## Examples

### 1. Complete Table Security Setup

```sql
-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Read access policy
CREATE POLICY projects_read_policy ON projects
    FOR SELECT
    USING (
        auth.uid() = owner_id
        OR EXISTS (
            SELECT 1 FROM project_members
            WHERE project_id = projects.id
            AND user_id = auth.uid()
        )
    );

-- Write access policy
CREATE POLICY projects_write_policy ON projects
    FOR UPDATE
    USING (auth.uid() = owner_id)
    WITH CHECK (
        -- Validation rules
        updated_at > created_at
        AND name IS NOT NULL
    );
```

### 2. Hierarchical Access

```sql
CREATE POLICY org_hierarchy_policy ON documents
    USING (
        EXISTS (
            SELECT 1 FROM organizations
            WHERE organizations.id = documents.org_id
            AND (
                organizations.owner_id = auth.uid()
                OR auth.uid() = ANY(organizations.admin_ids)
            )
        )
    );
```

## Common Pitfalls

1. **Forgetting to Enable RLS**
   - Tables don't have RLS enabled by default
   - Must explicitly enable with `ALTER TABLE ... ENABLE ROW LEVEL SECURITY`

2. **Policy Conflicts**
   - Multiple policies on same table combine with OR logic
   - Can lead to unintended access if not carefully designed

3. **Performance Impact**
   - Complex USING/WITH CHECK expressions can impact performance
   - Consider indexing columns used in policy expressions

4. **Missing WITH CHECK Clauses**
   - USING alone doesn't prevent data modifications
   - Always include WITH CHECK for INSERT/UPDATE operations

## Integration with Drizzle ORM

When using Drizzle ORM, RLS policies remain at the database level, but you can enhance their usage:

```typescript
import { pgTable, text, uuid } from 'drizzle-orm/pg-core';

// Define table with ownership column
export const documents = pgTable('documents', {
  id: uuid('id').primaryKey().defaultRandom(),
  ownerId: uuid('owner_id').notNull(),
  content: text('content'),
});

// RLS will automatically filter queries
const userDocs = await db.select().from(documents);
// Only returns documents where auth.uid() = owner_id
```

Remember that RLS operates independently of your ORM - it's enforced at the database level, ensuring consistent security regardless of how the data is accessed.
