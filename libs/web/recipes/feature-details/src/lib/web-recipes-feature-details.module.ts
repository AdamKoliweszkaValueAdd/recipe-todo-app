import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeDetailsComponent} from "./components/recipe-details/recipe-details.component";
import {MatCardModule} from "@angular/material/card";
import {UiModule} from "@recipes/ui";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  imports: [CommonModule, MatCardModule, UiModule, MatButtonModule, MatDividerModule],
  declarations: [RecipeDetailsComponent],
  exports: [RecipeDetailsComponent]
})
export class WebRecipesFeatureDetailsModule {
}
