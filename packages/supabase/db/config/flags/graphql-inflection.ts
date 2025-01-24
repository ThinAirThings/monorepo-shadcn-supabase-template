import { db } from "@/lib/drizzle/db"
import { sql } from "drizzle-orm"

export const enableGraphqlInflection = async () => {
    await db.execute(sql/*sql*/`
        COMMENT ON SCHEMA public IS '@graphql({"inflect_names": true})';
    `)
}
