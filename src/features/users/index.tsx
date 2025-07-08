"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
//
import { Button, Header, Stack, SummaryCard } from "@/src/components";
//
import styles from "./styles.module.scss";
import { DashboardTable } from "../dashboard/table";
import { summaryCardData, tableData } from "../dashboard/data";

const FilterModal = dynamic(
  () => import("./components/filter-modal").then((mod) => mod.FilterModal),
  {
    ssr: false,
  }
);
export const Users = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Stack>
      <Header title="Users" />
      <div className={styles.cardGrid}>
        {summaryCardData.map(({ label, Icon, value }) => (
          <SummaryCard key={label} label={label} Icon={Icon} value={value} />
        ))}
      </div>
      <div className={styles.filterButtonContainer}>
        <Button className={styles.filterBtn} onClick={() => setShowModal(true)}>
          Filter
        </Button>
      </div>
      <FilterModal show={showModal} onClose={() => setShowModal(false)} />
      <DashboardTable data={tableData} />
    </Stack>
  );
};
