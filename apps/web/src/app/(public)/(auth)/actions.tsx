'use server'

import { createServerClient } from '@usepulse/supabase/createServerClient'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const loginSchema = z.object({
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

const signupSchema = z.object({
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginData = z.infer<typeof loginSchema>
type SignupData = z.infer<typeof signupSchema>

export async function login(data: LoginData) {
    const supabase = await createServerClient()

    const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
    })

    if (error) {
        return { error: error.message }
    }

    revalidatePath('/', 'layout')
    return { success: true }
}

export async function signup(data: SignupData) {
    const supabase = await createServerClient()
    
    const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password
    })

    if (error) {
        return { error: error.message }
    }

    revalidatePath('/', 'layout')
    return { success: true }
}