import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-property-employee',
  templateUrl: './property-employee.component.html',
  styleUrls: ['./property-employee.component.css']
})
export class PropertyEmployeeComponent implements OnInit {

  @Output() propertyEmployee = new EventEmitter<string>();

  addProperty(value: string) {
    this.propertyEmployee.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
