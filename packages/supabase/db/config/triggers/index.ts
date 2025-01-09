import { db } from "@/lib/drizzle"
import { sql } from "drizzle-orm"



export const createOrReplaceHandleNewUserTrigger = async () => {
    await db.execute(sql/*sql*/`
        create or replace function public.handle_new_user()
        returns trigger
        language plpgsql
        security definer set search_path = ''
        as $$
        begin
            -- Create the initial profile with just the required fields
            insert into public.profiles (
                id,
                created_by,
                updated_by
            )
            values (
                new.id,
                new.id,  -- Set created_by to the new user's id
                new.id   -- Set updated_by to the new user's id
            );
            return new;
        end;
        $$;

        -- recreate trigger
        drop trigger if exists on_auth_user_created on auth.users;
        create trigger on_auth_user_created
            after insert on auth.users
            for each row execute procedure public.handle_new_user();
    `)
}