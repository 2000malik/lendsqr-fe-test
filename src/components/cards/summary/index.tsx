"use client";
import React from "react";
//
import styles from "./styles.module.scss";

type Props = {
  label?: string;
  Icon?: string;
  value?: string | number;
  className?: string;
};

export const SummaryCard: React.FC<Props> = ({
  label,
  Icon,
  value,
  className,
}) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>
      {Icon && (
        <div className={styles.iconWrapper}>
          <Icon />
        </div>
      )}
      {label && <h5>{label}</h5>}
      {value && <h4>{value}</h4>}
    </div>
  );
};
