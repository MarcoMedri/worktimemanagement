import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCalculatorComponent } from './work-calculator.component';

describe('WorkCalculatorComponent', () => {
  let component: WorkCalculatorComponent;
  let fixture: ComponentFixture<WorkCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
