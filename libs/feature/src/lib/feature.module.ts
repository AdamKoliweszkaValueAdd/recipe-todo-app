import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeListComponent} from './components/recipe-list/recipe-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {UiModule} from "@recipes/ui";
import {ReactiveFormsModule} from "@angular/forms";
import {UtilsModule} from "@recipes/utils";
import {RecipeAddFormComponent} from './components/recipe-add-form/recipe-add-form.component';
import { RecipeEditFormComponent } from './components/recipe-edit-form/recipe-edit-form.component';
import {RouterModule} from "@angular/router";
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

@NgModule({
  imports: [CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    UiModule,
    ReactiveFormsModule,
    UtilsModule, RouterModule],
  declarations: [
    RecipeListComponent,
    RecipeAddFormComponent,
    RecipeEditFormComponent,
    RecipeDetailsComponent
  ],
  exports: [RecipeListComponent,
    RecipeAddFormComponent,
    RecipeEditFormComponent,
    RecipeDetailsComponent]
})
export class FeatureModule {
}
