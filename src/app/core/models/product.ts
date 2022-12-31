import { Category } from "./category";

export interface Product {
  category: Category,
  productId: string,
  productName: string,
  productDescription: string,
  amountAvailable: number,
  price: number,
  imagePath?: string,
  isOnSale: boolean,
  createdAt?: Date,
  modifiedAt?: Date
}
