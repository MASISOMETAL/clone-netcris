"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import styles from "./movie-row.module.css"
import type { Movie } from "@/lib/types"

export default function MovieRow({ title, movies }: { title: string; movies: Movie[] }) {
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const rowRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scrollLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: -rowRef.current.clientWidth, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: rowRef.current.clientWidth, behavior: "smooth" })
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.sliderContainer}>
        {showLeftArrow && (
          <button className={`${styles.sliderButton} ${styles.sliderButtonLeft}`} onClick={scrollLeft}>
            <ChevronLeft size={30} />
          </button>
        )}

        <div className={styles.slider} ref={rowRef} onScroll={handleScroll}>
          {movies.map((movie) => (
            <Link href={`/movies/${movie.id}`} key={movie.id} className={styles.movieCard}>
              <div className={styles.moviePoster}>
                <Image
                  src={movie.posterPath || "/placeholder.svg"}
                  alt={movie.title}
                  fill
                  sizes="(max-width: 768px) 30vw, 20vw"
                  className={styles.posterImage}
                />
              </div>
            </Link>
          ))}
        </div>

        {showRightArrow && (
          <button className={`${styles.sliderButton} ${styles.sliderButtonRight}`} onClick={scrollRight}>
            <ChevronRight size={30} />
          </button>
        )}
      </div>
    </div>
  )
}
