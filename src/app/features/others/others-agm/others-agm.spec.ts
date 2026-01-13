import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersAgm } from './others-agm';

describe('OthersAgm', () => {
  let component: OthersAgm;
  let fixture: ComponentFixture<OthersAgm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OthersAgm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthersAgm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
