
export interface createCompanyType {
  name: string;
  code: string;
  image: string;
}

export interface companyType extends createCompanyType {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
