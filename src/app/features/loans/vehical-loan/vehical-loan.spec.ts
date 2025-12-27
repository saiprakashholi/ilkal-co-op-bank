import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicalLoan } from './vehical-loan';

describe('VehicalLoan', () => {
  let component: VehicalLoan;
  let fixture: ComponentFixture<VehicalLoan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicalLoan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicalLoan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
