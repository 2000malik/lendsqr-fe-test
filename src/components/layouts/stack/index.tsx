import React, { ReactNode } from "react";
//
import styles from "./styles.module.scss";
//
type Props = {
  children: ReactNode;
};

export const Stack: React.FC<Props> = ({ children }) => {
  return <div className={styles.dashboardContainer}>{children}</div>;
};
