import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { CategoriesComponent } from './categories/categories.component';
import { BannerItemComponent } from './banner-item/banner-item.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import { SalesComponent } from './sales/sales.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    CategoriesComponent,
    BannerItemComponent,
    SalesComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    HeroComponent,
    CategoriesComponent,
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class HomeModule { }
