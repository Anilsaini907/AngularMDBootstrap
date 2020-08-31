import { Component, OnInit } from '@angular/core';
//import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/app/Appenvironment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title = 'angulartoastr';
value:any=[];
  ispopUpShow:boolean;
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder ,private router: Router) { }
 

// convenience getter for easy access to form fields

gotoList() {
  this.router.navigate(['/register-page']);
}
  showValue(){
  this.value=JSON.parse(localStorage.getItem('Users'))
  }
  
  ngOnInit(): void {
    this.showValue()
}
}
