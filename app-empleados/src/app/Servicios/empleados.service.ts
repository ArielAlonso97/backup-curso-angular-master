import { Injectable } from '@angular/core';
import { Employee } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor() { }
  employees:Employee[]=[
    new Employee('Leo', 'Diaz', 'President', 100000),
    new Employee('Juan', 'Perez', 'Director', 50000),
    new Employee('Pedro', 'Gonzalez', 'Gerente', 30000),
    new Employee('Maria', 'Lopez', 'Secretaria', 20000),
  ];

  addEmployee(myEmployee: Employee) {
    
    this.employees.push(myEmployee);
  }
  
  encontrarEmpleado(indice:number){
    let empleado:Employee = this.employees[indice]
    return empleado
  }

  editEmployee(myEmployee: Employee,indice: number){
    this.employees[indice] = myEmployee
  }

  eliminarEmployee(indice: number){
    this.employees.splice(indice,1);   
  }

  
}
