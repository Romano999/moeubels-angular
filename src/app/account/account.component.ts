import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../core/enums/role';
import { CustomSnackbarService } from '../core/services/custom-snackbar.service';
import { JwtService } from '../core/services/jwt.service';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  contactMethod?: String = 'phone';
  userRole: String;
  adminRole: Role = Role.Administrator;
  isAdmin!: boolean;

  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private router: Router,
    private customSnackbarService: CustomSnackbarService,
  ) {
    this.userRole = userService.getRole();
    this.isAdmin = this.adminRole !== 'Administrator';
  }

  onLogOut() {
    this.jwtService.destroyTokens();
    this.userService.logOut();
    this.router.navigateByUrl('/home');
    this.customSnackbarService.open("Logged out successfully!");
  }
}
