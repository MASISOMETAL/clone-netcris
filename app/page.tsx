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


    const test = async () => {
      try {
        const url = 'https://api.themoviedb.org/3/movie/1'
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGQ1ODY5ZWI3OTQ2MWE3NTFjNmIwODE2Y2MwY2Q4NyIsIm5iZiI6MTc0NDcyMjI1OS41OTAwMDAyLCJzdWIiOiI2N2ZlNTk1M2Q2NDVlNDFlMDk5OTFlNWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.N8MuvhtGI3Cnp2MIsEttoBIAFY9ZXZm5Mk4PMZunlzE`,
            'accept': 'application/json'
          }
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json()
        console.log(data);
      } catch (error) {
        console.log("Ocurrió un error al traer los datos: ", error);

      }
    }

    test()

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
