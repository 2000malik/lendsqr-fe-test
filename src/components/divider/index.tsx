// components/Divider/index.tsx
import React from "react";
import styles from "./styles.module.scss";

type Props = {
  className?: string;
};

export const Divider: React.FC<Props> = ({ className }) => {
  return <hr className={`${styles.divider} ${className || ""}`} />;
};
