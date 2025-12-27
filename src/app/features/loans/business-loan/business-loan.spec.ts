import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessLoan } from './business-loan';

describe('BusinessLoan', () => {
  let component: BusinessLoan;
  let fixture: ComponentFixture<BusinessLoan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessLoan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessLoan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
