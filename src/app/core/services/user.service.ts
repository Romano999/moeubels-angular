import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  getRole(): String {
    return window.sessionStorage['role'];
  }

  saveRole(role: String) {
    console.log(role)
    window.sessionStorage['role'] = role;
  }

  getId(): String {
    return window.sessionStorage['id'];
  }

  saveId(id: String) {
    console.log(id)
    window.sessionStorage['id'] = id;
  }

  logOut() {
    window.sessionStorage.removeItem('id');
    window.sessionStorage.removeItem('role');
  }
}
