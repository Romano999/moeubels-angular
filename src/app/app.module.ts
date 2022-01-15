import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarModule } from './navigation-bar/navigation-bar.module';
import { HomeModule } from './home/home.module';
import { FooterModule } from './footer/footer.module';
import { SearchModule } from './search/search.module';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';

import { ContactModule } from './contact/contact.module';
import { AccountModule } from './account/account.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavigationBarModule,
    FooterModule,
    HomeModule,
    SearchModule,
    FormsModule,
    LoginModule,
    ContactModule,
    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
