'use server'

import { createClient } from '@/utils/supabase/server'

export async function isUserLogin() {
  const supabase = await createClient()

  const { data } = await supabase.auth.getUser()

  if (data.user) {
    return true
  } else {
    return false
  }
}

export async function getUserInfo() {
  const supabase = await createClient()

  const { data } = await supabase.auth.getUser()

  return data.user
}

// export async function getThisSession() {
//   const supabase = await createClient()

//   const { data, error } = await supabase.auth.getSession()

//   if (error) {
//     return { error: error.message }
//   }


//   return data
// }