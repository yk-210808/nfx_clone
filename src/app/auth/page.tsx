'use client';
import styles from "@/styles/page/auth.module.scss"

import { supabase } from "../lib/supabase";

export default function AuthPage() {

  return (

    <div className={styles.page}>
      <div className={styles.box}>
        <h1 className={styles.ttl}>ログイン</h1>
        <form>
          <input type="text" name="email" placeholder="メールアドレス" className={`c-input ${styles.input}`} />
          <input type="password" name="password" placeholder="パスワード" className={`c-input ${styles.input}`} />
          <p className={styles.remember}><label><input type="checkbox" name="remember" className="c-checkbox" /><span className="inn">ログイン情報を記憶する</span></label></p>
    
          <button type="button" className={`c-btn01 ${styles.btn}`}>ログイン</button>
        </form>
      </div>
    </div>
  )
}