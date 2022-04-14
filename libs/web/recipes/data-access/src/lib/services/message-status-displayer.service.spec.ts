import {TestBed} from '@angular/core/testing';

import {MessageStatusDisplayerService} from './message-status-displayer.service';
import {MatSnackBarModule} from "@angular/material/snack-bar";

import {of} from "rxjs";
import {RecipeFacade} from "../+state/recipe.facade";

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
