import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { AccountComponent } from './account.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AccountComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatButtonToggleModule,
    FormsModule

  ]
})
export class AccountModule {

}
