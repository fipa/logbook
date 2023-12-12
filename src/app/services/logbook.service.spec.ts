import { TestBed } from '@angular/core/testing';

import { LogbookService } from './logbook.service';
import { HttpClientModule } from '@angular/common/http';

describe('LogbookService', () => {
  let service: LogbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(LogbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
