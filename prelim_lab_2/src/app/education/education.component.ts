import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education = {
    school: 'Holy Angel Univeristy | 2022 - Present',
    course: [
      'Bachelor of Science in Information Technology Major in Web Development',
      'Bachelor of Science in Information Technology Major in Network Administration'
    ]
  }
}
