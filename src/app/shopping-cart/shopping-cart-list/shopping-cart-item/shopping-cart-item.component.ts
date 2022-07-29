import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() product!: Product;
  productPrice!: string;

  constructor() { }

  ngOnInit(): void {
    this.productPrice = Number(Math.round(parseFloat(this.product.price + 'e' + 2)) + 'e-' + 2).toFixed(2);
  }
}
