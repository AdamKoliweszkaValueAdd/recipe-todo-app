import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {UiModule} from "@recipes/ui";
import {ReactiveFormsModule} from "@angular/forms";
import {UtilsModule} from "@recipes/utils";
import {RouterModule} from "@angular/router";
import {
  StatusOfActionsMessageComponent
} from './components/status-of-actions-message/status-of-actions-message.component';

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
    StatusOfActionsMessageComponent
  ],
  exports: [
    StatusOfActionsMessageComponent]
})
export class FeatureModule {
}
