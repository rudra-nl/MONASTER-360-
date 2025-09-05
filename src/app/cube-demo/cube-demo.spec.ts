import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeDemo } from './cube-demo';

describe('CubeDemo', () => {
  let component: CubeDemo;
  let fixture: ComponentFixture<CubeDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CubeDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubeDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
