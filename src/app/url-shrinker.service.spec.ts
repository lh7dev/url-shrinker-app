import { TestBed } from '@angular/core/testing';

import { UrlShrinkerService } from './url-shrinker.service';

describe('UrlShrinkerService', () => {
  let service: UrlShrinkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlShrinkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
