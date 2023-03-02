## Angular Cli
The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications directly from a command shell.

## Installing the Angular CLI
To install the Angular CLI, open a terminal window. Run the following command to install the CLI using npm:

    npm install -g @angular/cli

## Creating a New Project
To create a new project, open a terminal window. Run the following command to create a new project named `my-app`:

    ng new my-app

The Angular CLI prompts you for information about features to include in the initial app project. Accept the defaults by pressing the Enter or Return key.

The Angular CLI creates the `my-app` folder and generates the initial project structure.

## Running the Application
To run the application, go to the project directory and use the Angular CLI `serve` command to build and serve the app, using `webpack-dev-server` under the covers. The following example builds and serves the app, using port 4200:

    cd my-app
    ng serve --open

The Angular CLI automatically opens your browser to `http://localhost:4200/`.


## Angular Services
Angular services are used to share data between components. They are also used to make HTTP requests to a server. Services are created using the Angular CLI. The Angular CLI creates a service file and a spec file. The spec file is used for testing

## Creating a Service
To create a service, use the Angular CLI. The Angular CLI creates a service file and a spec file. The spec file is used for testing. The following command creates a service named `data`:

    ng generate service data

The Angular CLI creates the following files: 
        src/app/data.service.ts
        src/app/data.service.spec.ts

## Structure of a Service
A service is a TypeScript class. The following example shows the structure of a service:

    import { Injectable } from '@angular/core';

    @Injectable({
      providedIn: 'root'
    })
    export class DataService {

      constructor() { }
      data : Data[] = [
        {
          name: 'John',
          age: 30
        },
        {
          name: 'Doe',
          age: 25
        }
      ];
    }


## Importing the Service
To use the service, import the service into the component. The following example imports the `DataService` service into the `AppComponent` component:

    import { DataService } from './data.service';

## Injecting the Service
To inject the service into the component, add the service to the constructor of the component. The following example adds the `DataService` service to the constructor of the `AppComponent` component:

    constructor(private data: DataService) { }

## Calling the Service
To call the service, add the method to an event handler. The following example adds the `getInfo()` method to the `ngOnInit()` event handler:

    ngOnInit() {
      this.info = this.data.data;
    }

## Outputting the Service
To output the service, add the service to the template. The following example outputs the `info` property of the `AppComponent` component:

    <p>{{info}}</p>