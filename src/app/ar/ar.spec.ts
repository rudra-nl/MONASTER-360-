import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AR } from './ar';

describe('AR', () => {
  let component: AR;
  let fixture: ComponentFixture<AR>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AR]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AR);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
