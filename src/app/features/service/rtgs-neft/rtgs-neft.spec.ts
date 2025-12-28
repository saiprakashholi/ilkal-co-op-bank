import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtgsNeft } from './rtgs-neft';

describe('RtgsNeft', () => {
  let component: RtgsNeft;
  let fixture: ComponentFixture<RtgsNeft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RtgsNeft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtgsNeft);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
