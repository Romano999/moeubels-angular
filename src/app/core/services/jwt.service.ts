import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  getToken(): String {
    return window.localStorage['jwtToken'];
  }

  saveJwtToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  saveRefreshToken(token: String) {
    window.localStorage['refreshToken'] = token;
  }

  destroyTokens() {
    window.localStorage.removeItem('jwtToken');
    window.localStorage.removeItem('refreshToken');
  }

}
