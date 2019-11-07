import { Component } from '@angular/core';


//The Component decorator. 
@Component({
  selector: `pm-root`,
  template: `
    <div><h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>`
})

// The Component clasa
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}