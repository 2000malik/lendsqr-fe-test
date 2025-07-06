"use client";
import React from "react";
//
import { Header, StatusChip, SummaryCard, Table } from "@/src/components";
//
import { summaryCardData } from "./data";
import styles from "./styles.module.scss";

export const Dashboard = () => {
  const tableHeaders = [
    "organization",
    "Username",
    "Email",
    "Phone number",
    "Date joined",
    "Status",
  ];
  return (
    <div className={styles.dashboardContainer}>
      <Header title="Users" />
      <div className={styles.cardGrid}>
        {summaryCardData.map(({ label, Icon, value }) => (
          <SummaryCard key={label} label={label} Icon={Icon} value={value} />
        ))}
      </div>
        {/* <StatusChip status="Active" /> */}

      <Table columns={tableHeaders} />
    </div>
  );
};
