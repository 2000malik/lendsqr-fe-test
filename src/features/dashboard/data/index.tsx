import UsersIcon from "@/public/assets/svgs/users.svg";
import ActiveUsersIcon from "@/public/assets/svgs/active-user.svg";
import LoanUsersIcon from "@/public/assets/svgs/user-loan.svg";
import SavingsUsersIcon from "@/public/assets/svgs//user-savings.svg";
// 
import { TableRow } from "../table";



export const summaryCardData = [
  {
    Icon: UsersIcon,
    label: "Users",
    value: "2,453",
  },
  {
    Icon: ActiveUsersIcon,
    label: "Active Users",
    value: "2,453",
  },
  {
    Icon: LoanUsersIcon,
    label: "Users with Loans",
    value: "12,453",
  },
  {
    Icon: SavingsUsersIcon,
    label: "Users with Savings",
    value: "102,453",
  },
];

export const tableData: TableRow[] = [
  {
    organization:"Lendsqr",
    username: "Adedeji",
    email: "deji@mail.com",
    phone_number:"Lendsqr",
    date:"May 15, 2020 10:00 AM",
    status: "Active",
    actions: null,
  },
  {
     organization:"Malik",
    username: "Nedu",
    email: "nedu@mail.com",
     phone_number:"Lendsqr",
    date:"May 15, 2020 10:00 AM",
    status: "Inactive",
    actions: null,
  },
];
