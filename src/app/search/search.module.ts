import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductsListComponent } from './products-list/products-list.component';
import { ResultProductComponent } from './products-list/result-product/result-product.component';
import { SearchPaginatorComponent } from './search-paginator/search-paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchComponent,
    SearchBarComponent,
    ProductsListComponent,
    ResultProductComponent,
    SearchPaginatorComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchComponent,
    SearchBarComponent,
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
