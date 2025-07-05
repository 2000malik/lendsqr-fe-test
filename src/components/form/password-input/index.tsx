"use client";
import React, { useCallback, useState } from "react";

import { Input } from "../input";
import styles from "./password-input.module.scss";

type Props = {
  placeholder?: string;
  sx?: React.CSSProperties;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

export const PasswordInput: React.FC<Props> = ({
  placeholder = "Password",
  sx,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);
  
  return (
    <div className={styles.passwordContainer}>
      <Input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        sx={sx}
        {...rest}
      />
      <button
        type="button"
        className={styles.toggleButton}
        onClick={togglePasswordVisibility}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? "HIDE" : "SHOW"}
      </button>
    </div>
  );
};
