import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ReferencesComponent } from './references/references.component';
import { TrainingComponent } from './training/training.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EducationComponent, PersonalInfoComponent, ReferencesComponent, TrainingComponent, WorkExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prelim_lab_2';
}
