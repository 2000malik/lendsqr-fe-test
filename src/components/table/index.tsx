import React from "react";
//
import { Column } from "./column";
import styles from "./styles.module.scss";

type Props = {
  columns: string[];
};

export const Table: React.FC<Props> = ({ columns }) => {
  return (
    <div className={styles.tableWrapper}>
      <table>
        <thead>
          <Column tableHeaders={columns} />
        </thead>
      </table>
    </div>
  );
};
