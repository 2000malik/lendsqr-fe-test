"use client";
import React from "react";
//
import MoreIcon from "@/public/assets/svgs/more.svg";
//
import { StatusChip, Table } from "@/src/components";
import { ColumnConfig } from "@/src/components/table/column";
//
import styles from "../styles.module.scss";
import { setStorage } from "@/src/libs/utils";
import { useRouter } from "next/navigation";
import { RoutePath } from "@/src/constants/routes";

type Props = { data: userInfo[]; loading?: boolean };

export const DashboardTable: React.FC<Props> = ({ data, loading }) => {
  const router = useRouter();
  const tableHeaders: ColumnConfig[] = [
    { key: "organization", label: "organization" },
    { key: "username", label: "Username" },
    { key: "email", label: "Email" },
    { key: "phoneNumber", label: "phone number" },
    { key: "dateJoined", label: "Date joined" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => <StatusChip status={value} />,
    },
    {
      key: "actions",
      label: "",
      render: (_: unknown, row: userInfo) => (
        <button
          className={styles.viewMoreBtn}
          onClick={() => {
            setStorage({
              key: "user",
              data: row,
              next: () => router.push(`${RoutePath.USER}/${row.id}`),
            });
          }}
        >
          <MoreIcon />
        </button>
      ),
    },
  ];

  return <Table columns={tableHeaders} data={data} loading={loading} />;
};
