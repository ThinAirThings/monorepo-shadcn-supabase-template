import { db } from "@/lib/drizzle/db"
import { sql } from "drizzle-orm"

export const createOrReplaceHandleNewUserTrigger = async () => {
    await db.execute(sql/*sql*/`
        create or replace function public.handle_new_user()
        returns trigger
        language plpgsql
        security definer set search_path = ''
        as $$
        begin
            -- Create the initial profile with required and optional fields
            insert into public.profiles (
                id,
                email,
                first_name,
                last_name,
                phone_number
            )
            values (
                new.id,
                new.email,
                -- Optional fields - use NULLIF to convert empty strings to NULL
                NULLIF(new.raw_user_meta_data->>'first_name', ''),
                NULLIF(new.raw_user_meta_data->>'last_name', ''),
                NULLIF(new.raw_user_meta_data->>'phone_number', '')
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