export interface CreateCompany {
  name: string;
  code: string;
  image: string;
}

export interface Company extends CreateCompany {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
