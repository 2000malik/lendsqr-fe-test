import { Metadata } from "next";
//
import { Dashboard } from "@/src/features";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "...",
};

export const dynamic = "force-dynamic";

export default function Home() {
  return <Dashboard />;
}
