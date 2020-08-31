import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  addProductToCart(newProduct:any){
    let users=[];
    if(localStorage.getItem('Users')){
      users=JSON.parse(localStorage.getItem('Users'));
      users=[newProduct, ...users];
      console.log("user"+users)
    }else{
      users=[newProduct]
    }
    localStorage.setItem("Users",JSON.stringify(users))
    console.log( "service", this.getProductFromCart())
  }

  getProductFromCart(){
    return JSON.parse(localStorage.getItem('Users'))

  }
  ngOnInit(): void {
  
  }
}
