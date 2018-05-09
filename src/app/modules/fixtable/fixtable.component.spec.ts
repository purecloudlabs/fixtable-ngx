import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtableComponent } from './fixtable.component';

describe('GridComponent', () => {
  let component: FixtableComponent;
  let fixture: ComponentFixture<FixtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
