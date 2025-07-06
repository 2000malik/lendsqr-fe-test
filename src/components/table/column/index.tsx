"use client";
import React from "react";
//
import FilterIcon from "@/public/assets/svgs/filter.svg";
//
import styles from "./styles.module.scss";


export type ColumnConfig = {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
};

type Props = {
  tableHeaders: ColumnConfig[];
};

export const Column: React.FC<Props> = ({ tableHeaders }) => {
  return (
    <tr>
      {tableHeaders?.map((header, index) => {
        return (
          <th key={index}>
            <div className={styles.tableHead}>
              <span>{header.label}</span>
              <FilterIcon />
            </div>
          </th>
        );
      })}
    </tr>
  );
};
