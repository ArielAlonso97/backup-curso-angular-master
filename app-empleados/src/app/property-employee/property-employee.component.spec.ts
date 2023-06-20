import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyEmployeeComponent } from './property-employee.component';

describe('PropertyEmployeeComponent', () => {
  let component: PropertyEmployeeComponent;
  let fixture: ComponentFixture<PropertyEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
