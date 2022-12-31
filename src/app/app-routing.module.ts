import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';
import { AdminAuthGuard } from './core/auth/admin-auth-guard.guard';
import { AuthGuard } from './core/auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuard]},
  { path: 'product/:productId', component: ProductComponent},
  { path: 'manage-products', component: ManageProductComponent, canActivate: [AdminAuthGuard]},
  { path: 'manage-users', component: ManageUsersComponent, canActivate: [AdminAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
