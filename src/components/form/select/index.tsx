import React from "react";
//
import styles from "./style.module.scss";
import { Stack } from "../../layouts/stack";
import { Label } from "../label";

type Props = {
  options: { label: string; value: string }[];
  label?: string;
  placeholder?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select: React.FC<Props> = ({
  options,
  label,
  className,
  placeholder = "Select",
  ...rest
}) => {
  return (
    <Stack className={styles.container}>
      {label && <Label>{label}</Label>}
      <select
        value={rest.value}
        onChange={rest.onChange}
        disabled={rest.disabled}
        className={`${styles.select} ${className}`}
      >
        <option>{placeholder}</option>
        {options.map((item, index) => {
          return (
            <option key={index + "#"} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </Stack>
  );
};
