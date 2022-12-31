import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserCredentials } from 'src/app/core/models/usercredentials';
import { CustomSnackbarService } from 'src/app/core/services/custom-snackbar.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  hide: boolean = true;
  loginForm !: FormGroup;

  @Output() loginAttempt = new EventEmitter<UserCredentials>();

  constructor(    
    private customSnackbarService: CustomSnackbarService,
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "username": new FormControl(null, [
        Validators.required
      ]),
      "password": new FormControl(null, [
        Validators.required
      ])
    });
  }

  onLoginAttempt() {
    //console.log(`${this.loginForm.value['username']} + ${this.loginForm.value['password']}`);

    if (!this.loginForm.valid) {
      this.customSnackbarService.open("Please fill in all fields!");

    } else {
      let userCredentials: UserCredentials = {
        username: this.loginForm.value['username'],
        password:  this.loginForm.value['password']
      };
      this.loginAttempt.emit(userCredentials);
    }
  }
}
