import {Injectable} from '@angular/core';
import {map, Observable, of} from "rxjs";
import {AbstractControl, ValidationErrors} from "@angular/forms";
import {RecipesDataService} from "../../../../data-access/src/lib/services/recipes-data.service";

@Injectable({
  providedIn: 'root'
})
export class UniqueRecipeNameValidatorsService {

  constructor(private recipesDataService: RecipesDataService) {
  }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    console.log(this);
    return this.recipesDataService.getRecipeNamesCollection().pipe(map(recipeNames => {
      let isNotUnique = true;
      recipeNames.forEach(name => {
        isNotUnique = isNotUnique || name.toLowerCase() === control.value.toLowerCase();
      })
      if (isNotUnique) return {'unique': true};
      else return null;
    }))
  }
}
