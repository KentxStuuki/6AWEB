import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  personinfo = {
    name: 'Mark Erolle D. Quiambao',
    Specialize: 'Web Developer',
    contact_info: [
      'Phone: 09063815462',
      'Email: markerolle@gmail.com',
      'GitHub: github.com/KentxStuuki'
    ],
    expertise: [
      'Front-end Designer',
      'Back-end Developer',
      'Database Developer',
      'Graphic Design',
    ]
  }
}
