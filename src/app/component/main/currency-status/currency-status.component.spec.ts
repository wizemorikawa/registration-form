import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyStatusComponent } from './currency-status.component';

describe('CurrencyStatusComponent', () => {
  let component: CurrencyStatusComponent;
  let fixture: ComponentFixture<CurrencyStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
