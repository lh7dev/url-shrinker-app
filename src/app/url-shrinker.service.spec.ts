import { TestBed } from '@angular/core/testing';

import { UrlShrinkerService } from './url-shrinker.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

describe('UrlShrinkerService', () => {
  let service: UrlShrinkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, UrlShrinkerService, HttpHandler, FormBuilder],
    });
    service = TestBed.inject(UrlShrinkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
