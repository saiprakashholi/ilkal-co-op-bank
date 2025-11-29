import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorsList } from './directors-list';

describe('DirectorsList', () => {
  let component: DirectorsList;
  let fixture: ComponentFixture<DirectorsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
