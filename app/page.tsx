'use client'

import Hero from "@/components/hero"
import MovieRow from "@/components/movie-row"
import { getMoviesByCategory } from "@/lib/movies"
import styles from "./page.module.css"
import { useEffect, useState } from "react"

export default function Home() {
  const trendingMovies = getMoviesByCategory("trending")
  const popularMovies = getMoviesByCategory("popular")
  const actionMovies = getMoviesByCategory("action")
  const comedyMovies = getMoviesByCategory("comedy")
  const horrorMovies = getMoviesByCategory("horror")
  const documentaries = getMoviesByCategory("documentary")

  const [indexMovie, setIndexMovie] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * trendingMovies.length)
      setIndexMovie(index)
    }, 7000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div className={styles.container}>
      <Hero movie={trendingMovies[indexMovie]} />
      <div className={styles.rows}>
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="Popular on Netflix" movies={popularMovies} />
        <MovieRow title="Action Thrillers" movies={actionMovies} />
        <MovieRow title="Comedies" movies={comedyMovies} />
        <MovieRow title="Horror Movies" movies={horrorMovies} />
        <MovieRow title="Documentaries" movies={documentaries} />
      </div>
    </div>
  )
}
