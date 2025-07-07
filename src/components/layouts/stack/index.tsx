import React, { ReactNode } from "react";
//
import styles from "./styles.module.scss";
//
type Props = {
  children: ReactNode;
  className?: string;
};

export const Stack: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`${styles.dashboardContainer} ${className || ""}`}>
      {children}
    </div>
  );
};
