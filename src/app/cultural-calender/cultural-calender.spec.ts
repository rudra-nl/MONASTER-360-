import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalCalender } from './cultural-calender';

describe('CulturalCalender', () => {
  let component: CulturalCalender;
  let fixture: ComponentFixture<CulturalCalender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CulturalCalender]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulturalCalender);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
