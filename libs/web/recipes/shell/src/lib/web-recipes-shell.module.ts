import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainViewComponent} from './components/main-view/main-view.component';
import {RecipesRoutingModule} from "./recipes-routing/recipes-routing.module";
import {UiModule} from "@recipes/ui";
import {RouterModule} from "@angular/router";
import {WebRecipesFeatureListModule} from "@recipes/web/recipes/feature-list";

@NgModule({
  imports: [CommonModule, RecipesRoutingModule, UiModule,
    WebRecipesFeatureListModule, RouterModule],
  declarations: [
    MainViewComponent
  ],
})
export class WebRecipesShellModule {
}
