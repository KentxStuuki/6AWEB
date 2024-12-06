import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  work_expirience= {
    works: [
      'Traditional & Digital Artist (2020 - 2024)',
      'Web Developer of Angela Gallery',
      'Web Developer of Art Capsul'
    ]
  }
}
