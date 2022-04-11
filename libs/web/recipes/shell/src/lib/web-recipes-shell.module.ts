import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainViewComponent} from './components/main-view/main-view.component';
import {RecipesRoutingModule} from "./recipes-routing/recipes-routing.module";
import {DataAccessModule} from "@recipes/data-access";
import {UiModule} from "@recipes/ui";
import {FeatureModule} from "@recipes/feature";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RecipesRoutingModule, DataAccessModule, UiModule, FeatureModule, RouterModule, RecipesRoutingModule],
  declarations: [
    MainViewComponent
  ],
})
export class WebRecipesShellModule {
}
