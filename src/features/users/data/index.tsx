export const tabsOption = [
  { label: "General Details", value: "general" },
  { label: "Documents", value: "documents" },
  { label: "Bank Details", value: "bank" },
  { label: "Loans", value: "loans" },
  { label: "Savings", value: "savings" },
  { label: "App and System", value: "app" },
];

export const personalInfo = (data?: userInfo) => [
  {
    label: "full Name",
    value: data?.fullName ?? "",
  },
  {
    label: "Phone Number",
    value: data?.phoneNumber ?? "",
  },
  {
    label: "Email Address",
    value: data?.email ?? "",
  },
  {
    label: "Bvn",
    value: data?.bvn ?? "",
  },
  {
    label: "Gender",
    value: data?.gender ?? "",
  },
  {
    label: "Marital status",
    value: data?.maritalStatus ?? "",
  },
  {
    label: "Children",
    value: data?.children ?? "",
  },
  {
    label: "Type of residence",
    value: data?.typeOfResidence ?? "",
  },
];
export const educationInfo = (data?: userInfo) => [
  {
    label: "level of education",
    value: data?.levelOfEducation ?? "",
  },
  {
    label: "employment status",
    value: data?.employmentStatus ?? "",
  },
  {
    label: "sector of employment",
    value: data?.sectorOfEmployment ?? "",
  },
  {
    label: "Duration of employment",
    value: data?.durationOfEmployment ?? "",
  },
  {
    label: "office email",
    value: data?.officeEmail ?? "",
  },
  {
    label: "Monthly income",
    value: data?.monthlyIncome ?? "",
  },
  {
    label: "loan repayment",
    value: data?.loanRepayment ?? "",
  },
];
export const socialsInfo = (data?: userInfo) => [
  {
    label: "Twitter",
    value: data?.twitter ?? "",
  },
  {
    label: "Facebook",
    value: data?.facebook ?? "",
  },
  {
    label: "Instagram",
    value: data?.instagram ?? "",
  },
];
export const GuarantorInfo = (data?: userInfo) => {
  if (!data?.guarantors || !Array.isArray(data.guarantors)) return [];

  return data?.guarantors?.flatMap((guarantor, index) => [
    { label: ` Full Name`, value: guarantor.fullName ?? "" },
    {
      label: `Phone Number`,
      value: guarantor.phoneNumber ?? "",
    },
    { label: ` Email`, value: guarantor.email  ?? ""},
    {
      label: `Relationship`,
      value: guarantor.relationship ?? "",
    },
  ]);
};
