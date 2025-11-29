import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundersList } from './founders-list';

describe('FoundersList', () => {
  let component: FoundersList;
  let fixture: ComponentFixture<FoundersList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundersList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundersList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
