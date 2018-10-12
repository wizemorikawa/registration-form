import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmInfomationComponent } from './confirm-infomation.component';

describe('ConfirmInfomationComponent', () => {
  let component: ConfirmInfomationComponent;
  let fixture: ComponentFixture<ConfirmInfomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmInfomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
