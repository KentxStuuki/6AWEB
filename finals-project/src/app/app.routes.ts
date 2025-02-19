import { Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ValidationDemoComponent } from './validation-demo/validation-demo.component';
export const routes: Routes = [
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: 'template-driven', component: TemplateDrivenComponent },
    { path: 'validation-demo', component: ValidationDemoComponent },
];
