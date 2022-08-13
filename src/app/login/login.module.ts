import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignFormComponent } from './sign-form/sign-form.component';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    SignFormComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    ReactiveFormsModule,
    RouterModule,
    MatStepperModule,
  ],
  exports: [
    LoginComponent,
    LoginFormComponent,
  ]
})
export class LoginModule { }
