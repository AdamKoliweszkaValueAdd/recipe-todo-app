import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainViewComponent} from './components/main-view/main-view.component';
import {RecipesRoutingModule} from "./recipes-routing/recipes-routing.module";
import {UiModule} from "@recipes/ui";
import {RouterModule} from "@angular/router";
import {WebRecipesFeatureListModule} from "@recipes/web/recipes/feature-list";
import {WebRecipesFeatureAddModule} from "@recipes/web/recipes/feature-add";
import {WebRecipesFeatureEditModule} from "@recipes/web/recipes/feature-edit";
import {WebRecipesFeatureDetailsModule} from "@recipes/web/recipes/feature-details";

@NgModule({
  imports: [CommonModule, RecipesRoutingModule, UiModule, WebRecipesFeatureDetailsModule,
    WebRecipesFeatureListModule, RouterModule, WebRecipesFeatureAddModule, WebRecipesFeatureEditModule],
  declarations: [
    MainViewComponent
  ],
})
export class WebRecipesShellModule {
}
