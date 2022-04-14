import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFormContentComponent } from './recipe-form-content.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('RecipeFormContentComponent', () => {
  let component: RecipeFormContentComponent;
  let fixture: ComponentFixture<RecipeFormContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeFormContentComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: 'BASE_API_URL', useValue: ''
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFormContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
