import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Main: React.FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};
