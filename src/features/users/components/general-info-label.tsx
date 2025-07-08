import React from "react";
//
import { Stack } from "@/src/components";
//
import styles from "./styles.module.scss";

type Props = {
  label: string;
  value: string;
};

export const GeneralInfoLabel: React.FC<Props> = ({ label, value }) => {
  return (
    <Stack className={styles.generalInfoSec}>
      <p>{label}</p>
      <h4>{value}</h4>
    </Stack>
  );
};
