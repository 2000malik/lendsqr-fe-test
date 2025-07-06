import React from "react";
//
import { Row } from "./row";
import styles from "./styles.module.scss";
import { Column, ColumnConfig } from "./column";

type Props = {
  columns: ColumnConfig[];
  data: Record<string, any>[];
};

export const Table: React.FC<Props> = ({ columns, data }) => {
  return (
    <div className={styles.tableWrapper}>
      <table>
        <thead>
          <Column tableHeaders={columns} />
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <Row key={idx} row={row} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
