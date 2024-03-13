export interface CreateColor {
  name: string;
  code: string;
  hex: string;
}

export interface Color extends CreateColor {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
