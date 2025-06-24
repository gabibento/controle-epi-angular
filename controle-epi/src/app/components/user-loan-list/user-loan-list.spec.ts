import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoanList } from './user-loan-list';

describe('UserLoanList', () => {
  let component: UserLoanList;
  let fixture: ComponentFixture<UserLoanList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLoanList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoanList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
