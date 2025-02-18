'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const receivedData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  const rememberMe = formData.get("rememberMe") === "on";

  const { data, error } = await supabase.auth.signInWithPassword(receivedData)

  if (error) {
    return { error: receivedData.email + 'のパスワードが正しくありません。' }
  }

  if (rememberMe && data.session) {
    await supabase.auth.refreshSession();
  }

  revalidatePath('/', 'layout')
  redirect('/account')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const receivedData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { data, error } = await supabase.auth.signUp(receivedData);

  if (error) {
    if (error.message.includes("already registered")) {
      return { error: "このメールアドレスは既に登録されています。" };
    }
    return { error: error.message };
  }

  const identities = data.user?.identities;
  if (identities?.length === 0) {
    return { error: "このメールアドレスは既に登録されています。" };
  }

  revalidatePath('/', 'layout')
  redirect('/change/confirm')
}