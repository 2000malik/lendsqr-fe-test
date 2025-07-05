import type { Metadata } from "next";

//
import { Users } from "@/src/features";

export const metadata: Metadata = {
  title: "Users",
  description: "...",
};

export const dynamic = "force-dynamic";

export default function UsersPage() {
  return <Users />;
}
