import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoint } from '../enums/endpoint';
import { Review } from '../models/review';
import { ReviewRequest } from '../requests/review-request';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  constructor(
    private apiService: ApiService
  ) { }

  getAll() {
    throw new Error('Not implemented yet');
  }

  getByProductId(productId: string): Observable<Review[]> {
    const httpParams = new HttpParams()
    return this.apiService.get<Review>(`${Endpoint.Review}/product/${productId}`, httpParams);
  }

  insert(reviewRequest: ReviewRequest)  {
    return this.apiService.post(`${Endpoint.Review}`, reviewRequest)
  }
}
