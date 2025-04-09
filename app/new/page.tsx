import CategoryHeader from "@/components/category-header"
import MovieRow from "@/components/movie-row"
import { getMoviesByCategory, getNewReleases, getUpcoming } from "@/lib/movies"
import styles from "./new.module.css"

export default function NewAndPopular() {
  const newReleases = getNewReleases()
  const trending = getMoviesByCategory("trending")
  const upcoming = getUpcoming()
  const popular = getMoviesByCategory("popular")

  return (
    <div className={styles.container}>
      <CategoryHeader title="New & Popular" />

      <div className={styles.content}>
        <MovieRow title="New Releases" movies={newReleases} />
        <MovieRow title="Trending Now" movies={trending} />
        <MovieRow title="Coming Soon" movies={upcoming} />
        <MovieRow title="Popular on Netflix" movies={popular} />
      </div>
    </div>
  )
}
