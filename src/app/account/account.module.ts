import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { AccountComponent } from './account.component';


@NgModule({
  declarations: [
    AccountComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ]
})
export class AccountModule { }
