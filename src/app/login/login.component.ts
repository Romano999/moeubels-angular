import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService
  ) { }


  onLoginAttempt($event: any) {
    this.loginService.login($event)
    .subscribe({
      next: (response: HttpResponse<any>) => {
        let body = JSON.parse(JSON.stringify(response));
        console.log(body);
      },
      error: (e) => console.log(e)
    })
  }
}
