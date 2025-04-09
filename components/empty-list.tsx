import Link from "next/link"
import styles from "./empty-list.module.css"

export default function EmptyList() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Your list is empty</h2>
        <p className={styles.message}>Add TV shows and movies that you want to watch later by clicking the + icon.</p>
        <Link href="/" className={styles.browseButton}>
          Browse Content
        </Link>
      </div>
    </div>
  )
}
