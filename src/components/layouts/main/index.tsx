import React from "react";
//
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
};

export const Main: React.FC<Props> = ({ children }) => {
  return <main className={styles.mainDashboard}>{children}</main>;
};
