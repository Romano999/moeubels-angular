import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { MatCardModule } from '@angular/material/card';
import { ShoppingCartListComponent } from './shopping-cart-list/shopping-cart-list.component';
import { ShoppingCartItemComponent } from './shopping-cart-list/shopping-cart-item/shopping-cart-item.component';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import {  MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShoppingCartListComponent,
    ShoppingCartItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    ShoppingCartComponent,
  ]
})
export class ShoppingCartModule { }
