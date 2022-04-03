import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  getToken(): String {
    return window.sessionStorage['jwtToken'];
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
}
