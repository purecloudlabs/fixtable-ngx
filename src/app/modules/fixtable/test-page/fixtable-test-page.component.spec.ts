import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtableTestPageComponent } from './fixtable-test-page.component';

describe('FixtableTestPageComponent', () => {
  let component: FixtableTestPageComponent;
  let fixture: ComponentFixture<FixtableTestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtableTestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtableTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
