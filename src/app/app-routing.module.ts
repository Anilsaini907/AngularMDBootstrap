import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './user/login-page/login-page.component';
import { RegisterPageComponent } from './user/register-page/register-page.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AppComponent } from './app.component';
import { ProductCartComponent } from './product/product-cart/product-cart.component';


const routes: Routes = [
  { path: 'login-page', component: LoginPageComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'contact-page', component: ContactPageComponent },
  { path: 'cart', component: ProductCartComponent},
  { path: '', redirectTo: '/login-page', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
