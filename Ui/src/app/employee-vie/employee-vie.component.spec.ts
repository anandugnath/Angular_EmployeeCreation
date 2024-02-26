import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeVieComponent } from './employee-vie.component';

describe('EmployeeVieComponent', () => {
  let component: EmployeeVieComponent;
  let fixture: ComponentFixture<EmployeeVieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeVieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeVieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
