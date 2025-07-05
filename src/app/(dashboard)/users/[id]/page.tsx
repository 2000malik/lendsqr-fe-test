import type { Metadata } from "next";

//
import { UserDetails } from "@/src/features";

export const metadata: Metadata = {
  title: "Users Details",
  description: "...",
};

export const dynamic = "force-dynamic";

export default async function UsersDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <UserDetails id={id} />;
}
