import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MainViewComponent} from './main-view.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";

describe('MainViewComponent', () => {
  let component: MainViewComponent;
  let fixture: ComponentFixture<MainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainViewComponent],
      imports: [MatSnackBarModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
