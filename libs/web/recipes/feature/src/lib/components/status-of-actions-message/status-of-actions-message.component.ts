import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {RecipeFacade} from "@recipes/data-access";
import {forkJoin, Subscription} from "rxjs";

@Component({
  selector: 'recipes-status-of-actions-message',
  templateUrl: './status-of-actions-message.component.html',
  styleUrls: ['./status-of-actions-message.component.scss'],
})
export class StatusOfActionsMessageComponent implements OnInit, OnDestroy {

  subscriptionOfCreated: Subscription | undefined;
  subscriptionOfUpdated: Subscription | undefined;
  subscriptionOfRemoved: Subscription | undefined;

  lastCreatedStatus: boolean | undefined;
  lastUpdatedStatus: boolean | undefined;
  lastRemovedStatus: boolean | undefined;

  showCreatedStatus: boolean | undefined = false;
  showUpdatedStatus: boolean | undefined;
  showRemovedStatus: boolean | undefined;

  constructor(private recipeFacade: RecipeFacade) {
    this.subscriptionOfCreated = this.isCreated$.subscribe(value => {
      console.log(this.lastCreatedStatus, value);
      if (this.lastCreatedStatus && !value) {
        this.showRemovedStatus = false;
        this.showUpdatedStatus = false;
        this.showCreatedStatus = true;
      }
      this.lastCreatedStatus = value;
      console.log(this.showCreatedStatus);
    });
    this.subscriptionOfUpdated = this.isUpdated$.subscribe(value => {
      if (this.lastUpdatedStatus && !value) {
        this.showRemovedStatus = false;
        this.showCreatedStatus = false;
        this.showUpdatedStatus = true;
      }
      this.lastUpdatedStatus = value;
      console.log(this.showCreatedStatus);
    });
    this.subscriptionOfRemoved = this.isRemoved$.subscribe(value => {
      if (this.lastRemovedStatus && !value) {
        this.showCreatedStatus = false;
        this.showUpdatedStatus = false;
        this.showRemovedStatus = true;
      }
      this.lastRemovedStatus = value;
      console.log(this.showCreatedStatus);
    });
  }

  ngOnInit(): void {

  }

  get isCreated$() {
    return this.recipeFacade.recipeCreating$;
  }

  get isUpdated$() {
    return this.recipeFacade.recipeUpdating$;
  }

  get isRemoved$() {
    return this.recipeFacade.recipeRemoving$;
  }

  get createdError$() {
    return this.recipeFacade.recipeCreateError$;
  }

  get updatedError$() {
    return this.recipeFacade.recipeUpdateError$;
  }

  get removeError$() {
    return this.recipeFacade.recipeRemoveError$;
  }

  ngOnDestroy() {
    this.subscriptionOfCreated?.unsubscribe();
    this.subscriptionOfRemoved?.unsubscribe();
    this.subscriptionOfUpdated?.unsubscribe();
  }
}
