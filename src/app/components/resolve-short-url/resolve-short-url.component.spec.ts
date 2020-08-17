import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveShortUrlComponent } from './resolve-short-url.component';

describe('ResolveShortUrlComponent', () => {
  let component: ResolveShortUrlComponent;
  let fixture: ComponentFixture<ResolveShortUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolveShortUrlComponent ]
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
