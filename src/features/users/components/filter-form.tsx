"use client";
import React from "react";
//
import { Input, Stack } from "@/src/components";
//
import styles from "./styles.module.scss";

export const FilterForm = () => {
  return (
    <form>
      <Stack className={styles.formStack}>
        <Input
          className={styles.inputLabel}
          label="Email"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <Input
          className={styles.inputLabel}
          label="Username"
          type="text"
          placeholder="User"
          name="Username"
          required
        />
        <Input
          className={styles.inputLabel}
          label="Email"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <Input
          className={styles.inputLabel}
          label="Date"
          type="date"
          placeholder="Date"
          name="Date"
          required
        />
        <Input
          className={styles.inputLabel}
          label="Phone Number"
          type="tel"
          placeholder="Phone Number"
          name="phone_number"
          required
        />
      </Stack>
    </form>
  );
};
