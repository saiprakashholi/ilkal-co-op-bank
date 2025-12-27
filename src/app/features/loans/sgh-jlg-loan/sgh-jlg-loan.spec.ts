import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SghJlgLoan } from './sgh-jlg-loan';

describe('SghJlgLoan', () => {
  let component: SghJlgLoan;
  let fixture: ComponentFixture<SghJlgLoan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SghJlgLoan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SghJlgLoan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
