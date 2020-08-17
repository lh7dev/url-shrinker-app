import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrinkUrlComponent } from './shrink-url.component';

describe('ShrinkUrlComponent', () => {
  let component: ShrinkUrlComponent;
  let fixture: ComponentFixture<ShrinkUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrinkUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrinkUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
