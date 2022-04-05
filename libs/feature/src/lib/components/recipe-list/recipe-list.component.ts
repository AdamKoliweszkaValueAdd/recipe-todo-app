import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "@recipes/domain";
import {RecipeFacade} from "@recipes/data-access";
import {FormControl} from "@angular/forms";
import {
  ConfirmationDialogComponent
} from "../../../../../ui/src/lib/components/confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'recipes-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  searchedRecipe = new FormControl('');

  constructor(private recipeFacade: RecipeFacade, public dialog: MatDialog) {
    this.recipeFacade.getRecipeCollection({});
  }

  get recipeCollection$() {
    return this.recipeFacade.recipeCollection$;
  }

  ngOnInit(): void {
  }

  onRemoveRecipe(recipe: Recipe) {
    const message = 'Czy napewno chcesz usunąć przepis ' + recipe.name + '?';

    const dialogData = {title: "Potwierdzenie usunięcia przepisu", message: message};

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult && recipe._id)this.recipeFacade.removeRecipe({id: recipe._id});
    });
  }

}
