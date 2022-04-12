import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NoRecipeChoosenComponent} from "@recipes/ui";
import {UnsavedRecipeFormGuard} from "@recipes/utils";
import {MainViewComponent} from "../components/main-view/main-view.component";
import {RecipeEditFormComponent} from "@recipes/web/recipes/feature-edit";
import {RecipeDetailsComponent} from "@recipes/web/recipes/feature-details";
import {RecipeAddFormComponent} from "@recipes/web/recipes/feature-add";

const routes: Routes = [
  {
    path: '', component: MainViewComponent, children: [
      {path: '', component: NoRecipeChoosenComponent},
      {path: 'add', component: RecipeAddFormComponent, canDeactivate: [UnsavedRecipeFormGuard]},
      {path: 'edit', component: RecipeEditFormComponent, canDeactivate: [UnsavedRecipeFormGuard]},
      {path: 'detail', component: RecipeDetailsComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {
}
