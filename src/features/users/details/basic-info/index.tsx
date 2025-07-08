"use client";
import React from "react";
//
import Avatar from "@/public/assets/svgs/user-avatar.svg";
import StarIcon from "@/public/assets/svgs/star.svg";
import { Flex, Stack, Tabs } from "@/src/components";
//
import { tabsOption } from "../../data";
import styles from "../styles.module.scss";

export const BasicInfo = () => {
  return (
    <div className={styles.basicInfoContainer}>
      <Flex className={styles.basicInfoUpperSec}>
        <Avatar />
        <Stack className={styles.basicInfoStack}>
          <h4>Grace Effiom</h4>
          <p className={styles.userID}>LSQFf587g90</p>
        </Stack>
        <div className={styles.basicInfoWithBorder}>
          <Stack className={styles.basicInfoStack}>
            <p className={styles.userTire}>User’s Tier</p>
            <StarIcon/>
          </Stack>
        </div>
        <Stack className={styles.basicInfoStack}>
          <h4>₦200,000.00</h4>
          <p className={styles.bankInfo}>9912345678/Providus Bank</p>
        </Stack>
      </Flex>

      <Tabs options={tabsOption} />
    </div>
  );
};
