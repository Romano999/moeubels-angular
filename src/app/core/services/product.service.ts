import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product';
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
    return this.apiService.get<Product>(`products/${id}`, httpParams);
  }

  getAll(page: number, size: number) {
    const httpParams = new HttpParams()
    .set('page', page)
    .set('size', size);

    return this.apiService.getAll(`products`, httpParams);
  }

  update(product: Product) {
    return this.apiService.put(`products`, product)
  }

  insert(product: Product)  {
    return this.apiService.post(`products`, product)
  }

  delete(id: string) {
    return this.apiService.delete(`products/${id}`)
  }

  getBySearchterm(searchTerm: string, page: number, size: number) {
    const httpParams = new HttpParams()
    .set('page', page)
    .set('size', size);

    return this.apiService.get(
      `products/${searchTerm}`,
      httpParams
    );
  }

}
