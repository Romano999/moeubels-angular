import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserCredentials } from 'src/app/core/models/usercredentials';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  hide: boolean = true;
  loginForm !: FormGroup;

  @Output() loginAttempt = new EventEmitter<UserCredentials>();

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "username": new FormControl(null, null),
      "password": new FormControl(null, null)
    });
  }

  onLoginAttempt() {
    //console.log(`${this.loginForm.value['username']} + ${this.loginForm.value['password']}`);
    let userCredentials: UserCredentials = {
      username: this.loginForm.value['username'],
      password:  this.loginForm.value['password']
    };
    this.loginAttempt.emit(userCredentials);
  }

}
