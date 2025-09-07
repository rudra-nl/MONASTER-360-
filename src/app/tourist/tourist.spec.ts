import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tourist } from './tourist';

describe('Tourist', () => {
  let component: Tourist;
  let fixture: ComponentFixture<Tourist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tourist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tourist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
