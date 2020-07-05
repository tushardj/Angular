import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayResulComponent } from './display-resul.component';

describe('DisplayResulComponent', () => {
  let component: DisplayResulComponent;
  let fixture: ComponentFixture<DisplayResulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayResulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayResulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
