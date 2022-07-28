import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-shopping-cart-pay',
  templateUrl: './shopping-cart-pay.component.html',
  styleUrls: ['./shopping-cart-pay.component.scss']
})
export class ShoppingCartPayComponent {
  @Input() products: Array<Product> = [];
  @Output() payment = new EventEmitter<Product>();

  constructor() { }

  getTotalPrice() {
    let totalPrice: number = 0;
    this.products.forEach(product => totalPrice += product.price);
    return totalPrice;
  }

  payItems() {
    this.payment.emit();
  }
}
