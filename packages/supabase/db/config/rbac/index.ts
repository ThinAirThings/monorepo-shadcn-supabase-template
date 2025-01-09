import { db } from "@/lib/drizzle"
import { sql } from "drizzle-orm"

export const createOrReplaceCanUserDo = async () => {
    await db.execute(sql/*sql*/`
        CREATE OR REPLACE FUNCTION can_user_do(
            user_id UUID,
            action TEXT,
            resource TEXT,
            resource_attributes JSONB DEFAULT '{}'::JSONB
        ) RETURNS BOOLEAN AS $$
        BEGIN
            RETURN EXISTS (
                SELECT 1
                FROM user_roles ur
                JOIN role_policies rp ON ur.role_id = rp.role_id
                JOIN policies p ON rp.policy_id = p.id
                WHERE ur.user_id = can_user_do.user_id
                AND p.action = can_user_do.action
                AND (
                    p.resource = can_user_do.resource
                    OR p.resource = '*'
                    OR can_user_do.resource LIKE REPLACE(p.resource, '*', '%')
                )
                AND p.effect = 'allow'
                AND (
                    p.condition IS NULL 
                    OR (p.condition::jsonb <@ resource_attributes)
                )
                -- Check no deny policies exist that would override
                AND NOT EXISTS (
                    SELECT 1
                    FROM user_roles ur2
                    JOIN role_policies rp2 ON ur2.role_id = rp2.role_id
                    JOIN policies p2 ON rp2.policy_id = p2.id
                    WHERE ur2.user_id = can_user_do.user_id
                    AND p2.action = can_user_do.action
                    AND (
                        p2.resource = can_user_do.resource
                        OR p2.resource = '*'
                        OR can_user_do.resource LIKE REPLACE(p2.resource, '*', '%')
                    )
                    AND p2.effect = 'deny'
                    AND (
                        p2.condition IS NULL 
                        OR (p2.condition::jsonb <@ resource_attributes)
                    )
                )
            );
        END;
        $$ LANGUAGE plpgsql SECURITY DEFINER;
    `)
}

