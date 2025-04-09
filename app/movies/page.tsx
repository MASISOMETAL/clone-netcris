import CategoryHeader from "@/components/category-header"
import MovieRow from "@/components/movie-row"
import { getMoviesByCategory } from "@/lib/movies"
import styles from "./movies.module.css"

export default function Movies() {
  const actionMovies = getMoviesByCategory("action")
  const dramaMovies = getMoviesByCategory("drama")
  const thrillerMovies = getMoviesByCategory("thriller")
  const comedyMovies = getMoviesByCategory("comedy")

  return (
    <div className={styles.container}>
      <CategoryHeader title="Movies" />

      <div className={styles.content}>
        <MovieRow title="Action & Adventure" movies={actionMovies} />
        <MovieRow title="Dramas" movies={dramaMovies} />
        <MovieRow title="Thrillers" movies={thrillerMovies} />
        <MovieRow title="Comedies" movies={comedyMovies} />
      </div>
    </div>
  )
}
