import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pageable } from '../core/models/pageable';
import { Product } from '../core/models/product';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  products: Product[] = [];
  pageable: Pageable = {page: 0, amount:5}
  amountOfResults: number = 0;

  constructor(
    private productService: ProductService
  ) { }


  ngOnInit() {
    this.productService.getAll(this.pageable.page, this.pageable.amount)
    .subscribe({
      next: (response: HttpResponse<any>) => {
        let body = JSON.parse(JSON.stringify(response));
        this.products = body.content;
        console.log(body);
        this.amountOfResults = body.totalElements
      },
      error: (e) => console.log(e)
    })
  }

  searchProduct(searchTerm: any) {
    this.productService.getBySearchterm(searchTerm as string, this.pageable.page, this.pageable.amount)
      .subscribe({
        next: (response: HttpResponse<any>) => {
          let body = JSON.parse(JSON.stringify(response));
          this.products = body.content;
          console.log(body);
          this.amountOfResults = body.totalElements
        },
        error: (e) => console.log(e)
      })
  }

  onPagingChange(pageSettings: any) {
    console.log(pageSettings)
    this.pageable = pageSettings;
  }
}
