import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JwtService } from 'src/app/core/services/jwt.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent {
  @Output() logOut = new EventEmitter<any>();

  constructor() {}

  onLogOutClick() {
    this.logOut.emit();
  }

}
