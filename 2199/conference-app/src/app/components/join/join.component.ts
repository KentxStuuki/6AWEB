import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.css'
})
export class JoinComponent {
  isVisible: boolean = true; 
  userName: string = ''; 
  toggleVisibility() 
  { 
    this.isVisible = !this.isVisible;
   }
}
