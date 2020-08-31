import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  value:any=[];
 
constructor(private productservice:ProductService ) { }
showValue(){
this.value=JSON.parse(localStorage.getItem('Users'))
console.log(this.value)
}
deleteItem(index,i) {
  this.value.splice(index, 1);
  localStorage.removeItem('Users'+[i])
}

ngOnInit(): void {
this.showValue();
  }
 

}