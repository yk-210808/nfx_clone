'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from "@/utils/supabase/server"

export async function passwordResetRequest(formData: FormData) {
  const supabase = await createClient()

  const receivedData = formData.get('email') as string

  const { error } = await supabase.auth.resetPasswordForEmail(receivedData)

  if(error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  redirect('/change/confirm')
}

export async function passwordResetUpdate(formData: FormData) {
  const supabase = await createClient()

  const receivedData = formData.get('password') as string

  const { error } = await supabase.auth.updateUser({
    password: receivedData
  })

  if(error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  redirect('/change/complete')
}