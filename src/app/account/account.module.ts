import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { AccountComponent } from './account.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { HelpComponent } from './help/help.component';
import { AdminComponent } from './admin/admin.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AccountComponent,
    PersonalInformationComponent,
    HelpComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatButtonToggleModule,
    FormsModule,
    RouterModule,
    MatButtonModule
  ]
})
export class AccountModule {

}
