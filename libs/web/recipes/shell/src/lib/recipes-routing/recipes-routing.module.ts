import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NoRecipeChoosenComponent} from "@recipes/ui";
import {RecipeAddFormComponent, RecipeDetailsComponent, RecipeEditFormComponent} from "@recipes/feature";
import {UnsavedRecipeFormGuard} from "@recipes/utils";
import {MainViewComponent} from "../components/main-view/main-view.component";

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
