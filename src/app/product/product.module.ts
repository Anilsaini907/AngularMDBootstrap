import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule, CarouselModule } from 'angular-bootstrap-md';
import * as $ from 'jquery';


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CarouselModule,
    CommonModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
    
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ]

})
export class ProductModule { }
