import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './core/auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'product/:productId', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
