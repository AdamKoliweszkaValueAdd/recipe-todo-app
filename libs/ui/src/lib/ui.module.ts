import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RecipesListItemComponent} from './components/recipes-list-item/recipes-list-item.component';
import {MatListModule} from "@angular/material/list";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {FilteredRecipeListComponent} from './components/filtered-recipe-list/filtered-recipe-list.component';
import {ConfirmationDialogComponent} from './components/confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {RecipeFormContentComponent} from './components/recipe-form-content/recipe-form-content.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NoRecipeChoosenComponent} from './components/no-recipe-choosen/no-recipe-choosen.component';
import {MessageDialogComponent} from './components/message-dialog/message-dialog.component';
import {RecipeDetailsViewComponent} from './components/recipe-details-view/recipe-details-view.component';
import {UnsavedRecipeFormGuard, UtilsModule} from "@recipes/utils";
import {MatDividerModule} from "@angular/material/divider";
import {
  StatusOfMessageContentComponent
} from './components/status-of-message-content/status-of-message-content.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatFormFieldModule,
    MatInputModule, MatCardModule, MatDialogModule, ReactiveFormsModule, UtilsModule, MatDividerModule],
  declarations: [
    TopBarComponent,
    RecipesListItemComponent,
    FilteredRecipeListComponent,
    ConfirmationDialogComponent,
    RecipeFormContentComponent,
    NoRecipeChoosenComponent,
    MessageDialogComponent,
    RecipeDetailsViewComponent,
    StatusOfMessageContentComponent,
  ],
  exports: [TopBarComponent,
    FilteredRecipeListComponent,
    ConfirmationDialogComponent,
    RecipeFormContentComponent,
    NoRecipeChoosenComponent,
    MessageDialogComponent,
    RecipeDetailsViewComponent,
    StatusOfMessageContentComponent,
  ],
  providers: [UnsavedRecipeFormGuard]
})
export class UiModule {
}
