export interface colorType {
  name: string;
  code: string;
  hex: string;
}

export interface getColorType extends colorType {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
