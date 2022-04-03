import { Actor } from "./actor"
import { Product } from "./product";

export interface ShoppingCart {
  actor: Actor,
  product: Product,
}
