import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEpi } from './update-epi';

describe('UpdateEpi', () => {
  let component: UpdateEpi;
  let fixture: ComponentFixture<UpdateEpi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEpi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEpi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
