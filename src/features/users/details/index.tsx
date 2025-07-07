import React from "react";
//
import { Header, Stack } from "@/src/components";

type Props = {
  id: string;
};
export const UserDetails = ({ id }: Props) => {
  return (
    <Stack>
      {id}
      <Header title="Users Details" />
    </Stack>
  );
};
