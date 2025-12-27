import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeBanking } from './safe-banking';

describe('SafeBanking', () => {
  let component: SafeBanking;
  let fixture: ComponentFixture<SafeBanking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafeBanking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafeBanking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
