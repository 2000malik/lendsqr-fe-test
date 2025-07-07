import React from "react";
//
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <label className={`${styles.inputLabel} ${className || ""}`} {...rest}>
      {children}
    </label>
  );
};
