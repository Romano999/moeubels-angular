import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../core/models/product';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {
  id: string = "";
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.getAll('productId')[0]
    })
    this.productService.get(this.id)
    .subscribe( product => this.product = product)
  }


}


