export interface CreatePlatform {
  name: string;
  code: string;
  image: string;
}

export interface Platform extends CreatePlatform {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
