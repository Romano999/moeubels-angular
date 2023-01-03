import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from '../core/models/actor';
import { ActorService } from '../core/services/actor.service';
import { CustomSnackbarService } from '../core/services/custom-snackbar.service';
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
    private actorService: ActorService,
    private router: Router,
    private customSnackbarService: CustomSnackbarService,
  ) { }

  onLoginAttempt($event: any) {
    this.loginService.login($event)
    .subscribe({
      next: (response: HttpResponse<any>) => {
        let body = JSON.parse(JSON.stringify(response));
        this.jwtService.saveJwtToken(body["accessToken"])
        this.jwtService.saveRefreshToken(body["refreshToken"])
        this.userService.saveId(body["actorId"])
        this.userService.saveRole(body["role"])
        this.router.navigateByUrl('/account')
        this.customSnackbarService.open(`Login successful!`)
      },
      error: (e) => this.customSnackbarService.open(`Login failed! Please try again.`)
    })
  }

  signInAttempt($event: Actor) {
    this.actorService.insert($event).subscribe({
      next: (response: HttpResponse<any>) => {
        this.customSnackbarService.open(`Sign up successful!`)
      },
      error: (e) => this.customSnackbarService.open(`Sign up failed! Please try again.`)
    });
  }
}
