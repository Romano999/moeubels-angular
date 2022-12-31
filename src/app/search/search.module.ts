import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductsListComponent } from './products-list/products-list.component';
import { ResultProductComponent } from './products-list/result-product/result-product.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SearchComponent,
    ProductsListComponent,
    ResultProductComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatCardModule,
    MatChipsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    SearchComponent,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    ProductsListComponent,
    ResultProductComponent,
    MatPaginatorModule
  ]
})
export class SearchModule { }
