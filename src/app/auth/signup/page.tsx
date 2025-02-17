'use client';

import styles from "@/styles/page/auth.module.scss"
import { signup } from "../actions";
import { useState } from "react";

export default function SignupPage() {
  const [error, setError] = useState("")

  async function handleSubmit(formData: FormData) {
    const result = await signup(formData)
    if (result.error) {
      setError(result.error);
    }
  }

  return (
    <>
      <h1 className={styles.ttl}>新規登録</h1>
      <form action={handleSubmit}>
        <div className={`c-input ${styles.input}`}><input id="email" type="email" name="email" placeholder="メールアドレス" required /></div>
        <div className={`c-input ${styles.input}`}><input id="password" type="password" name="password" placeholder="パスワード" required /></div>
        <button type="submit" className={`c-btn01 ${styles.btn}`}>登録する</button>
        {error && (
          <p className={styles.error}>{error}</p>
        )}
      </form>
      <a href="/auth" className={`underline ${styles.signup}`}>ログインはこちら</a>
    </>
  )
}