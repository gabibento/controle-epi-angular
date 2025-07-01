import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolutionList } from './devolution-list';

describe('DevolutionList', () => {
  let component: DevolutionList;
  let fixture: ComponentFixture<DevolutionList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevolutionList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevolutionList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
