import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoint } from '../enums/endpoint';
import { Product } from '../models/product';
import { ProductUpdateRequest } from '../requests/product-update-request';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private apiService: ApiService
  ) {}

  get(id: string): Observable<Product> {
    const httpParams = new HttpParams()
    return this.apiService.get<Product>(`${Endpoint.Product}/${id}`, httpParams);
  }

  getAll(page: number, size: number) {
    const httpParams = new HttpParams()
    .set('page', page)
    .set('size', size);

    return this.apiService.getAll(`${Endpoint.Product}`, httpParams);
  }

  // update(product: Product) {
  //   return this.apiService.put(`${Endpoint.Product}`, product)
  // }

  insert(product: Product)  {
    return this.apiService.post(`${Endpoint.Product}`, product)
  }

  update(productRequest: ProductUpdateRequest)  {
    return this.apiService.put(`${Endpoint.Product}/${productRequest.productId}`, productRequest)
  }

  delete(id: string) {
    return this.apiService.delete(`${Endpoint.Product}/${id}`)
  }

  getBySearchterm(searchTerm: string, page: number, size: number) {
    const httpParams = new HttpParams()
    .set('page', page)
    .set('size', size);

    return this.apiService.get(
      `${Endpoint.Product}/${searchTerm}`,
      httpParams
    );
  }

}
