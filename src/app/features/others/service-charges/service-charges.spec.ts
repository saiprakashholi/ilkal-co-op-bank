import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCharges } from './service-charges';

describe('ServiceCharges', () => {
  let component: ServiceCharges;
  let fixture: ComponentFixture<ServiceCharges>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCharges]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCharges);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
