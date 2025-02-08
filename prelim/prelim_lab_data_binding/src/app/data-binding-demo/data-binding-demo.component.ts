import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.css'
})
export class DataBindingDemoComponent {
  title = "My First App!"
  description = "This is my new Angular Application"
  imgUrl = "../assets/raiden.png";
  w = 500;
  h = 500;
  altText = "Raiden Shogun Image";
  textColor="purple";
  isHighlighted = true;
  yourName = '';
  count = 0;
  increment(){
    this.count++;
  }
  decrement(){
    this.count--;
  }
}

