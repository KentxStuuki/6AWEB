import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { __setFunctionName } from 'tslib';


@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
 title = 'from-app';
 fname: string = '';
 lname: string = '';
 email: string = '';
 message: string = '';
 formdata: FormGroup = new FormGroup({
  fname: new FormControl(""),
  lname: new FormControl(""),
  email: new FormControl(""),
  message: new FormControl(""),
 });

 onClickSubmit(data: {fname: string, lname: string, email: string, message: string }){
  this.fname = data.fname;
  this.lname = data.lname;
  this.email = data.email;
  this.message = data.message;
 }
}
