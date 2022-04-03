import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { BannerItemComponent } from './banner-item/banner-item.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    BannerItemComponent,

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
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class HomeModule { }
