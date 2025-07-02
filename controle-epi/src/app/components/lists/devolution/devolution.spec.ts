import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Devolution } from './devolution';

describe('Devolution', () => {
  let component: Devolution;
  let fixture: ComponentFixture<Devolution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Devolution]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Devolution);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
