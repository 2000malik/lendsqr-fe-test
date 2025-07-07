import React from "react";
//
import styles from "./style.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export const Flex: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>{children}</div>
  );
};
