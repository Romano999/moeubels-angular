import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { CategoriesComponent } from './categories/categories.component';
import { SalesComponent } from './sales/sales.component';
import { BannerItemComponent } from './banner-item/banner-item.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    CategoriesComponent,
    SalesComponent,
    BannerItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    HeroComponent,
    CategoriesComponent,
    SalesComponent
  ]
})
export class HomeModule { }
