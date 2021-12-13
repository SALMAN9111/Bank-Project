import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpChangePasswordComponent } from './emp-change-password.component';

describe('EmpChangePasswordComponent', () => {
  let component: EmpChangePasswordComponent;
  let fixture: ComponentFixture<EmpChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
