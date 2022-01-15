import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTabsModule
  ],
  exports: [
    CommonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTabsModule
  ]
})
export class ContactModule { }
