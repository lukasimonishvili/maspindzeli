import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSpinerComponent } from './number-spiner.component';

describe('NumberSpinerComponent', () => {
  let component: NumberSpinerComponent;
  let fixture: ComponentFixture<NumberSpinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberSpinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberSpinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
