"use client";
import React from "react";
//
import Avatar from "@/public/assets/svgs/user-avatar.svg";
import StarIcon from "@/public/assets/svgs/star.svg";
import { Flex, Stack, Tabs } from "@/src/components";
//
import { tabsOption } from "../../data";
import styles from "../styles.module.scss";

type Props = {
  data?: userInfo;
};
export const BasicInfo = ({ data }: Props) => {
  return (
    <div className={styles.basicInfoContainer}>
      <Flex className={styles.basicInfoUpperSec}>
        <Avatar />
        <Stack className={styles.basicInfoStack}>
          <h4>{data?.fullName ?? ""}</h4>
          <p className={styles.userID}>{data?.id ?? ""}</p>
        </Stack>
        <div className={styles.basicInfoWithBorder}>
          <Stack className={styles.basicInfoStack}>
            <p className={styles.userTire}>User’s Tier</p>
            <Flex>
              {[...Array(data?.tier || 0)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </Flex>
          </Stack>
        </div>
        <Stack className={styles.basicInfoStack}>
          <h4>{`₦${data?.accountBalance ?? ""}`}</h4>
          <p className={styles.bankInfo}>
            {`${data?.accountNumber ?? ""} / ${data?.bankName ?? ""}`}
          </p>
        </Stack>
      </Flex>

      <Tabs options={tabsOption} />
    </div>
  );
};
