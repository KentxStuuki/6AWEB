import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  anytext: string = "";
  fname: string = "";
  lname: string = "";
  email: string = "";
  message: string = "";



  submitted: boolean =  false;

  onSubmit() {
    this.submitted =  true;
  }
}
