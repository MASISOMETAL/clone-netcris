import CategoryHeader from "@/components/category-header"
import MovieRow from "@/components/movie-row"
import { getMoviesByCategory } from "@/lib/movies"
import styles from "./tv-shows.module.css"

export default function TVShows() {
  const dramaShows = getMoviesByCategory("drama")
  const sciFiShows = getMoviesByCategory("sci-fi")
  const crimeShows = getMoviesByCategory("crime")
  const thrillerShows = getMoviesByCategory("thriller")

  return (
    <div className={styles.container}>
      <CategoryHeader title="TV Shows" />

      <div className={styles.content}>
        <MovieRow title="Drama Series" movies={dramaShows} />
        <MovieRow title="Sci-Fi & Fantasy" movies={sciFiShows} />
        <MovieRow title="Crime TV Shows" movies={crimeShows} />
        <MovieRow title="Thriller Series" movies={thrillerShows} />
      </div>
    </div>
  )
}
