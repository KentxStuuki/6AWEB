# 6AWEB
This Repo is dedicated to hold all of my progress inside the 6AWEB subject

## Finals Activities


- Finals Lab Activity 3: [Reactive Form with Validation Demo](https://github.com/KentxStuuki/6AWEB/tree/main/final/finals-project/src/app/validation-demo)
- Finals Lab Activity 2: [Reactive Form Demo](https://github.com/KentxStuuki/6AWEB/tree/main/final/finals-project/src/app/reactive-form)
- Finals Lab Activity 1: [Template-Driven Form Demo](https://github.com/KentxStuuki/6AWEB/tree/main/final/finals-project/src/app/template-driven)

## Midterms Activities

## Finals Activities

# Angular Codes to install and create
To install angular in your device type:
>npm install -g @angular/cli@18

### To Create Angular Files
>ng new \<project-name>

As you type the code you will see that your folder is filled with the Angular Structure:

- `src folder` - holds files and source of the code needed for the project (holds `app folder`, `index.html`, `main.ts`, `styles.css` and etc.).
- `app folder` - holds the content of the web page (this holds majority of the component and the project webpage).
    - Inside the app folder:
        - `app.component.html`
        - `app.component.ts`
        - `app.module.ts`
- `index.html` - the highest position or level for displaying the content of that particular project.
- `main.ts` - imports the core method required to make everything works.
- `styles.css` - this holds the whole website css styles.

### To create new files within the exisiting project just type:
>ng generate component \<component-name>

As you generate or create a new component this component must have or must consist of 4 files:

- an HTML file (`html`)
- a CSS file (`css`)
- a typescript file (`ts`)
- a test file (`spec.ts`)

### To create a Service component in Angular or in the web project you need to type:

> ng generate service \<service-name>

Right after you enter this code a `\<service-name>.service.ts` will be added into your app folder.

### To run the whole project and launches it in a form that can be displayed in a browser just type:

>ng serve

## HttpClientPrg
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
