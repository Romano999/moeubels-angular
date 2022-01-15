import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-result-product',
  templateUrl: './result-product.component.html',
  styleUrls: ['./result-product.component.scss']
})
export class ResultProductComponent {
  @Input() product!: Product;

  constructor() { }
}
