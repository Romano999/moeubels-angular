import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/core/models/actor';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss']
})
export class SignFormComponent implements OnInit{
  signUpFormNames !: FormGroup;
  signUpFormDetails !: FormGroup;
  isLinear = true;
  @Output() signInAttempt = new EventEmitter<Actor>();

  ngOnInit(): void {
    this.signUpFormNames = new FormGroup({
      "firstname": new FormControl(null, null),
      "lastname": new FormControl(null, null)
    });

    this.signUpFormDetails = new FormGroup({
      "username": new FormControl(null, null),
      "password": new FormControl(null, null)
    });
  }

  onSignInClick() {
    let actor: Actor = {
      username: this.signUpFormDetails.value['username'],
      password: this.signUpFormDetails.value['password'],
      firstName: this.signUpFormNames.value['firstname'],
      lastName: this.signUpFormNames.value['lastname'],
    }
    this.signInAttempt.emit(actor);
  }

}
