import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RecipeDetailsComponent} from './recipe-details.component';
import {RecipeFacade} from "@recipes/data-access";
import {RouterTestingModule} from "@angular/router/testing";
import {MatDialogModule} from "@angular/material/dialog";

describe('RecipeDetailsComponent', () => {
  let component: RecipeDetailsComponent;
  let fixture: ComponentFixture<RecipeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeDetailsComponent],
      imports: [RouterTestingModule, MatDialogModule],
      providers: [
        {
          provide: RecipeFacade, useValue: {
            getRecipe: (recipeId: string) => {
              console.log(recipeId);
            }
          }
        },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    const h1 = fixture.nativeElement.querySelector('mat-card-title');
    expect(h1.textContent).toContain("Szczegóły przepisu");
  });
});
