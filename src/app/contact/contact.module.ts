import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTabsModule
  ]
})
export class ContactModule { }
