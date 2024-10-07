export interface LoginType {
  email: string;
  password: string;
}

export interface RegisterType {
  email: string;
  password: string;
  name: string;
  address: string;
}

export interface ProductType {
  id: string;
  name: string;
  urlName: string;
  picture: string;
  basePrice: number;
  discountPercentage: number;
  stock: number;
  description: string;
  categories: {name: string}
}
