import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredentials } from '../models/usercredentials';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  constructor(
    private apiService: ApiService
  ) {}

  login(userCredentials: UserCredentials): Observable<any> {
    return this.apiService.login(userCredentials);
  }

}
