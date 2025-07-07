import React from "react";
//
import { StatusChip, Table } from "@/src/components";
import { ColumnConfig } from "@/src/components/table/column";
//

export type TableRow = {
  username: string;
  organization: string;
  phone_number: string;
  date:string
  email: string;
  status: string;
  actions?: null;
};

type Props = { data: TableRow[] };

export const DashboardTable: React.FC<Props> = ({ data }) => {
  const tableHeaders: ColumnConfig[] = [
    { key: "organization", label: "organization" },
    { key: "username", label: "Username" },
    { key: "email", label: "Email" },
    { key: "phone_number", label: "phone number" },
    { key: "date", label: "Date joined" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => <StatusChip status={value} />,
    },
    {
      key: "actions",
      label: "",
      render: (_: unknown, row: { username: string }) => (
        <button onClick={() => alert(row.username)}>View</button>
      ),
    },
  ];

  return <Table columns={tableHeaders} data={data} />;
};
