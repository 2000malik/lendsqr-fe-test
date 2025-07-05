import React from "react";
import Link from "next/link";
//
import { Button, Input, PasswordInput } from "@/src/components";
//
import styles from "./login-form.module.scss";

export const Login = () => {
  return (
    <form className={styles.form}>
      <h2>Welcome!</h2>
      <p>Enter details to login.</p>
      {/* <div className={styles.inputGroup}> */}
        <Input type="email" placeholder="Email" name="email" required />
     

     
        <PasswordInput placeholder="Password" name="password" required />
   

      <div className={styles.forgotPassword}>
        <Link href="#">FORGOT PASSWORD?</Link>
      </div>

      <Button type="submit">LOG IN</Button>
       {/* </div> */}
    </form>
  );
};
