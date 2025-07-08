"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
//
import { Button, Input, PasswordInput } from "@/src/components";
//
import styles from "./login-form.module.scss";
import { RoutePath } from "@/src/constants/routes";

export const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!(email && pwd)) {
      return;
    }
    return router.push(RoutePath.DASHBOARD);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Welcome!</h2>
      <p>Enter details to login.</p>

      <Input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoFocus
      />

      <PasswordInput
        placeholder="Password"
        name="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
        required
      />

      <div className={styles.forgotPassword}>
        <Link href="#">FORGOT PASSWORD?</Link>
      </div>

      <Button type="submit" disabled={!(email && pwd)}>
        LOG IN
      </Button>
    </form>
  );
};
