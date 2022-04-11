import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RecipeFacade} from "@recipes/data-access";
import {ActivatedRoute, Router} from "@angular/router";
import {Recipe} from "@recipes/domain";
import {ConfirmationDialogComponent} from "@recipes/ui";
import {MatDialog} from "@angular/material/dialog";
import {filter, pluck} from "rxjs";

@Component({
  selector: 'recipes-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeDetailsComponent implements OnInit {
  recipeId: string | undefined;

  constructor(private recipeFacade: RecipeFacade, private route: ActivatedRoute,
              private router: Router, public dialog: MatDialog,) {
  }

  ngOnInit(): void {
    this.route.queryParams.pipe(pluck('recipeid'), filter(value => !!value)).subscribe(recipeId => {
      this.recipeId = recipeId;
      this.recipeFacade.getRecipe({id: recipeId});
    });
  }

  get recipeLoading$(){
    return this.recipeFacade.recipeLoading$;
  }

  get recipe$() {
    return this.recipeFacade.recipe$;
  }

  onRemoveRecipe(recipe: Recipe) {
    const message = 'Czy napewno chcesz usunąć przepis ' + recipe.name + '?';

    const dialogData = {title: "Potwierdzenie usunięcia przepisu", message: message};

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult && recipe._id) this.recipeFacade.removeRecipe({id: recipe._id});
    });
  }

  onEditRecipe(recipe: Recipe) {
    this.router.navigate(
      ['/edit'],
      {queryParams: {recipeid: recipe._id}}
    );
  }

}
