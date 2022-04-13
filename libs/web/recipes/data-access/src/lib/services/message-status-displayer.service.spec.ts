import {TestBed} from '@angular/core/testing';

import {MessageStatusDisplayerService} from './message-status-displayer.service';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RecipeFacade} from "@recipes/data-access";
import {of} from "rxjs";

describe('MessageStatusDisplayerService', () => {
  let service: MessageStatusDisplayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      providers: [
        {
          provide: RecipeFacade, useValue: {
            currentMessageOfStatus$: of(null)
          }
        },
      ]
    });
    service = TestBed.inject(MessageStatusDisplayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
