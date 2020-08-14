import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  showReg:boolean =true;
  formdata: any;
  formArray:any =[];
  form:FormGroup;
  submitted: false;
  constructor(private formBuilder: FormBuilder,private router: Router) { }
  

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fristname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required], 
      
  });
  console.log()
  }
 
  onSubmit() {
  console.log(this.form.value)
  console.log(this.form.controls["fristname"].value)
  this.formdata= this.form.value
  this.formArray.push(this.formdata);
  console.log(this.formArray)
  
    }
    hide()
    {
      this.showReg =false;
      this.router.navigate(['/product-list'])

   }
    
    
    gotoList() {
      this.router.navigate(['/login-page']);
    }
}
