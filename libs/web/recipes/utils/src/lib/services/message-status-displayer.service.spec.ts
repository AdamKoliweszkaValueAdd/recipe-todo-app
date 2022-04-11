import { TestBed } from '@angular/core/testing';

import { MessageStatusDisplayerService } from './message-status-displayer.service';

describe('MessageStatusDisplayerService', () => {
  let service: MessageStatusDisplayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageStatusDisplayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
