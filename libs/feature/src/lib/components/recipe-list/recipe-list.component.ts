import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "@recipes/domain";
import {RecipeFacade} from "@recipes/data-access";
import {FormControl} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {ConfirmationDialogComponent} from "@recipes/ui";

@Component({
  selector: 'recipes-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  searchedRecipe = new FormControl('');

  constructor(private recipeFacade: RecipeFacade, public dialog: MatDialog, private router: Router) {
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

  onEditRecipe(recipe: Recipe){
    this.router.navigateByUrl('edit?recipeid=' + recipe._id)
  }

  onViewDetailsOfRecipe(recipe: Recipe){
    this.router.navigateByUrl('detail?recipeid=' + recipe._id)
  }

}
