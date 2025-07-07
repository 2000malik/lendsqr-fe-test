"use client";
import React from "react";
//
import { Button, Input, Select, Stack } from "@/src/components";
//
import styles from "./styles.module.scss";

export const FilterForm = () => {
  const option = [{ label: "lendsqr", value: "lendsqr" }];
  const statusOption = [{ label: "Active", value: "active" }];
  return (
    <form>
      <Stack className={styles.formStack}>
        <Select label="Organization" options={option} />
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
        <Select label="Status" options={statusOption} />
        <div className={styles.formFooter}>
          <Button className={styles.resetBtn}>Reset</Button>
          <Button>Filter</Button>
        </div>
      </Stack>
    </form>
  );
};
