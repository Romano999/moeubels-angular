import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NavigationBarModule } from './navigation-bar/navigation-bar.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { FooterComponent } from './footer/footer.component';
import { FooterModule } from './footer/footer.module';
import { HorizontalEntriesListComponent } from './shared/horizontal-entries-list/horizontal-entries-list.component';
import { VerticalEntriesListComponent } from './shared/vertical-entries-list/vertical-entries-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HorizontalEntriesListComponent,
    VerticalEntriesListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavigationBarModule,
    FooterModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
