import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SchoolRegister } from 'src/app/Model/schoolRegister';

@Component({
  selector: 'app-school-registration',
  templateUrl: './school-registration.component.html',
  styleUrls: ['./school-registration.component.css']
})
export class SchoolRegistrationComponent implements OnInit {

  formGroup:FormGroup;
  private schoolRegister:SchoolRegister;
  private password : string;
  private confirmPassword : string;

  constructor(private formBuilder:FormBuilder) { 
      this.createValidators();
  }

  createValidators(){
    this.formGroup = this.formBuilder.group({
      schoolName:[Validators.required],
      schoolAddress:[Validators.required],
      registrationNumber:[Validators.required],
      contact:[Validators.required],
      email:[Validators.required],
      country:[Validators.required],
      state:[Validators.required],
      district:[Validators.required],
      userName:[Validators.required],
      confirmPassword:[Validators.required],
      password:[Validators.required]

    });
    this.schoolRegister= new SchoolRegister();
  }

  ngOnInit() {
  }

  signUp(){
    console.log(this.schoolRegister);
  }

}
