import Link from "next/link"
import Image from "next/image"
import styles from "./login.module.css"

export default function Login() {
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
          <h1 className={styles.title}>Sign In</h1>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Email or phone number" className={styles.input} required />
            </div>

            <div className={styles.inputGroup}>
              <input type="password" placeholder="Password" className={styles.input} required />
            </div>

            <button type="submit" className={styles.submitButton}>
              Sign In
            </button>

            <div className={styles.formHelp}>
              <div className={styles.rememberMe}>
                <input type="checkbox" id="remember" className={styles.checkbox} />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link href="/help" className={styles.helpLink}>
                Need help?
              </Link>
            </div>
          </form>

          <div className={styles.signupSection}>
            <p>
              New to Netflix?{" "}
              <Link href="/signup" className={styles.signupLink}>
                Sign up now
              </Link>
            </p>
            <p className={styles.captchaText}>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
