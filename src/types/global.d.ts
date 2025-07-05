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
