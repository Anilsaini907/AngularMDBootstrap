import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

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
  }

}
