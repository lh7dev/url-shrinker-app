import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveShortUrlComponent } from './resolve-short-url.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlShrinkerService } from 'src/app/url-shrinker.service';
import { FormBuilder } from '@angular/forms';

describe('ResolveShortUrlComponent', () => {
  let component: ResolveShortUrlComponent;
  let fixture: ComponentFixture<ResolveShortUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolveShortUrlComponent ],
      providers: [HttpClient, UrlShrinkerService, HttpHandler, FormBuilder],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolveShortUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
