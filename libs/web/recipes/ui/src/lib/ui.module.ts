import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import { MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {NoRecipeChoosenComponent} from './components/no-recipe-choosen/no-recipe-choosen.component';
import {RecipeDetailsViewComponent} from './components/recipe-details-view/recipe-details-view.component';
import { UtilsModule} from "@recipes/utils";
import {MatDividerModule} from "@angular/material/divider";
import {LoadingMessageComponent} from './components/loading-message/loading-message.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  imports: [CommonModule, MatIconModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatFormFieldModule,
    MatInputModule, MatCardModule, MatDialogModule, ReactiveFormsModule, UtilsModule, MatDividerModule, MatProgressSpinnerModule],
  declarations: [
    TopBarComponent,
    NoRecipeChoosenComponent,
    RecipeDetailsViewComponent,
    LoadingMessageComponent,
  ],
  exports: [TopBarComponent,
    NoRecipeChoosenComponent,
    RecipeDetailsViewComponent,
    LoadingMessageComponent,
  ],
})
export class UiModule {
}
