import Image from "next/image";
import Link from "next/link";
//
import { RoutePath } from "@/src/constants/routes";
// 
import styles from "../../styles/auth-layout.module.scss";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.authLayout}>
      <div className={styles.leftSection}>
        <Link href={RoutePath.LOGIN}>
          <Image
            src="/assets/svgs/logo.svg"
            alt="Logo"
            width={174}
            height={36}
            loading="lazy"
          />
        </Link>
        <div className={styles.avatarContainer}>
          <Image
            src="/assets/svgs/pablo-sign-in.svg"
            alt="sign-in-avatar"
            loading="lazy"
            fill
            style={{ objectFit: "contain" }}
            priority={false}
          />
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.rightSectionContainer}>
          <div className={styles.rightSectionChild}>{children}</div>
        </div>
      </div>
    </div>
  );
}
