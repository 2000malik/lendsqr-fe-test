type AuthResponseData<T> = {
  success: boolean;
  data?: T;
  message?: string;
};

type ErrorResponseData = {
  statusCode: number;
  message: string;
  error?: string;
};

type userInfo = {
  id: number;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
  fullName: string;
  tier: number;
  accountBalance: string;
  bankName: string;
  accountNumber: number;
  bvn: number;
  gender: string;
  maritalStatus: string;
  children: number;
  typeOfResidence: string;
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: number;
  twitter: string;
  facebook: string;
  instagram: string;
  guarantors: Guarantor[];
};

type Guarantor = {
  fullName: string;
  phoneNumber: string;
  email: string;
  relationship: string;
};
