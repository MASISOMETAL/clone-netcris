import Link from "next/link"
import Image from "next/image"
import styles from "./signup.module.css"

export default function Signup() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          fill
          priority
          className={styles.backgroundImage}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
          <h1 className={styles.title}>Sign Up</h1>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="First name" className={styles.input} required />
            </div>

            <div className={styles.inputGroup}>
              <input type="text" placeholder="Last name" className={styles.input} required />
            </div>

            <div className={styles.inputGroup}>
              <input type="email" placeholder="Email address" className={styles.input} required />
            </div>

            <div className={styles.inputGroup}>
              <input type="password" placeholder="Create password" className={styles.input} required />
            </div>

            <button type="submit" className={styles.submitButton}>
              Sign Up
            </button>

            <div className={styles.termsText}>
              By signing up, you agree to our <Link href="/terms">Terms of Use</Link> and{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </div>
          </form>

          <div className={styles.loginSection}>
            <p>
              Already have an account?{" "}
              <Link href="/login" className={styles.loginLink}>
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
