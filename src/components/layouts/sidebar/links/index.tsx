"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
//
import { SIDEBAR } from "@/src/constants/sidebar";
import { isActiveLink } from "@/src/libs/utils";
//
import styles from "./styles.module.scss";

type ItemType = {
  name?: string;
  Icon?: string;
  link?: string;
  hasDropDown?: boolean;
  category?: string;
  dropDownList?: {
    name?: string;
    Icon?: string;
    link?: string;
  }[];
};

type SidebarSectionProps = {
  items: ItemType[];
};

const SidebarSection: React.FC<SidebarSectionProps> = ({ items }) => {
  const pathname = usePathname();

  return (
    <Fragment>
      {items?.map(
        ({ name, Icon, link, hasDropDown, dropDownList, category }) => {
          const isActive = isActiveLink({ link, pathname });

          return (
            <Fragment key={name || category}>
              {/* Category Header */}
              {category && (
                <div className={styles.categoryHeader}>
                  <h4 className={styles.categoryTitle}>{category}</h4>
                </div>
              )}

              {/* Main Navigation Item */}
              {name && (
                <li className={styles.navItem}>
                  <Link
                    href={String(link)}
                    className={`${styles.navLink} ${
                      isActive ? styles.activeLink : ""
                    }`}
                  >
                    <div className={styles.iconContainer}>
                      {Icon && <Icon />}
                    </div>
                    <span className={styles.navText}>{name}</span>
                  </Link>
                </li>
              )}

              {/* Dropdown Items */}
              {dropDownList && (
                <Fragment>
                  {dropDownList?.map(
                    ({ name: subName, Icon: SubIcon, link: subLink }) => {
                      const isSubActive = isActiveLink({
                        link: subLink,
                        pathname,
                      });

                      return (
                        <li key={subName} className={styles.navItem}>
                          <Link
                            href={String(subLink)}
                            className={`${styles.navLink} ${
                              styles.subNavLink
                            } ${isSubActive ? styles.activeLink : ""}`}
                          >
                            <div className={styles.iconContainer}>
                              {SubIcon && <SubIcon />}
                            </div>
                            <span className={styles.navText}>{subName}</span>
                          </Link>
                        </li>
                      );
                    }
                  )}
                </Fragment>
              )}
            </Fragment>
          );
        }
      )}
    </Fragment>
  );
};

export const NavLinks: React.FC = () => {
  return (
    <div className={styles.navLinksContainer}>
      <ul className={styles.navList}>
        <SidebarSection items={SIDEBAR} />
      </ul>
    </div>
  );
};
