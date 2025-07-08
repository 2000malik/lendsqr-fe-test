"use client";
import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
//
import { Button } from "../button";
import { Flex } from "../layouts/flex";
import styles from "./styles.module.scss";

type FilterOptionType = {
  label: string;
  value: string;
};

type Props = {
  options: FilterOptionType[];
  loading?: boolean;
  onSelect?: (item: FilterOptionType) => void;
  value?: string;
};

export const Tabs: React.FC<Props> = ({ options, onSelect }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const activeTab = searchParams.get("tab") || options[0]?.value || "";

  const handleTabChange = (selectedOption: FilterOptionType) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", selectedOption.value);

    router.replace(`${pathname}?${params.toString()}`);
    onSelect?.(selectedOption);
  };
  const getTabClassName = (isActive: boolean) => {
    return isActive
      ? `${styles.tabBtn} ${styles["tabBtn--active"]}`
      : styles.tabBtn;
  };

  return (
    <Flex className={styles.tabContainer}>
      {options.map((option) => (
        <Button
          key={option.value}
          className={getTabClassName(option.value === activeTab)}
          onClick={() => handleTabChange(option)}
        >
          {option.label}
        </Button>
      ))}
    </Flex>
  );
};
