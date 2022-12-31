import { Actor } from "./actor";
import { Product } from "./product";

export interface Review {
  reviewId?: string,
  actor: Actor,
  product: Product,
  rating: number,
  comment: string,
  addedAt?: Date,
}
