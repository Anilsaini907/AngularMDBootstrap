import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  { path: 'login-page', component: LoginPageComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'register-page', component: RegisterPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
