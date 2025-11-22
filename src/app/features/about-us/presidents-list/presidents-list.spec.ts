import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentsList } from './presidents-list';

describe('PresidentsList', () => {
  let component: PresidentsList;
  let fixture: ComponentFixture<PresidentsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresidentsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresidentsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
