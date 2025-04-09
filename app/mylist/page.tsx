import CategoryHeader from "@/components/category-header"
import EmptyList from "@/components/empty-list"
import MovieGrid from "@/components/movie-grid"
import { getMyList } from "@/lib/movies"
import styles from "./mylist.module.css"

export default function MyList() {
  const myList = getMyList()
  const isEmpty = myList.length === 0

  return (
    <div className={styles.container}>
      <CategoryHeader title="My List" />

      <div className={styles.content}>{isEmpty ? <EmptyList /> : <MovieGrid movies={myList} />}</div>
    </div>
  )
}
