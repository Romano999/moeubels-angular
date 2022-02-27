import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    GoogleMapsModule
  ],
  exports: [
    CommonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTabsModule,
    GoogleMapsModule
  ]
})
export class ContactModule { }
