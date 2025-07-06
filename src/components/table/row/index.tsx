"use client";
import React, { JSX } from "react";
// 
import { ColumnConfig } from "../column";
import styles from "./styles.module.scss";



type Props = {
  row: Record<string, string | number | JSX.Element>;
  columns: ColumnConfig[];
};

export const Row: React.FC<Props> = ({ row, columns }) => {
  return (
    <tr className={styles.tableRow}>
      {columns.map(({ key, render }, idx) => (
        <td key={idx}>{render ? render(row[key], row) : row[key]}</td>
      ))}
    </tr>
  );
};
