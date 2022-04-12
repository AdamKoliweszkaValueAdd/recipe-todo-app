import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeAddFormComponent} from "./components/recipe-add-form/recipe-add-form.component";
import {MatCardModule} from "@angular/material/card";
import {UiModule} from "@recipes/ui";

@NgModule({
  imports: [CommonModule, MatCardModule, UiModule],
  declarations: [RecipeAddFormComponent],
  exports: [RecipeAddFormComponent]
})
export class WebRecipesFeatureAddModule {
}
