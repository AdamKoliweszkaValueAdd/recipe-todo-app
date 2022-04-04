import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Recipe} from "@recipes/domain";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipesDataService {

  endpoint = '';

  constructor(private http: HttpClient) {
  }

  getRecipeCollection(): Observable<Recipe[]> {
    return this.http
      .get<Recipe[]>(this.endpoint);
  }

  addRecipe(data: Recipe): Observable<Recipe> {
    return this.http
      .post<Recipe>(this.endpoint, data);
  }

  deleteRecipe(recipeId: string): Observable<void> {
    return this.http.delete<void>(this.endpoint + '/' + recipeId);
  }

  editRecipe(recipeId: string, data: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(this.endpoint + '/' + recipeId, data);
  }
}
