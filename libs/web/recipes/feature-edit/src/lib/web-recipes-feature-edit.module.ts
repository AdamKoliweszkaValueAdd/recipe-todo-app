import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeEditFormComponent} from "./components/recipe-edit-form/recipe-edit-form.component";
import {MatCardModule} from "@angular/material/card";
import {UiModule} from "@recipes/ui";

@NgModule({
  imports: [CommonModule, MatCardModule, UiModule],
  declarations: [RecipeEditFormComponent],
  exports: [RecipeEditFormComponent]
})
export class WebRecipesFeatureEditModule {
}
