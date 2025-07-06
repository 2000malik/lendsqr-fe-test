"use client";
import React from "react";
//
import { Header, StatusChip, SummaryCard, Table } from "@/src/components";
//
import { summaryCardData, tableData } from "./data";
import styles from "./styles.module.scss";
import { ColumnConfig } from "@/src/components/table/column";

export const Dashboard = () => {
  const tableHeaders: ColumnConfig[] = [
    { key: "username", label: "Username" },
    { key: "email", label: "Email" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => <StatusChip status={value} />,
    },
    {
      key: "actions",
      label: "Actions",
      render: (_: unknown, row: { username: string }) => (
        <button onClick={() => alert(row.username)}>View</button>
      ),
    },
  ];
  return (
    <div className={styles.dashboardContainer}>
      <Header title="Users" />
      <div className={styles.cardGrid}>
        {summaryCardData.map(({ label, Icon, value }) => (
          <SummaryCard key={label} label={label} Icon={Icon} value={value} />
        ))}
      </div>

      <Table columns={tableHeaders} data={tableData} />
    </div>
  );
};
