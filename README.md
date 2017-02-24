# Angular Tasks

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3. It is using version 1.0.0-beta.32.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 

## Build for production

Run `npm run build` to build the project for production. The build script runs `ng build --prod --aot` for you.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Configure Firebase

Run the following commands to login and initialize [Firebase](https://firebase.google.com/) in this project: 

```bash
npm run firebase.login
npm run firebase.init
```

If you have have `firebase-tools` installed globally, run:

```bash
firebase login
firebase init
```

### During the `firebase init` stage:

#### Select the Hosting:

```bash
? What Firebase CLI features do you want to setup for this folder?  
  ◉ Database: Deploy Firebase Realtime Database Rules  
 ❯◉ Hosting: Configure and deploy Firebase Hosting sites  
```

#### Select your project or create a new one

```bash
? What Firebase project do you want to associate as default? (Use arrow keys)
```

#### Select Database Rules file (default is fine)

```bash
? What file should be used for Database Rules? (database.rules.json)
```

#### Type in `dist` for your public folder

```bash
? What do you want to use as your public directory? (public) dist
```

#### Configure as a single-page app

```bash
? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y
```

#### The following files will be generated

* firebase.json 
* .firebaserc 
* database.rules.json

## Deploying to Firebase

Run `npm run deploy` to deploy to Firebase. This will run the `build` script followed by `firebase deploy`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
