import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinKeyIndicators } from './fin-key-indicators';

describe('FinKeyIndicators', () => {
  let component: FinKeyIndicators;
  let fixture: ComponentFixture<FinKeyIndicators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinKeyIndicators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinKeyIndicators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
