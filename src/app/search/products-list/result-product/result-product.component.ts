import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-result-product',
  templateUrl: './result-product.component.html',
  styleUrls: ['./result-product.component.scss']
})
export class ResultProductComponent implements OnInit{
  @Input() product!: Product;
  productPrice!: string;

  constructor() { }

  ngOnInit(): void {
    this.productPrice = this.productPrice = Number(Math.round(parseFloat(this.product.price + 'e' + 2)) + 'e-' + 2).toFixed(2);
  }
}
