import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Output() shoppingCartProduct = new EventEmitter<Product>();
  @Output() favoriteProduct = new EventEmitter<Product>();
  productPrice!: string;

  constructor() { }

  ngOnInit(): void {
    this.productPrice = Number(Math.round(parseFloat(this.product.price + 'e' + 2)) + 'e-' + 2).toFixed(2);
  }

  addToShoppingCart() {
    this.shoppingCartProduct.emit()
  }

  addToFavorites() {
    this.favoriteProduct.emit()
  }
}
