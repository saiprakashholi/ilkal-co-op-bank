import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialStrength } from './financial-strength';

describe('FinancialStrength', () => {
  let component: FinancialStrength;
  let fixture: ComponentFixture<FinancialStrength>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialStrength]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialStrength);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
