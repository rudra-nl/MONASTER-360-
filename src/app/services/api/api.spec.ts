import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiService } from './api';

describe('Api', () => {
  let component: ApiService;
  let fixture: ComponentFixture<ApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
