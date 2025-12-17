import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyNotice } from './emergency-notice';

describe('EmergencyNotice', () => {
  let component: EmergencyNotice;
  let fixture: ComponentFixture<EmergencyNotice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmergencyNotice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencyNotice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
