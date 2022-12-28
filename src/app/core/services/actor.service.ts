import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoint } from '../enums/endpoint';
import { Actor } from '../models/actor';
import { ActorUpdateRequest } from '../requests/actor-update-request';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(
    private apiService: ApiService
  ) {}

  get(id: string): Observable<Actor> {
    const httpParams = new HttpParams()
    return this.apiService.get<Actor>(`${Endpoint.Actor}/${id}`, httpParams);
  }

  getAll(page: number, size: number) {
    const httpParams = new HttpParams()
    .set('page', page)
    .set('size', size);

    return this.apiService.getAll(`${Endpoint.Actor}`, httpParams);
  }

  update(actorRequest: ActorUpdateRequest) {
    return this.apiService.put(`${Endpoint.Actor}/${actorRequest.userId}`, actorRequest)
  }

  insert(actor: Actor)  {
    return this.apiService.post(`${Endpoint.Actor}`, actor)
  }

  delete(id: string) {
    return this.apiService.delete(`${Endpoint.Actor}/${id}`)
  }

  getBySearchterm(searchTerm: string, page: number, size: number) {
    const httpParams = new HttpParams()
    .set('page', page)
    .set('size', size);

    return this.apiService.get(
      `${Endpoint.Actor}/${searchTerm}`,
      httpParams
    );
  }
}
