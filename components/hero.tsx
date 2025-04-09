import Image from "next/image"
import { Play, Info } from "lucide-react"
import styles from "./hero.module.css"
import type { Movie } from "@/lib/types"

export default function Hero({ movie }: { movie: Movie }) {
  return (
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

      <div className={styles.content}>
        <h1 className={styles.title}>{movie.title}</h1>
        <p className={styles.overview}>{movie.overview}</p>

        <div className={styles.buttons}>
          <button className={styles.playButton}>
            <Play size={24} />
            <span>Play</span>
          </button>
          <button className={styles.moreInfoButton}>
            <Info size={24} />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}
