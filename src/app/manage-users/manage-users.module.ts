import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ManageUserListComponent } from './manage-user-list/manage-user-list.component';
import { ManageableUserComponent } from './manage-user-list/manageable-user/manageable-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ManageUsersComponent } from './manage-users.component';



@NgModule({
  declarations: [
    ManageUsersComponent,
    ManageUserListComponent,
    ManageableUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ManageUsersModule { }
