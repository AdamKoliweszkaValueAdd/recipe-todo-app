import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, AppRoutingModule, HttpClientModule, MatSnackBarModule],
  providers: [{
    provide: "BASE_API_URL",
    useValue: "https://crudcrud.com/api/8e9602b4d6a14898b4070db6126ef28a/recipes"
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
