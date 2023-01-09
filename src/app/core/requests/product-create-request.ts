export interface ProductCreateRequest {
  productName: string,
  productDescription: string,
  price: number,
  imagePath: string,
  amountAvailable: number,
  categoryName: string,
}