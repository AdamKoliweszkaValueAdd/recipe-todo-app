import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RecipeListComponent} from './recipe-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import {RecipeFacade} from "@recipes/data-access";
import {Recipe} from "@recipes/domain";
import {MatDialogModule} from "@angular/material/dialog";
import {UtilsModule} from "@recipes/utils";

describe('RecipeListComponent', () => {
  let component: RecipeListComponent;
  let fixture: ComponentFixture<RecipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeListComponent],
      imports: [RouterTestingModule, MatDialogModule, UtilsModule],
      providers: [
        {
          provide: RecipeFacade, useValue: {
            createRecipe: (recipe: Recipe) => {
              console.log(recipe);
            },
            getRecipeCollection: () => {
              console.log("get recipe");
            }
          }
        },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
