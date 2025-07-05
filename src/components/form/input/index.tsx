import React, { CSSProperties } from "react";
//
import styles from "./input-styles.module.scss";

type Props = {
  type?: string;
  placeholder?: string;
  sx?: CSSProperties;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({
  type = "text",
  placeholder,
  sx,
  ...rest
}) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      style={sx}
      {...rest}
    />
  );
};
