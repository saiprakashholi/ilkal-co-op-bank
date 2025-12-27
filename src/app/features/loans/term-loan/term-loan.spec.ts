import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermLoan } from './term-loan';

describe('TermLoan', () => {
  let component: TermLoan;
  let fixture: ComponentFixture<TermLoan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermLoan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermLoan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
