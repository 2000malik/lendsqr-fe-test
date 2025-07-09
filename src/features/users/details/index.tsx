"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
//
import { RoutePath } from "@/src/constants/routes";
import ArrowIcon from "@/public/assets/svgs/back-arrow.svg";
import { Button, Flex, Header, Stack } from "@/src/components";
//

import styles from "./styles.module.scss";
import { BasicInfo } from "./basic-info";
import { GeneralInfo } from "./general-details";
import { getStorageItem } from "@/src/libs/utils";

type Props = {
  id: string;
};
export const UserDetails = ({ id }: Props) => {
  const router = useRouter();
  const [user, setUser] = useState<userInfo | null>(null);

  useEffect(() => {
    const storedUser = getStorageItem("user");
    if (!storedUser) {
      router.push(RoutePath.USER);
    } else {
      setUser(storedUser);
    }
  }, []);

  if (!user) return null;

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
      <BasicInfo data={user} />
      <GeneralInfo data={user} />
    </Stack>
  );
};
