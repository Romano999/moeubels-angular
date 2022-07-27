import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-shopping-cart-pay',
  templateUrl: './shopping-cart-pay.component.html',
  styleUrls: ['./shopping-cart-pay.component.scss']
})
export class ShoppingCartPayComponent {
  @Input() products: Array<Product> = [];

  constructor() { }

  getTotalPrice() {
    let totalPrice: number = 0;
    this.products.forEach(product => totalPrice += product.price);
    return totalPrice;
  }
}
