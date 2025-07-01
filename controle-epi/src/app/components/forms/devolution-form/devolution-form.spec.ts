import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolutionForm } from './devolution-form';

describe('DevolutionForm', () => {
  let component: DevolutionForm;
  let fixture: ComponentFixture<DevolutionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevolutionForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevolutionForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
