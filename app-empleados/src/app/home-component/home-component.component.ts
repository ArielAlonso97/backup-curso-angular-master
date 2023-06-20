import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmpleadosService } from '../Servicios/empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  employees:Employee[]=[
  ];

  constructor(private empleadoService:EmpleadosService) { }

  ngOnInit(): void {
    this.employees=this.empleadoService.employees
  }
  title = 'Listado de empleados';

  

  addEmployee() {
    let myEmployee = new Employee(this.inputName, this.inputLastName, this.inputPosition, this.inputSalary);
    // this.employees.push(myEmployee);
    this.empleadoService.addEmployee(myEmployee);
  }

  inputName:string='';
  inputLastName:string='';
  inputPosition:string='';
  inputSalary:number=0;

}
