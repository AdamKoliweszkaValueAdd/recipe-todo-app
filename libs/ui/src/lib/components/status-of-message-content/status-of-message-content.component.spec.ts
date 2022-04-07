import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOfMessageContentComponent } from './status-of-message-content.component';

describe('StatusOfMessageContentComponent', () => {
  let component: StatusOfMessageContentComponent;
  let fixture: ComponentFixture<StatusOfMessageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusOfMessageContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusOfMessageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
