import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ConfirmationDialogComponent} from './confirmation-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";

describe('ConfirmationDialogComponent', () => {
  const mockedDialogData = {title: 'Tytuł', message: 'Wiadomość'};
  let component: ConfirmationDialogComponent;
  let fixture: ComponentFixture<ConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmationDialogComponent],
      imports: [MatDialogModule],
      providers: [
        {
          provide: MatDialogRef, useValue: {
            close: (value: boolean) => {
              console.log(value);
            }
          }
        },
        {provide: MAT_DIALOG_DATA, useValue: mockedDialogData},
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationDialogComponent);
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

  it('should close dialog on dismiss', () => {
    jest.spyOn(component.dialogRef, 'close');
    component.onDismiss();
    fixture.detectChanges();
    expect(component.dialogRef.close).toHaveBeenCalledWith(false);
  });

  it('should close dialog on confirm', () => {
    jest.spyOn(component.dialogRef, 'close');
    component.onConfirm();
    fixture.detectChanges();
    expect(component.dialogRef.close).toHaveBeenCalledWith(true);
  });
});
