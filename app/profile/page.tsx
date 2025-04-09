import Image from "next/image"
import Link from "next/link"
import styles from "./profile.module.css"

export default function Profile() {
  const profiles = [
    { id: 1, name: "User 1", avatar: "/placeholder.svg?height=150&width=150" },
    { id: 2, name: "User 2", avatar: "/placeholder.svg?height=150&width=150" },
    { id: 3, name: "User 3", avatar: "/placeholder.svg?height=150&width=150" },
    { id: 4, name: "Kids", avatar: "/placeholder.svg?height=150&width=150" },
    { id: 5, name: "Add Profile", avatar: "/placeholder.svg?height=150&width=150", isAdd: true },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Who's watching?</h1>

        <div className={styles.profiles}>
          {profiles.map((profile) => (
            <Link
              href={profile.isAdd ? "/profile/add" : "/"}
              key={profile.id}
              className={`${styles.profile} ${profile.isAdd ? styles.addProfile : ""}`}
            >
              <div className={styles.avatar}>
                <Image
                  src={profile.avatar || "/placeholder.svg"}
                  alt={profile.name}
                  width={150}
                  height={150}
                  className={styles.avatarImage}
                />
                {profile.isAdd && (
                  <div className={styles.addIcon}>
                    <span>+</span>
                  </div>
                )}
              </div>
              <div className={styles.name}>{profile.name}</div>
            </Link>
          ))}
        </div>

        <Link href="/profile/manage" className={styles.manageButton}>
          Manage Profiles
        </Link>
      </div>
    </div>
  )
}
