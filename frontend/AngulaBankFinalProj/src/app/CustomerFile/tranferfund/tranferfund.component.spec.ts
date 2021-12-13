import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferfundComponent } from './tranferfund.component';

describe('TranferfundComponent', () => {
  let component: TranferfundComponent;
  let fixture: ComponentFixture<TranferfundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranferfundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranferfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
