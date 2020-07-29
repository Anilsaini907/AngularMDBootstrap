import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'; 
import { FormBuilder, Validators } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormBuilder,Validators
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
