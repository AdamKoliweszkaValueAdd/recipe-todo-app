import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredRecipeListComponent } from './filtered-recipe-list.component';

describe('FilteredRecipeListComponent', () => {
  let component: FilteredRecipeListComponent;
  let fixture: ComponentFixture<FilteredRecipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredRecipeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
