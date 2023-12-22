export interface loginErrorType {
  email: string;
  password: string;
}

export interface registerErrorType extends loginErrorType {
  confirmPassword: string;
  firstname: string;
  lastname: string;
  role: string;
}

export interface createCarErrorType {
  title: string;
  carStatus: string;
  price: string;
  company: string;
  model: string;
  years: string;
  work: string;
  platform: string;
  fuel: string;
  gearbox: string;
  color: string;
  description: string;
  firstname: string;
  lastname: string;
  phone: string;
  image: string;
}
