import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
//
import "./globals.css";
import { RoutePath } from "../constants/routes";
import styles from "./auth-layout.module.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lendsqr-fe-test",
  description:
    "Loan Management Software for the Smartest Lenders, Banks, and Fintechs in Nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
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
      </body>
    </html>
  );
}
