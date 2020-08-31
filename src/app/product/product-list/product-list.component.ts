import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  cartData:any[]=[];
  newProduct:{};
  constructor(private productservice:ProductService) { }
  

  ngOnInit(): void {
   
    this.products = [
      { id: 'p01', name: 'name 1', price: 100, photo: 'https://mdbootstrap.com/img/Photos/Others/images/43.jpg' },
      { id: 'p02', name: 'name 2', price: 200, photo: 'https://mdbootstrap.com/img/Photos/Others/images/43.jpg' },
      { id: 'p03', name: 'name 3', price: 300, photo: 'https://mdbootstrap.com/img/Photos/Others/images/43.jpg' },
      { id: 'p04', name: 'name 4', price: 400, photo: 'https://mdbootstrap.com/img/Photos/Others/images/43.jpg' },
      { id: 'p05', name: 'name 5', price: 500, photo: 'https://mdbootstrap.com/img/Photos/Others/images/43.jpg' },
      { id: 'p06', name: 'name 6', price: 600, photo: 'https://mdbootstrap.com/img/Photos/Others/images/43.jpg' }
  ];

  }
    addToCart(newProduct){
        this.cartData.push(newProduct)
        
        this.productservice.addProductToCart(newProduct)
        console.log("product-list",this.cartData)
    }
}


