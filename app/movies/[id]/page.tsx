import { getMovieById, getMoviesByCategory } from "@/lib/movies"
import Image from "next/image"
import { Play, Plus, ThumbsUp } from "lucide-react"
import styles from "./movie.module.css"
import MovieRow from "@/components/movie-row"

export default function MoviePage({ params }: { params: { id: string } }) {
  const movie = getMovieById(params.id)

  if (!movie) {
    return <div>Movie not found</div>
  }

  const similarMovies = getMoviesByCategory(movie.genres[0])

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.backdrop}>
          <Image
            src={movie.backdropPath || "/placeholder.svg"}
            alt={movie.title}
            fill
            priority
            className={styles.backdropImage}
          />
          <div className={styles.vignette}></div>
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.title}>{movie.title}</h1>
          <div className={styles.metadata}>
            <span>{movie.releaseYear}</span>
            <span className={styles.rating}>{movie.maturityRating}</span>
            <span>{movie.duration}</span>
          </div>

          <p className={styles.overview}>{movie.overview}</p>

          <div className={styles.actions}>
            <button className={styles.playButton}>
              <Play size={20} />
              <span>Play</span>
            </button>
            <button className={styles.circleButton}>
              <Plus size={20} />
            </button>
            <button className={styles.circleButton}>
              <ThumbsUp size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.detailsLeft}>
          <div className={styles.detailsSection}>
            <h3>Cast</h3>
            <p>{movie.cast.join(", ")}</p>
          </div>
          <div className={styles.detailsSection}>
            <h3>Genres</h3>
            <p>{movie.genres.join(", ")}</p>
          </div>
        </div>

        <div className={styles.detailsRight}>
          <div className={styles.detailsSection}>
            <h3>Director</h3>
            <p>{movie.director}</p>
          </div>
        </div>
      </div>

      <div className={styles.moreContent}>
        <MovieRow title="More Like This" movies={similarMovies} />
      </div>
    </div>
  )
}
