import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestRate } from './interest-rate';

describe('InterestRate', () => {
  let component: InterestRate;
  let fixture: ComponentFixture<InterestRate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestRate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestRate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
