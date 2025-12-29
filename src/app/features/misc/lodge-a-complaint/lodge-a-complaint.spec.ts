import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgeAComplaint } from './lodge-a-complaint';

describe('LodgeAComplaint', () => {
  let component: LodgeAComplaint;
  let fixture: ComponentFixture<LodgeAComplaint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LodgeAComplaint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LodgeAComplaint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
