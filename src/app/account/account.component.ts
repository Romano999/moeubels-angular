import { Component, OnInit } from '@angular/core';
import { Role } from '../core/enums/role';
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
  adminRole: Role = Role.Administrator

  constructor(
    private jwtService: JwtService,
    private userService: UserService
  ) {
    this.userRole = userService.getRole()

  }

}
