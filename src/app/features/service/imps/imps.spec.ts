import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imps } from './imps';

describe('Imps', () => {
  let component: Imps;
  let fixture: ComponentFixture<Imps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Imps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
