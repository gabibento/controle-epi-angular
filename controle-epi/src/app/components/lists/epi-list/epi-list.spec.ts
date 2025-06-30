import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpiList } from './epi-list';

describe('EpiList', () => {
  let component: EpiList;
  let fixture: ComponentFixture<EpiList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpiList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpiList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
