import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoint } from '../enums/endpoint';
import { Product } from '../models/product';
import { ShoppingCartRequest } from '../models/shopping-cart-request';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(
    private apiService: ApiService
  ) {}

  get(id: string): Observable<ShoppingCartRequest> {
    const httpParams = new HttpParams()
    return this.apiService.get<ShoppingCartRequest>(`${Endpoint.ShoppingCart}/${id}`, httpParams);
  }

  getAll(actorId: String) {

    return this.apiService.get(`${Endpoint.ShoppingCart}/${actorId}`);
  }
  update(shoppingCart: ShoppingCartRequest) {
    return this.apiService.put(`${Endpoint.ShoppingCart}`, shoppingCart)
  }

  insert(shoppingCartRequest: ShoppingCartRequest)  {
    return this.apiService.post(`${Endpoint.ShoppingCart}`, shoppingCartRequest)
  }

  delete(id: string) {
    return this.apiService.delete(`${Endpoint.ShoppingCart}/${id}`)
  }
}
