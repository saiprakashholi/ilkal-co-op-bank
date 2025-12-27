import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldLoan } from './gold-loan';

describe('GoldLoan', () => {
  let component: GoldLoan;
  let fixture: ComponentFixture<GoldLoan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldLoan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldLoan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
