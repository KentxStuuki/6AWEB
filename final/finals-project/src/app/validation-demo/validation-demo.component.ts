import { Component } from '@angular/core';
import { FormGroup, FormsModule, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-validation-demo',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, RouterModule, FormsModule],
  templateUrl: './validation-demo.component.html',
  styleUrl: './validation-demo.component.css'
})
export class ValidationDemoComponent {
  loginForm: FormGroup;   
  constructor() {
  this.loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
  });
  }

  onSubmit(){
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
    }
    else {
      console.log('Form is not Valid');
    }
  }
}
