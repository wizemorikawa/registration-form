import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInfomationComponent } from './input-infomation.component';

describe('InputInfomationComponent', () => {
  let component: InputInfomationComponent;
  let fixture: ComponentFixture<InputInfomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputInfomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
