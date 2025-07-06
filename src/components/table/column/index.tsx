"use client";
import React from "react";
//
import FilterIcon from "@/public/assets/svgs/filter.svg";
//
import styles from "./styles.module.scss";

type Props = {
  tableHeaders: string[];
};

export const Column: React.FC<Props> = ({ tableHeaders }) => {
  return (
    <tr>
      {tableHeaders?.map((header, index) => {
        return (
          <th key={index}>
            <div className={styles.tableHead}>
              <span>{header}</span>
              <FilterIcon />
            </div>
          </th>
        );
      })}
    </tr>
  );
};
