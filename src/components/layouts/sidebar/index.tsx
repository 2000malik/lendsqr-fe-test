import React from "react";
import Image from "next/image";
//
import { NavLinks } from "./links";
import styles from "./styles.module.scss";

type SideBarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const SideBar: React.FC<SideBarProps> = ({ isOpen }) => {
  return (
    <aside
      className={`${styles.sidebarContainer} ${isOpen ? styles.open : ""}`}
    >
      {/* Organization Switcher */}
      <div className={styles.organizationSwitcher}>
        <div className={styles.orgIcon}>
          <Image
            src="/assets/svgs/briefcase.svg"
            alt="Organization"
            width={20}
            height={20}
          />
        </div>
        <span className={styles.orgText}>Switch Organization</span>
        <div className={styles.dropdownIcon}>
          <Image
            src="/assets/svgs/arrow-down.svg"
            alt="Dropdown"
            width={16}
            height={16}
          />
        </div>
      </div>
      <NavLinks />
    </aside>
  );
};
