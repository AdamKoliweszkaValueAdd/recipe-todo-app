import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {ConfirmationDialogComponent} from "@recipes/web/recipes/dialogs-ui";

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogServiceService {

  constructor() {
  }

  confirm(message: string, title: string, dialog: MatDialog): Observable<any> {

    const dialogData = {title: title, message: message};

    const dialogRef = dialog.open(ConfirmationDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    return dialogRef.afterClosed();
  }
}
