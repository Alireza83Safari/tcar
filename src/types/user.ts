export interface User {
  _id: string;
  firstname: string;
  lastname: string;
  username: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUser {
  firstname: string;
  lastname: string;
  username: string;
}
