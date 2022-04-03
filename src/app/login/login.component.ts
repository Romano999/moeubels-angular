import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../core/services/jwt.service';
import { LoginService } from '../core/services/login.service';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    private jwtService: JwtService,
    private userService: UserService,
    private router: Router
  ) { }

  onLoginAttempt($event: any) {
    this.loginService.login($event)
    .subscribe({
      next: (response: HttpResponse<any>) => {
        let body = JSON.parse(JSON.stringify(response));
        console.log(body)
        this.jwtService.saveJwtToken(body["accessToken"])
        this.jwtService.saveRefreshToken(body["refreshToken"])
        this.userService.saveId(body["actorId"])
        this.userService.saveRole(body["role"])
        this.router.navigateByUrl('/account')
      },
      error: (e) => console.log(e)
    })
  }
}
