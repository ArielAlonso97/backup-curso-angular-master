import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-son',
  templateUrl: './employee-son.component.html',
  styleUrls: ['./employee-son.component.css']
})
export class EmployeeSonComponent implements OnInit {

  @Input() employee: Employee;
  @Input() i: number;

  constructor() { }

  ngOnInit(): void {
  }

  arrayProperties = [''];

  addProperty(newProperty: string) {
    this.arrayProperties.push(newProperty);
  }

}
