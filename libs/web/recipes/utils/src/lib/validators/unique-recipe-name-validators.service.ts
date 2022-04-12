import {Injectable} from '@angular/core';
import {map, Observable, of} from "rxjs";
import {AbstractControl, ValidationErrors} from "@angular/forms";
import {RecipesDataService} from "../../../../data-access/src/lib/services/recipes-data.service";

@Injectable({
  providedIn: 'root'
})
export class UniqueRecipeNameValidatorsService {

  recipeId: string | undefined;

  constructor(private recipesDataService: RecipesDataService) {
  }

  createUniqueNameValidator(recipeId: string | null | undefined) {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.recipesDataService.getRecipeNamesCollection().pipe(map(recipeNames => {
        console.log(recipeId);
        let isNotUnique = false;
        recipeNames.forEach(r => {
          isNotUnique = isNotUnique || (r._id !== recipeId && r.name.toLowerCase() === control.value.toLowerCase());
        })
        if (isNotUnique) return {'unique': true};
        else return null;
      }))
    }
  }
}
