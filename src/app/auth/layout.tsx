import styles from "@/styles/page/auth.module.scss"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.page}>
      <div className={styles.box}>
        {children}
      </div>
    </div>
  )
}