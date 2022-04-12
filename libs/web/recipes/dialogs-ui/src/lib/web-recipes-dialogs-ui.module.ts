import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmationDialogComponent} from "./components/confirmation-dialog/confirmation-dialog.component";
import {MessageDialogComponent} from "./components/message-dialog/message-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  declarations: [ConfirmationDialogComponent, MessageDialogComponent],
  exports: [ConfirmationDialogComponent, MessageDialogComponent],
})
export class WebRecipesDialogsUiModule {
}
