import HomeIcon from "@/public/assets/svgs/home.svg";
// 
import { RoutePath } from "./routes";

export const SIDEBAR = [
  {
    name: "Dashboard",
    Icon: HomeIcon,
    link: RoutePath.DASHBOARD,
  },
  {
    category: "CUSTOMERS",
    hasDropDown: true,
    dropDownList: [
      {
        name: "Users",
        Icon: HomeIcon,
        link: RoutePath.USER,
      },
      { name: "Guarantors", Icon: HomeIcon, link: "#" },
      {
        name: "Loans",
        Icon: HomeIcon,
        link: "#",
      },
      {
        name: "Decision Models",
        Icon: HomeIcon,
        link: "#",
      },
      {
        name: "Savings",
        Icon: HomeIcon,
        link: "#",
      },
      {
        name: "Loan Requests",
        Icon: HomeIcon,
        link: "#",
      },
      {
        name: "Whitelist",
        Icon: HomeIcon,
        link: "#",
      },
      {
        name: "Karma",
        Icon: HomeIcon,
        link: "#",
      },
    ],
  },

  {
    category: "BUSINESS",
    hasDropDown: true,
    dropDownList: [
      {
        name: "Organization",
        Icon: HomeIcon,
        link: "#",
      },
      { name: "Loan Products", Icon: HomeIcon, link: "#" },
      {
        name: "Savings Products",
        Icon: HomeIcon,
        link: "#",
      },
      {
        name: "Fees and Charges",
        Icon: HomeIcon,
        link: "#",
      },
      {
        name: "Transactions",
        Icon: HomeIcon,
        link: "#",
      },
      {
        name: "Services",
        Icon: HomeIcon,
        link: "#",
      },
      {
        name: "Service Account",
        Icon: HomeIcon,
        link: "#",
      },
      {
        name: "Settlements",
        Icon: HomeIcon,
        link: "#",
      },
      {
        name: "Reports",
        Icon: HomeIcon,
        link: "#",
      },
    ],
  },

  {
    category: "SETTINGS",
    hasDropDown: true,
    dropDownList: [
      {
        name: "Preferences",
        Icon: HomeIcon,
        link: "#",
      },
      { name: "Fees and Pricing", Icon: HomeIcon, link: "#" },
      {
        name: "Audit Logs",
        Icon: HomeIcon,
        link: "#",
      },
    ],
  },
];
