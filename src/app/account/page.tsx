import styles from "@/styles/page/auth.module.scss"
import AccountForm from './account-form'
import { createClient } from '@/utils/supabase/server'

export default async function Account() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <>
      <h1 className={styles.ttl}>マイページ</h1>
      <AccountForm user={user} />
    </>
  )
}