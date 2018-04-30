import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCustomComponentComponent } from './example-custom-component.component';

describe('ExampleCustomComponentComponent', () => {
  let component: ExampleCustomComponentComponent;
  let fixture: ComponentFixture<ExampleCustomComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleCustomComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCustomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
