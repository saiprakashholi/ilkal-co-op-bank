import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankBrand } from './bank-brand';

describe('BankBrand', () => {
  let component: BankBrand;
  let fixture: ComponentFixture<BankBrand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankBrand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankBrand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
