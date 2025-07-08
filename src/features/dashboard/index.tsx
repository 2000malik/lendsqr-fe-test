"use client";

//
import { Header, Stack, SummaryCard } from "@/src/components";
//
import { summaryCardData } from "./data";
import styles from "./styles.module.scss";
import { DashboardTable } from "./table";
import { useGetUsers } from "../../hooks/useGetUsers";

export const Dashboard = () => {
  const { users, loading } = useGetUsers();

  return (
    <Stack>
      <Header title="Users" />
      <div className={styles.cardGrid}>
        {summaryCardData.map(({ label, Icon, value }) => (
          <SummaryCard key={label} label={label} Icon={Icon} value={value} />
        ))}
      </div>

      <DashboardTable data={users} loading={loading} />
    </Stack>
  );
};
