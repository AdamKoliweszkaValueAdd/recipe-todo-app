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

@NgModule({
  imports: [CommonModule, MatIconModule, UiModule, MatCardModule, MatInputModule, ReactiveFormsModule, UtilsModule, MatButtonModule, RouterModule],
  declarations: [RecipeListComponent],
  exports: [RecipeListComponent]
})
export class WebRecipesFeatureListModule {
}
