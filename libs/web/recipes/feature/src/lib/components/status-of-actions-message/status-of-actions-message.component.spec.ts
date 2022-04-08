import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOfActionsMessageComponent } from './status-of-actions-message.component';

describe('StatusOfActionsMessageComponent', () => {
  let component: StatusOfActionsMessageComponent;
  let fixture: ComponentFixture<StatusOfActionsMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusOfActionsMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusOfActionsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
