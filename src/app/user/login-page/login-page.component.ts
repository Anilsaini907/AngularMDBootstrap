import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/app/Appenvironment';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form:FormGroup;
  showlogin:boolean=true; 
  constructor(private formBuilder: FormBuilder , private router: Router) { }
 
  ngOnInit(): void {
   
    this.form = this.formBuilder.group({
       email: ['', Validators.required],
      password: ['', Validators.required],  });
  }
  onSubmit() {
    console.log(this.form.value)
    console.log(this.form.controls["email"].value)
  }

    gotoList() {
      this.router.navigate(['/register-page']);
    }
    

    hide(){ this.showlogin=false;
          this.router.navigate(['/product-list'])
        
 }
 show()
    {
       // Show-Hide Modal Check
      
    }
 
  
}
