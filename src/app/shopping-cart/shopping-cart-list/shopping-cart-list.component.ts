import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss']
})
export class ShoppingCartListComponent {
  @Input() products: Array<Product> = [];

  constructor() { }
}
