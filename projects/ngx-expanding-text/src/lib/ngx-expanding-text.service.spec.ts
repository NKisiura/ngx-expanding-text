import { TestBed } from '@angular/core/testing';

import { NgxExpandingTextService } from './ngx-expanding-text.service';

describe('NgxExpandingTextService', () => {
  let service: NgxExpandingTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxExpandingTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
