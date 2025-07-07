"use client";
import React from "react";
//
import { Header, Stack, SummaryCard } from "@/src/components";
//
import { summaryCardData, tableData } from "./data";
import styles from "./styles.module.scss";
import { DashboardTable } from "./table";

export const Dashboard = () => {
  return (
    <Stack>
      <Header title="Users" />
      <div className={styles.cardGrid}>
        {summaryCardData.map(({ label, Icon, value }) => (
          <SummaryCard key={label} label={label} Icon={Icon} value={value} />
        ))}
      </div>

      <DashboardTable data={tableData} />
    </Stack>
  );
};
