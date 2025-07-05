import Image from "next/image";
//
import styles from "../../styles/auth-layout.module.scss";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.authLayout}>
      <div className={styles.leftSection}>
        <Image
          src="/assets/svgs/logo.svg"
          alt="Logo"
          width={174}
          height={36}
          loading="lazy"
        />
        <div className={styles.avatarContainer}>
          <Image
            src="/assets/svgs/pablo-sign-in.svg"
            alt="sign-in-avatar"
            width={600}
            height={400}
            loading="lazy"
          />
        </div>
      </div>
      <div className={styles.rightSection}>{children}</div>
    </div>
  );
}
