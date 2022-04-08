import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DataAccessModule} from "@recipes/data-access";
import {UiModule} from "@recipes/ui";
import {FeatureModule} from "@recipes/feature";
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DataAccessModule, CoreModule, UiModule, FeatureModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
