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
  value:Product[]=[];
  sumTotal:number=0;
  datalocal:any=[];
 a:number=0;
constructor(private productservice:ProductService ) { }
showValue(){
this.value=JSON.parse(localStorage.getItem('Users'))
for( this.a=0;this.a<=this.value.length;this.a++){
  console.log(this.value.length)
  this.sumTotal+=this.value[this.a].price
  console.log(this.sumTotal)
}

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