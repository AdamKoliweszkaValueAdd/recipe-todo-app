import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesListItemComponent } from './recipes-list-item.component';

describe('RecipesListItemComponent', () => {
  let component: RecipesListItemComponent;
  let fixture: ComponentFixture<RecipesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
