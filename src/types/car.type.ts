export interface createCarType {
  title: string;
  carStatus: number | null;
  price: number | null;
  company: string;
  model: string;
  years: number | null;
  work: number | null;
  platform: number | null;
  fuel: string;
  gearbox: number | null;
  color: string;
  description: string;
  firstname: string;
  lastname: string;
  phone: number | null;
  image: string | null;
}

export interface CarType extends createCarType {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
