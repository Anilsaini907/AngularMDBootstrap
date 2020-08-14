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
  
  ispopUpShow:boolean;
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder ,private router: Router) { }
 

// convenience getter for easy access to form fields

gotoList() {
  this.router.navigate(['/register-page']);
}

  //closeResult: string;
  
  ngOnInit(): void {

   
  /*open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }*/
}
}
