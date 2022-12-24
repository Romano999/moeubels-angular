import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductUpdateRequest } from 'src/app/core/requests/product-update-request';

@Component({
  selector: 'app-manage-product-list',
  templateUrl: './manage-product-list.component.html',
  styleUrls: ['./manage-product-list.component.scss']
})
export class ManageProductListComponent implements OnInit {
  @Input() products: Array<Product> = [];
  @Output() editAttempt = new EventEmitter<ProductUpdateRequest>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onEditAttempt(updatedProduct: ProductUpdateRequest) {
    this.editAttempt.emit(updatedProduct);
  }
}
