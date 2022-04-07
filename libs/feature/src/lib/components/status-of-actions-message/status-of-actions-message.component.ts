import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RecipeFacade} from "@recipes/data-access";
import {forkJoin} from "rxjs";

@Component({
  selector: 'recipes-status-of-actions-message',
  templateUrl: './status-of-actions-message.component.html',
  styleUrls: ['./status-of-actions-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusOfActionsMessageComponent implements OnInit {

  constructor(private recipeFacade: RecipeFacade) {
  }

  ngOnInit(): void {
    forkJoin([this.isCreated$, this.createdError$]).subscribe(([isCreated, err]) => {
      console.log('is created', isCreated, err);
    })
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
}
