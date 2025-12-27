import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLoan } from './housing-loan';

describe('HousingLoan', () => {
  let component: HousingLoan;
  let fixture: ComponentFixture<HousingLoan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLoan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingLoan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
