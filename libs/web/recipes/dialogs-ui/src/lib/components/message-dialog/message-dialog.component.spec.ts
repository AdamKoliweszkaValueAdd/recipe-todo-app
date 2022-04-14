import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MessageDialogComponent} from './message-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";

describe('MessageDialogComponent', () => {
  let component: MessageDialogComponent;
  let fixture: ComponentFixture<MessageDialogComponent>;
  const mockedDialogData = {title: 'Tytuł', message: 'Wiadomość'};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageDialogComponent],
      imports: [MatDialogModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: mockedDialogData},
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    fixture.detectChanges();
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain(mockedDialogData.title);
  });

  it('should display message', () => {
    fixture.detectChanges();
    const h1 = fixture.nativeElement.querySelector('p');
    expect(h1.textContent).toContain(mockedDialogData.message);
  });
});
