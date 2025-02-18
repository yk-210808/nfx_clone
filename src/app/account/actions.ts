'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function updateAuth(formData: FormData) {
  const supabase = await createClient()

  const receivedData = {
    email: formData.get('email') as string,
  }

  const { data, error } = await supabase.auth.updateUser(receivedData)
  
  if (error) {
    return { error: error.message }
  }

  if (!data.user.new_email) {
    return { error: "このメールアドレスは既に登録されています。" };
  }

  revalidatePath('/', 'layout')
  redirect('/change/confirm')
}