import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeEditFormComponent} from "./components/recipe-edit-form/recipe-edit-form.component";
import {MatCardModule} from "@angular/material/card";
import {UiModule} from "@recipes/ui";
import {RecipeFormContentComponent} from "./components/recipe-form-content/recipe-form-content.component";
import {UnsavedRecipeFormGuard} from "./guards/unsaved-recipe-form.guard";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [CommonModule, MatCardModule, UiModule,MatInputModule,MatIconModule,ReactiveFormsModule,MatButtonModule],
  declarations: [RecipeEditFormComponent, RecipeFormContentComponent],
  exports: [RecipeEditFormComponent],
  providers: [UnsavedRecipeFormGuard]
})
export class WebRecipesFeatureEditModule {
}
