import React from "react";
//
import styles from "./styles.module.scss";
type Props = {
  title: string;
  className?: string;
};
export const Header: React.FC<Props> = ({ title, className }) => {
  return <h4 className={`${styles.header} ${className || ""}`}>{title}</h4>;
};
