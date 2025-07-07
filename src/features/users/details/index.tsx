"use client";
import React from "react";
import { useRouter } from "next/navigation";
//
import { RoutePath } from "@/src/constants/routes";
import ArrowIcon from "@/public/assets/svgs/back-arrow.svg";
import { Button, Flex, Header, Stack } from "@/src/components";
//
import styles from "./styles.module.scss";

type Props = {
  id: string;
};
export const UserDetails = ({ id }: Props) => {
  const router = useRouter();
  return (
    <Stack>
      <Button
        className={styles.backBtn}
        onClick={() => router.push(RoutePath.USER)}
      >
        <ArrowIcon />
        <span>Back to Users</span>
      </Button>
      <Flex className={styles.actionSection}>
        <Header title="Users Details" />
        <Flex className={styles.actionBtnContainer}>
          <Button className={styles.actionBtn}>Blacklist User</Button>
          <Button
            className={`${styles.actionBtn} ${styles["actionBtn--green"]}`}
          >
            Activate User
          </Button>
        </Flex>
      </Flex>
      {id}
    </Stack>
  );
};
