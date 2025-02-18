'use client'
import styles from "@/styles/page/auth.module.scss"
import { useEffect, useState } from 'react'
import { type User } from '@supabase/supabase-js'
import { updateAuth } from './actions'
import Link from "next/link"

export default function AccountForm({ user }: { user: User | null }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    if (user) {
      setLoading(false)
    }
  }, [])

  async function handleUpdate(formData: FormData) {
    const result = await updateAuth(formData)
    setLoading(false)
    if (result.error) {
      setError(result.error);
    }
  }

  useEffect(() => {
    console.log(error);
  }, [error])

  return (
    <div className="form-widget">
      <form action={handleUpdate} onSubmit={() => setLoading(true)}>
        <label htmlFor="email" className={styles.label}>メールアドレス</label>
        <div className={`c-input ${styles.input}`}>
          <input
            id="email"
            type="email"
            name='email'
            defaultValue={user?.email}
          />
        </div>

        <label htmlFor="password" className={styles.label}>パスワード</label>
        <div className={`c-input disabled ${styles.input}`}>
          <input
            id="password"
            type="password"
            name="password"
            value="********"
            disabled
          />
        </div>
        <Link href="/auth/password_reset" className={`underline ${styles.password_reset}`}>パスワードリセットはこちら</Link>


        {error && (
          <p className={styles.error}>{error}</p>
        )}

        <button
          className={`c-btn01 ${styles.btn}`}
          disabled={loading}
        >
          {loading ? '保存中 ...' : '保存'}
        </button>
      </form>

      <div>
        <form action="/auth/signout" method="post">
          <button className="c-btn02 ml-auto mt-4" type="submit">
            ログアウト
          </button>
        </form>
      </div>
    </div>
  )
}