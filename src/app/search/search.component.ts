import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pageable } from '../core/models/pageable';
import { Product } from '../core/models/product';
import { CategoryService } from '../core/services/category.service';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  products: Product[] = [];
  pageable: Pageable = {page: 0, amount:5};
  amountOfResults!: number;
  previousSearchterm: String = "";

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getAllProducts();
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

  onPagingChange(pageSettings: any) {
    this.pageable = pageSettings;
    if (!this.previousSearchterm) {
      this.getAllProducts();
    } else {
      this.getAllProductsBySearchterm(this.previousSearchterm)
    }
  }

  getAllProducts() {
    this.productService.getAll(this.pageable.page, this.pageable.amount)
    .subscribe({
      next: (productResponse: HttpResponse<any>) => {
        let body = JSON.parse(JSON.stringify(productResponse));
        let categoryId: string = body.content[0].categoryId;
        this.products = body.content;
        this.amountOfResults = body.totalElements;
      },
      error: (e) => {}
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
        error: (e) => {}
    })
  }
}
