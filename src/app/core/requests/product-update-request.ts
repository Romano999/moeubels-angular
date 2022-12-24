export interface ProductUpdateRequest {
  productId: string,
  productName: string,
  productDescription: string,
  price: number,
  imagePath: string,
  categoryId: string,
  amountAvailable: number
}