import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DataAccessModule} from "@recipes/data-access";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UiModule} from "@recipes/ui";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DataAccessModule, StoreModule.forRoot({}), EffectsModule.forRoot(), StoreDevtoolsModule.instrument({
    maxAge: 25, // Retains last 25 states
    logOnly: false, // Restrict extension to log-only mode
    autoPause: true, // Pauses recording actions and state changes when the extension window is not open
  }), BrowserAnimationsModule,UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
