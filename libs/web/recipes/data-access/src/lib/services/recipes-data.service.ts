import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  CreateRecipeRequestPayload,
  GetRecipeRequestPayload,
  Recipe,
  RemoveRecipeRequestPayload,
  UpdateRecipeRequestPayload
} from '@recipes/domain';
import {Observable, of} from 'rxjs';
import {fakedRecipes} from "../resources/fake-recipes";
import {MemoizeExpiring} from "typescript-memoize";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RecipesDataService {

  fakedRecipes = fakedRecipes;

  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) {
    console.log(this.baseUrl)
  }

  @MemoizeExpiring(60000)
  getRecipeCollection(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl);
  }


  getRecipeNamesCollection(): Observable<{ name: string, _id: string }[]> {
    return this.http.get<{ name: string, _id: string }[]>(this.baseUrl).pipe(map((recipes) => {
      return recipes.map((r) => {
        return {name: r.name, _id: r._id}
      });
    }));
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
    const newDataOfRecipe = {...payload.data, _id: undefined};
    return this.http.put<Recipe>(this.baseUrl + '/' + payload.data._id, newDataOfRecipe).pipe(map(r => {
      return payload.data;
    }));
  }

  removeRecipe(payload: RemoveRecipeRequestPayload): Observable<void> {
    return this.http.delete<any>(this.baseUrl + '/' + payload.id);
  }
}
