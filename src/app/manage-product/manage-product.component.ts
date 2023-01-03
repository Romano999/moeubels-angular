import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pageable } from '../core/models/pageable';
import { Product } from '../core/models/product';
import { ProductUpdateRequest } from '../core/requests/product-update-request';
import { CustomSnackbarService } from '../core/services/custom-snackbar.service';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {
  pageable: Pageable = {page: 0, amount:5};
  amountOfResults!: number;
  previousSearchterm: String = "";
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private customSnackbarService: CustomSnackbarService,
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  
  onPagingChange(pageSettings: any) {
    this.pageable = pageSettings;
    if (!this.previousSearchterm) {
      // this.getAllProducts();
    } else {
      // this.getAllProductsBySearchterm(this.previousSearchterm)
    }
  }

  searchProduct(searchterm: any) {
    searchterm = searchterm.trim();
    this.previousSearchterm = searchterm;

    if (!searchterm) {
      this.getAllProducts();
    } else {
      this.getAllProductsBySearchterm(searchterm)
    }
  }

  getAllProducts() {
    this.productService.getAll(this.pageable.page, this.pageable.amount)
    .subscribe({
      next: (response: HttpResponse<any>) => {
        let body = JSON.parse(JSON.stringify(response));
        this.products = body.content;
        this.amountOfResults = body.totalElements;
      },
    })
  }

  getAllProductsBySearchterm(searchterm: any) {
    this.previousSearchterm = searchterm;
    this.productService.getBySearchterm(searchterm as string, this.pageable.page, this.pageable.amount)
      .subscribe({
        next: (response: HttpResponse<any>) => {
          let body = JSON.parse(JSON.stringify(response));
          this.products = body.content;
          this.amountOfResults = body.totalElements;
        },
    })
  }

  onEditAttempt(updatedProduct: ProductUpdateRequest) {
    this.productService.update(updatedProduct)
    .subscribe({
      next: (response: HttpResponse<any>) => {
        let body = JSON.parse(JSON.stringify(response));
        this.customSnackbarService.open(
          `You edited ${updatedProduct.productName}`,
        )
      },
    })
  }

}
