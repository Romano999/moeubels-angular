import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Endpoint } from "../enums/endpoint";
import { Category } from "../models/category";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(
    private apiService: ApiService
  ) {}

  get(id: string) {
    const httpParams = new HttpParams()
    return this.apiService.get<Category>(`${Endpoint.Category}/${id}`, httpParams);
  }

  getAll(page: number, size: number) {
    const httpParams = new HttpParams()
    .set('page', page)
    .set('size', size);

    return this.apiService.getAll(`${Endpoint.Category}`, httpParams);
  }

  update(category: Category) {
    return this.apiService.put(`${Endpoint.Category}`, category)
  }

  insert(category: Category)  {
    return this.apiService.post(`${Endpoint.Category}`, category)
  }

  delete(id: string) {
    return this.apiService.delete(`${Endpoint.Category}/${id}`)
  }
}