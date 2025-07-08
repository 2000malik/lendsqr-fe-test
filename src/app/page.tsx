import React from "react";
import { Metadata } from "next";

//
import { Login } from "@/src/features";

export const metadata: Metadata = {
  title: "Login",
  description: "...",
};

export default function LoginPage() {
  return <Login />;
}
