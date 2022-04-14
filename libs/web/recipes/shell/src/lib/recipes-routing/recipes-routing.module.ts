import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NoRecipeChoosenComponent} from "@recipes/ui";
import {MainViewComponent} from "../components/main-view/main-view.component";
import {
  RecipeEditFormComponent,
  UnsavedRecipeFormGuard as UnsavedRecipeEditFormGuard
} from "@recipes/web/recipes/feature-edit";
import {RecipeDetailsComponent} from "@recipes/web/recipes/feature-details";
import {
  RecipeAddFormComponent,
  UnsavedRecipeFormGuard as UnsavedRecipeAddFormGuard
} from "@recipes/web/recipes/feature-add";
import {RecipeListComponent} from "@recipes/web/recipes/feature-list";

const routes: Routes = [
  {
    path: '', component: MainViewComponent, children: [
      {path: '',component: RecipeListComponent, outlet: 'recipe-sidebar' },
      {path: '', component: NoRecipeChoosenComponent},
      {path: 'add', component: RecipeAddFormComponent, canDeactivate: [UnsavedRecipeAddFormGuard]},
      {path: 'edit', component: RecipeEditFormComponent, canDeactivate: [UnsavedRecipeEditFormGuard]},
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
