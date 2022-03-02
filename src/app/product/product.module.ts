import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule
  ]
})
export class ProductModule { }
