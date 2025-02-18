'use client';
import styles from "@/styles/page/auth.module.scss"
import { passwordResetUpdate } from "../actions";
import { useEffect, useState } from "react";

export default function PasswordResetPage() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    if (loading) {
      setLoading(false)
    }
  }, [])

  async function handleSubmit(formData: FormData) {
    const result = await passwordResetUpdate(formData)
    setLoading(false)
    if (result.error) {
      setError(result.error)
    }
  }

  return (
    <>
      <h1 className={styles.ttl}>パスワードリセット</h1>
      <form action={handleSubmit} onSubmit={() => setLoading(true)}>
        <div className={`c-input ${styles.input}`}><input type="password" name="password" placeholder="パスワード" required /></div>
        <button
          type="submit"
          className={`c-btn01 ${styles.btn}`}
          disabled={loading}
        >
          {loading ? '更新中 ...' : '更新する'}
        </button>

        {error && (
          <p className={styles.error}>{error}</p>
        )}
      </form>
    </>
  );
}