import React, { CSSProperties } from "react";
//
import styles from "./input-styles.module.scss";
import { Label } from "../label";

type Props = {
  type?: string;
  placeholder?: string;
  label?: string;
  className?: string;
  sx?: CSSProperties;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({
  type = "text",
  placeholder,
  sx,
  label,
  className,
  ...rest
}) => {
  return (
    <div className={styles.container}>
      {label && <Label htmlFor={rest.name}>{label}</Label>}
      <input
        className={`${styles.input} ${className || ""}`}
        type={type}
        placeholder={placeholder}
        style={sx}
        {...rest}
      />
    </div>
  );
};
