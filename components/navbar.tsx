"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Bell, ChevronDown } from "lucide-react"
import styles from "./navbar.module.css"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="Netflix" width={120} height={40} priority />
          </Link>

          <nav className={styles.navigation}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/tv-shows" className={styles.navLink}>
              TV Shows
            </Link>
            <Link href="/movies" className={styles.navLink}>
              Movies
            </Link>
            <Link href="/new" className={styles.navLink}>
              New & Popular
            </Link>
            <Link href="/mylist" className={styles.navLink}>
              My List
            </Link>
          </nav>

          <button className={styles.mobileMenuButton} onClick={() => setShowMobileMenu(!showMobileMenu)}>
            Browse <ChevronDown size={16} />
          </button>

          {showMobileMenu && (
            <div className={styles.mobileMenu}>
              <Link href="/" className={styles.mobileNavLink}>
                Home
              </Link>
              <Link href="/series" className={styles.mobileNavLink}>
                TV Shows
              </Link>
              <Link href="/movies" className={styles.mobileNavLink}>
                Movies
              </Link>
              <Link href="/new" className={styles.mobileNavLink}>
                New & Popular
              </Link>
              <Link href="/mylist" className={styles.mobileNavLink}>
                My List
              </Link>
            </div>
          )}
        </div>

        <div className={styles.right}>
          <button className={styles.iconButton}>
            <Search size={20} />
          </button>
          <button className={styles.iconButton}>
            <Bell size={20} />
          </button>
          <Link href="/profile" className={styles.profile}>
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Profile"
              width={32}
              height={32}
              className={styles.profileImage}
            />
            <ChevronDown size={16} />
          </Link>
        </div>
      </div>
    </header>
  )
}
