import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-shopping-cart-pay-item',
  templateUrl: './shopping-cart-pay-item.component.html',
  styleUrls: ['./shopping-cart-pay-item.component.scss']
})
export class ShoppingCartPayItemComponent {
  @Input() product!: Product;

  constructor() { }
}
