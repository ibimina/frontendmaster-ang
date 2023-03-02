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