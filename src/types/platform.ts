export interface platformType {
  name: string;
  code: string;
  image: string;
}

export interface getPlatformType extends platformType {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
