import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agm } from './agm';

describe('Agm', () => {
  let component: Agm;
  let fixture: ComponentFixture<Agm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Agm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Agm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
