import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ManageProductComponent } from './manage-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ManageProductListComponent } from './manage-product-list/manage-product-list.component';
import { ManageableProductComponent } from './manage-product-list/manageable-product/manageable-product.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateProductComponent } from './create-product/create-product.component';

@NgModule({
  declarations: [
    ManageProductComponent,
    ManageProductListComponent,
    ManageableProductComponent,
    CreateProductComponent,
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
export class ManageProductModule { }
