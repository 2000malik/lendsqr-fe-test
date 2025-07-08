"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
//
import { RoutePath } from "@/src/constants/routes";
//
import { Button } from "../../button";
import styles from "./styles.module.scss";
import { SearchInput } from "../../form/search-input";

type NavBarProps = {
  isOpen: boolean;
  onToggleSidebar?: () => void;
};
export const NavBar: React.FC<NavBarProps> = ({ isOpen, onToggleSidebar }) => {
  return (
    <header className={styles.header}>
      <div className={styles.rightSection}>
        <Link href={RoutePath.DASHBOARD}>
          <Image
            src="/assets/svgs/logo.svg"
            alt="Logo"
            width={174}
            height={36}
            loading="lazy"
          />
        </Link>

        <SearchInput className={styles.searchContainer} />
      </div>
      <div className={styles.leftSection}>
        <Link href="#" className={styles.docs}>
          Docs
        </Link>
        <Link href="#">
          <Image
            src="/assets/svgs/notification.svg"
            alt="Logo"
            width={17}
            height={36}
            loading="lazy"
          />
        </Link>

        <Image
          src="/assets/svgs/avatar.svg"
          alt="Logo"
          width={70}
          height={56}
          loading="lazy"
        />

        <Button className={styles.username}>
          <span>Adedeji</span>
          <div>
            <Image
              src="/assets/svgs/dropdown.svg"
              alt="Logo"
              width={27}
              height={36}
              loading="lazy"
            />
          </div>
        </Button>
      </div>
      <Button className={styles.menuBtn} onClick={onToggleSidebar}>
        <Image
          src={!isOpen ? "/assets/svgs/bar.svg" : "/assets/svgs/close.svg"}
          alt="Logo"
          width={50}
          height={25}
          loading="lazy"
        />
      </Button>
    </header>
  );
};
