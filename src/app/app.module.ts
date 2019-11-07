import { BrowserModule } from '@angular/platform-browser'; // a Component?
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; //our app.component.ts file

//@NgModule is a dcorative? <dramatic beaver>
@NgModule({ // The properties are arrays.
  declarations: [ AppComponent ],  // Defines which of our components belong to this module. 
  imports: [ BrowserModule ], // We defin external modules we want to have available
  //for all of the components that belong to this module
  // the BrowserModule is a module all Angular apps need to import. 
  bootstrap: [AppComponent] // Describes the startup component of the application
  //The startup component should contain the selector we use in the index.html file.
})
export class AppModule { }

/* By convention, our root applicantion component, 
    AppComponent, belongs to the applicaton's root Angular
    module, AppModule, so we declare it here. */
