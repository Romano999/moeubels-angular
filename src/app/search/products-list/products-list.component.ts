import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent{
  @Input() products: Array<Product> = [];

  constructor() { }
}
