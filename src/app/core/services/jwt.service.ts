import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Endpoint } from '../enums/endpoint';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(
    private http: HttpClient
    ) {}

  getToken(): String {
    return window.sessionStorage['jwtToken'];
  }

  getRefreshToken(): String {
    return window.sessionStorage['refreshToken'];
  }

  saveJwtToken(token: String) {
    window.sessionStorage['jwtToken'] = token;
  }

  saveRefreshToken(token: String) {
    window.sessionStorage['refreshToken'] = token;
  }

  destroyTokens() {
    window.sessionStorage.removeItem('jwtToken');
    window.sessionStorage.removeItem('refreshToken');
  }

  refreshToken() {
    return this.http.post(
      `${environment.api_short_url}/${Endpoint.RefreshToken}`,
      null,
      { headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getRefreshToken()}`})}
    );
  }
}
