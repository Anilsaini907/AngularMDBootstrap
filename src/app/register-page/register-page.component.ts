import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
form:FormGroup;
  submitted: false;
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fristname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
  });
  }
  onSubmit() {
    console.log("user detail" + this.form);

    
    }

}
