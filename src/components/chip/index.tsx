import React from "react";
//

import variables from "../../styles/variables.module.scss";
type Props = {
  status: string;
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return variables.lightGreen;
    case "Pending":
      return variables.lightYellow;
    case "Blacklisted":
      return variables.lightRed;
    default:
      return variables.lightGrayColor;
  }
};

const getStatusTextColor = (status: string) => {
  switch (status) {
    case "Active":
      return variables.greenColor;
    case "Pending":
      return variables.yellowColor;
    case "Blacklisted":
      return variables.redColor;
    default:
      return variables.textColor;
  }
};

export const StatusChip: React.FC<Props> = ({ status }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "fit-content",
        padding: 10,
        borderRadius: 50,
        height: 30,
        fontWeight: 400,
        fontSize: 14,
        background: getStatusColor(status),
        color: getStatusTextColor(status),
        boxShadow: variables.boxShadowColor,
      }}
    >
      <p> {status}</p>
    </div>
  );
};
