import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrinkUrlComponent } from './shrink-url.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlShrinkerService } from 'src/app/url-shrinker.service';
import { FormBuilder } from '@angular/forms';

describe('ShrinkUrlComponent', () => {
  let component: ShrinkUrlComponent;
  let fixture: ComponentFixture<ShrinkUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShrinkUrlComponent],
      providers: [HttpClient, UrlShrinkerService, HttpHandler, FormBuilder],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrinkUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when url value = "", form should be invalid', () => {
    component.form.controls['url'].setValue('');
    expect(component.form.valid).toBe(false);
  });

  it('when url value = "www.xxx123_.com", form should be invalid', () => {
    component.form.controls['url'].setValue('www.xxx123_.com');
    expect(component.form.valid).toBe(false);
  });

  it('when url value = "https://www.mambicoder", form should be valid', () => {
    component.form.controls['url'].setValue('https://www.mambicoder');
    expect(component.form.valid).toBe(true);
  });

  it('when url value = "https://www.mambicoder.", form should be invalid', () => {
    component.form.controls['url'].setValue('https://www.mambicoder.');
    expect(component.form.valid).toBe(false);
  });

  it('when url value = "https://www.mambicoder.com", form should be valid', () => {
    component.form.controls['url'].setValue('https://www.mambicoder.com');
    expect(component.form.valid).toBe(true);
  });

  it('when url value = "https://www.mambicoder.com/asdwer_%+123?", form should be valid', () => {
    component.form.controls['url'].setValue('https://www.mambicoder.com/asdwer_%+123?');
    expect(component.form.valid).toBe(true);
  });

  it('when url value = "http://www.mambicoder.com", form should be valid', () => {
    component.form.controls['url'].setValue('http://www.mambicoder.com');
    expect(component.form.valid).toBe(true);
  });

  it('when url value = "ftp://www.mambicoder.com", form should be valid', () => {
    component.form.controls['url'].setValue('ftp://www.mambicoder.com');
    expect(component.form.valid).toBe(true);
  });

  it('when url value = "ftps://www.mambicoder.com", form should be valid', () => {
    component.form.controls['url'].setValue('ftps://www.mambicoder.com');
    expect(component.form.valid).toBe(true);
  });
});
