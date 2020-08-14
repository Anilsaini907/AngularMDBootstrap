import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor() { }

  ngOnInit(): void {
   
    this.products = [
      { id: 'p01', name: 'name 1', price: 100, photo: 'thumb1.gif' },
      { id: 'p02', name: 'name 2', price: 200, photo: 'thumb2.gif' },
      { id: 'p03', name: 'name 3', price: 300, photo: 'thumb3.gif' },
      { id: 'p01', name: 'name 1', price: 100, photo: 'thumb1.gif' },
      { id: 'p02', name: 'name 2', price: 200, photo: 'thumb2.gif' },
      { id: 'p03', name: 'name 3', price: 300, photo: 'thumb3.gif' }
  ];
  /*$(document).ready(function() {
    alert("hello")
    });
  $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
    alert("i am code")
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  
    for (var i=0;i<4;i++) {
      next=next.next();
      if (!next.length) {
        next=$(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    }
  });
  
*/
}

}
