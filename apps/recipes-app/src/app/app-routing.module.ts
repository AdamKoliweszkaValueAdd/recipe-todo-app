import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RecipeAddFormComponent, RecipeDetailsComponent, RecipeEditFormComponent} from "@recipes/feature";
import {NoRecipeChoosenComponent} from "@recipes/ui";

const routes: Routes = [
  { path: '', component: NoRecipeChoosenComponent },
  { path: 'add', component: RecipeAddFormComponent },
  { path: 'edit', component: RecipeEditFormComponent },
  { path: 'detail', component: RecipeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
