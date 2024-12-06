import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})
export class ReferencesComponent {
  references={
    link_references: [
      'https://www.coursera.org',
      'https://www.netacad.com',
      'https://www.freecodecamp.org',
      'https://grow.google/certificates/ux-design/'
    ]
  }
}
