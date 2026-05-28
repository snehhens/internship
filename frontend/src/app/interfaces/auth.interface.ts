export interface RegisterData {
  email: string;
  role: string;
}

export interface VerifyOtpData {
  email: string;
  otp: string;
}

export interface PasswordData {
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}