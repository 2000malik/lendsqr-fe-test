"use client";
import React from "react";
//
import { Button, Header, Stack, SummaryCard } from "@/src/components";
//
import styles from "./styles.module.scss";
import { DashboardTable } from "../dashboard/table";
import { summaryCardData, tableData } from "../dashboard/data";

export const Users = () => {
  return (
    <Stack>
      <Header title="Users" />
      <div className={styles.cardGrid}>
        {summaryCardData.map(({ label, Icon, value }) => (
          <SummaryCard key={label} label={label} Icon={Icon} value={value} />
        ))}
      </div>
      <div className={styles.filterButtonContainer}>
        <Button className={styles.filterBtn}>Filter</Button>
      </div>
        <DashboardTable data={tableData} />
    </Stack>
  );
};
