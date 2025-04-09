import styles from "./category-header.module.css"

interface CategoryHeaderProps {
  title: string
}

export default function CategoryHeader({ title }: CategoryHeaderProps) {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.filters}>
        <div className={styles.dropdown}>
          <button className={styles.dropdownButton}>
            Genres
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 10.5L4 6.5H12L8 10.5Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
