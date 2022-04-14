import {Injectable, OnDestroy} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {DataAccessModule} from "../data-access.module";
import {RecipeFacade} from "../+state/recipe.facade";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: DataAccessModule
})
export class MessageStatusDisplayerService implements OnDestroy {

  subscription: Subscription | undefined;

  constructor(private _snackBar: MatSnackBar, private recipeFacade: RecipeFacade) {
    this.subscribeToMessageStatus();
  }

  subscribeToMessageStatus() {
    this.subscription = this.recipeFacade.currentMessageOfStatus$.subscribe(message => {
      if (message) this._snackBar.open(message, 'Zamknij');
    })
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
