import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeListComponent} from "./components/recipe-list/recipe-list.component";
import {MatIconModule} from "@angular/material/icon";
import {UiModule} from "@recipes/ui";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {UtilsModule} from "@recipes/utils";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {FilteredRecipeListComponent} from "./components/filtered-recipe-list/filtered-recipe-list.component";
import {RecipesListItemComponent} from "./components/recipes-list-item/recipes-list-item.component";
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [CommonModule, MatIconModule, UiModule, MatCardModule, MatInputModule,
    ReactiveFormsModule, UtilsModule, MatButtonModule, RouterModule, MatListModule],
  declarations: [RecipeListComponent, FilteredRecipeListComponent, RecipesListItemComponent],
  exports: [RecipeListComponent]
})
export class WebRecipesFeatureListModule {
}
