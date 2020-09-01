import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/product';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  value:any=[];
  sumTotal:number=0;
  datalocal:any=[];
 
constructor(private productservice:ProductService ) { }
showValue(){
this.value=JSON.parse(localStorage.getItem('Users'))
console.log(this.value[0].price)
}
deleteItem(index,i) {
  this.value.splice(index, 1);
  console.log("delete",this.value)
  localStorage.removeItem('Users')
  localStorage.setItem('Users',JSON.stringify(this.value))
 
}


ngOnInit(): void {
this.showValue();


  }
 

}