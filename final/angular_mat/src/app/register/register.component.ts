import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import  { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';


import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userName: string = "";
  email: string = "";
  password: string = "";
  gender: string = "";
  birthDate!: Date;
  address: string = "";
  angularSkillLevel: number = 5;
  submitted = false;
  minSkillLevel = 1;
  maxSkillLevel = 10;

  formdata: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('',[Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(5)
  })

  OnclickSubmit(data: {
    angularSkillLevel: number;
    userName: string ;
    email: string ;
    password: string ;
    gender: string ;
    birthDate: Date;
    address: string ;
  })

  {
    this.submitted = true;
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.gender = data.gender;
    this.address = data.address;
    this.angularSkillLevel =  data.angularSkillLevel;
    this.birthDate = data.birthDate;

    if (this.formdata.valid) {
      console.log("Form Submitted!", this.formdata.value);
    } else {
      console.log("Form is not valid!")
    }
  }
}
