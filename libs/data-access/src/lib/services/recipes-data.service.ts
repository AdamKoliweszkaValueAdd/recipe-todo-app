import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '@recipes/domain';
import {Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { GetRecipeRequestPayload } from '../resources/request-payloads/get-recipe.request-payload';
import { GetRecipeCollectionRequestPayload } from '../resources/request-payloads/get-recipe-collection.request-payload';
import { CreateRecipeRequestPayload } from '../resources/request-payloads/create-recipe.request-payload';
import { UpdateRecipeRequestPayload } from '../resources/request-payloads/update-recipe.request-payload';
import { RemoveRecipeRequestPayload } from '../resources/request-payloads/remove-recipe.request-payload';
import {fakedRecipes} from "../resources/fake-recipes";

@Injectable({
  providedIn: 'root'
})
export class RecipesDataService {
  readonly endpoints = {
    getRecipe: 'https://crudcrud.com/api/8d98125312c64ad186d648e9431780b1',
    getRecipeCollection: 'https://crudcrud.com/api/8d98125312c64ad186d648e9431780b1',
    createRecipe: '',
    updateRecipe: '',
    removeRecipe: 'https://crudcrud.com/api/8d98125312c64ad186d648e9431780b1'
  };
  endpoint = '';

  fakedRecipes = fakedRecipes;

  constructor(private http: HttpClient) {}

  getRecipeCollection(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.endpoints.getRecipeCollection).pipe(map(r => this.fakedRecipes));
  }

  editRecipe(recipeId: string, data: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(this.endpoint + '/' + recipeId, data);
  }

  getRecipe(payload: GetRecipeRequestPayload): Observable<Recipe> {
    return this.http.get<Recipe>(this.endpoints.getRecipe);
  }

  createRecipe(payload: CreateRecipeRequestPayload): Observable<Recipe> {
    return this.http.post<Recipe>(this.endpoints.createRecipe, payload.data);
  }

  updateRecipe(payload: UpdateRecipeRequestPayload): Observable<Recipe> {
    return this.http.put<Recipe>(this.endpoints.updateRecipe, payload.data);
  }

  removeRecipe(payload: RemoveRecipeRequestPayload): Observable<void> {
    return this.http.delete<any>(this.endpoints.removeRecipe + '/' + payload.id);
  }
}
