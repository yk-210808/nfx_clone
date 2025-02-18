import styles from "@/styles/page/auth.module.scss"

export default function LayoutBox({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.page}>
    <div className={styles.box}>
      {children}
    </div>
  </div>
  )
}