import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '@recipes/domain';
import {Observable, of} from 'rxjs';
import {GetRecipeRequestPayload} from '../resources/request-payloads/get-recipe.request-payload';
import {CreateRecipeRequestPayload} from '../resources/request-payloads/create-recipe.request-payload';
import {UpdateRecipeRequestPayload} from '../resources/request-payloads/update-recipe.request-payload';
import {RemoveRecipeRequestPayload} from '../resources/request-payloads/remove-recipe.request-payload';
import {fakedRecipes} from "../resources/fake-recipes";

@Injectable({
  providedIn: 'root'
})
export class RecipesDataService {

  fakedRecipes = fakedRecipes;

  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) {
    console.log(this.baseUrl)
  }

  getRecipeCollection(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl);
  }

  editRecipe(recipeId: string, data: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(this.baseUrl + '/' + recipeId, data);
  }

  getRecipe(payload: GetRecipeRequestPayload): Observable<Recipe> {
    return this.http.get<Recipe>(this.baseUrl + '/' + payload.id);
  }

  createRecipe(payload: CreateRecipeRequestPayload): Observable<Recipe> {
    return this.http.post<Recipe>(this.baseUrl, payload.data);
  }

  updateRecipe(payload: UpdateRecipeRequestPayload): Observable<Recipe> {
    const {_id, ...newDataOfRecipe} = payload.data;
    return this.http.put<Recipe>(this.baseUrl + '/' + payload.data._id, newDataOfRecipe);
  }

  removeRecipe(payload: RemoveRecipeRequestPayload): Observable<void> {
    return this.http.delete<any>(this.baseUrl + '/' + payload.id);
  }
}
