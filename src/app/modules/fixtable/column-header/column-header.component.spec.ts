import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtableColumnHeaderComponent } from './fixtable-column-header.component';

describe('FixtableColumnHeaderComponent', () => {
  let component: FixtableColumnHeaderComponent;
  let fixture: ComponentFixture<FixtableColumnHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtableColumnHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtableColumnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
