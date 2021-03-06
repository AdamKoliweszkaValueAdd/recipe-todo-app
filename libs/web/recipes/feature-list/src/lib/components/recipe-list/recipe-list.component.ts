import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Recipe} from "@recipes/domain";
import {MessageStatusDisplayerService, RecipeFacade} from "@recipes/data-access";
import {FormControl} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {ConfirmationDialogServiceService} from "@recipes/web/recipes/dialogs-ui";

@Component({
  selector: 'recipes-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeListComponent {

  searchedRecipe = new FormControl('');

  constructor(private recipeFacade: RecipeFacade, public dialog: MatDialog,
              private router: Router,
              private confirmationDialogServiceService: ConfirmationDialogServiceService,
              private messageStatusDisplayerService: MessageStatusDisplayerService) {
    this.recipeFacade.getRecipeCollection();
  }

  get recipeCollection$() {
    return this.recipeFacade.recipeCollection$;
  }

  get recipesCollectionLoading$() {
    return this.recipeFacade.recipeCollectionLoading$;
  }

  onRemoveRecipe(recipe: Recipe) {
    const message = 'Czy napewno chcesz usunąć przepis ' + recipe.name + '?';
    const title = "Potwierdzenie usunięcia przepisu";
    this.confirmationDialogServiceService.confirm(message, title, this.dialog).subscribe(dialogResult => {
      if (dialogResult && recipe._id) this.recipeFacade.removeRecipe({id: recipe._id});
    });
  }

  onEditRecipe(recipe: Recipe) {
    this.router.navigate(
      ['/edit'],
      {queryParams: {recipeid: recipe._id}}
    );
  }

  onViewDetailsOfRecipe(recipe: Recipe) {
    this.router.navigate(
      ['/detail'],
      {queryParams: {recipeid: recipe._id}}
    );
  }

}
