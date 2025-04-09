import Link from "next/link"
import Image from "next/image"
import styles from "./movie-grid.module.css"
import type { Movie } from "@/lib/types"

interface MovieGridProps {
  movies: Movie[]
}

export default function MovieGrid({ movies }: MovieGridProps) {
  return (
    <div className={styles.grid}>
      {movies.map((movie) => (
        <Link href={`/movies/${movie.id}`} key={movie.id} className={styles.movieCard}>
          <div className={styles.moviePoster}>
            <Image
              src={movie.posterPath || "/placeholder.svg"}
              alt={movie.title}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className={styles.posterImage}
            />
          </div>
          <div className={styles.movieInfo}>
            <h3 className={styles.movieTitle}>{movie.title}</h3>
            <div className={styles.movieMeta}>
              <span>{movie.releaseYear}</span>
              <span className={styles.dot}>•</span>
              <span>{movie.maturityRating}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
