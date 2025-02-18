'use client';

import styles from "@/styles/page/auth.module.scss"
import { login } from "./actions";
import { useEffect, useState } from "react";


export default function AuthPage() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    if (loading) {
      setLoading(false)
    }
  }, [])

  async function handleLogin(formData: FormData) {
    const result = await login(formData)
    setLoading(false)
    if (result.error) {
      setError(result.error)
    }
  }

  return (
    <>
      <h1 className={styles.ttl}>ログイン</h1>
      <form action={handleLogin} onSubmit={() => setLoading(true)}>
        <div className={`c-input ${styles.input}`}><input type="email" name="email" placeholder="メールアドレス" required /></div>
        <div className={`c-input ${styles.input}`}><input type="password" name="password" placeholder="パスワード" required /></div>
        <p className={styles.remember}><label className="c-checkbox"><input type="checkbox" name="rememberMe" /><span className="inn">ログイン情報を記憶する</span></label></p>
        <button
          type="submit"
          className={`c-btn01 ${styles.btn}`}
          disabled={loading}
        >
          {loading ? 'ログイン中 ...' : 'ログイン'}
        </button>

        {error && (
          <p className={styles.error}>{error}</p>
        )}
      </form>
      <a href="/auth/signup" className={`underline ${styles.signup}`}>新規登録はこちら</a>
    </>
  )
}