import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMurals } from './digital-murals';

describe('DigitalMurals', () => {
  let component: DigitalMurals;
  let fixture: ComponentFixture<DigitalMurals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalMurals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalMurals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
