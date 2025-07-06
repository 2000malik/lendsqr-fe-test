import UsersIcon from "@/public/assets/svgs/users.svg";
import ActiveUsersIcon from "@/public/assets/svgs/active-user.svg";
import LoanUsersIcon from "@/public/assets/svgs/user-loan.svg";
import SavingsUsersIcon from "@/public/assets/svgs//user-savings.svg";

type TableRow = {
  username: string;
  email: string;
  status: string;
  actions?: null;
};

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
    username: "Adedeji",
    email: "deji@mail.com",
    status: "Active",
    actions: null,
  },
  {
    username: "Nedu",
    email: "nedu@mail.com",
    status: "Inactive",
    actions: null,
  },
];
