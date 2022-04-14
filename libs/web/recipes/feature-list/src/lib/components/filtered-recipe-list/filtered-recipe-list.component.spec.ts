import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredRecipeListComponent } from './filtered-recipe-list.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

describe('FilteredRecipeListComponent', () => {
  let component: FilteredRecipeListComponent;
  let fixture: ComponentFixture<FilteredRecipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredRecipeListComponent ],
      imports: [MatListModule,MatIconModule]
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
