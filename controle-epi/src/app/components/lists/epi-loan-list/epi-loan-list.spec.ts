import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpiLoanList } from './epi-loan-list';

describe('EpiLoanList', () => {
  let component: EpiLoanList;
  let fixture: ComponentFixture<EpiLoanList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpiLoanList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpiLoanList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
