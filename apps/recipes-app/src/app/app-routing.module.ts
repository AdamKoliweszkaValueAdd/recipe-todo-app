import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RecipeAddFormComponent, RecipeEditFormComponent} from "@recipes/feature";

const routes: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: 'add', component: RecipeAddFormComponent },
  { path: 'edit', component: RecipeEditFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
