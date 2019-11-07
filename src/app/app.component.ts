import { Component } from '@angular/core';


//The Component decorator. 
@Component({
  selector: `pm-root`,
  template: `<div><h1>{{pageTitle}}</h1><div>Additional Text</div></div>`
})

// The Component clasa
export class AppComponent {
  pageTitle: string = 'My Page Title';
}