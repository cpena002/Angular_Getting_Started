import { BrowserModule } from '@angular/platform-browser'; // a Component?
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; //our app.component.ts file
import { ProductListComponent } from './products/product-list.component'; //our app.component.ts file
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StartComponent } from './shared/star.component';


//@NgModule is a dcorative? 
@NgModule({ // The properties are arrays.
  declarations: [ AppComponent, ProductListComponent, ConvertToSpacesPipe, StartComponent ],  // Defines which of our components belong to this module. 
  imports: [ BrowserModule, FormsModule ], // We defin external modules we want to have available
  /* for all of the components that belong to this module
     the BrowserModule is a module all Angular apps need to import. */
  bootstrap: [AppComponent] // Describes the startup component of the application
  /* The startup component should contain the selector we use in the index.html file. */
})
export class AppModule { }

/* By convention, our root applicantion component, 
    AppComponent, belongs to the applicaton's root Angular
    module, AppModule, so we declare it here. */
