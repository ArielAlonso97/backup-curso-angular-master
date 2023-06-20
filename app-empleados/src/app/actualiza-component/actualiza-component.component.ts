import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from '../Servicios/empleados.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css'],
})
export class ActualizaComponentComponent implements OnInit {
  constructor(
    private router: Router,
    private empleadoService: EmpleadosService,
    private route: ActivatedRoute
  ) {}

  employees: Employee[] = [];
  accion: number;

  ngOnInit(): void {
    this.accion = this.route.snapshot.queryParams['accion'];
    this.indice = this.route.snapshot.params['id'];
    let employee: Employee = this.empleadoService.encontrarEmpleado(
      this.indice
    );

    this.inputName = employee.name;
    this.inputLastName = employee.lastName;
    this.inputPosition = employee.position;
    this.inputSalary = employee.salary;
  }

  volverHome() {
    this.router.navigate(['']);
  }

  /*editEmployee() {
    let myEmployee = new Employee(
      this.inputName,
      this.inputLastName,
      this.inputPosition,
      this.inputSalary
    );
    // this.employees.push(myEmployee);
    this.empleadoService.editEmployee(myEmployee,this.indice);
    this.router.navigate(['']);
  }

  eliminaEmployee(){
    this.empleadoService.eliminarEmployee(this.indice);
    this.router.navigate(['']);
  }*/

  editEmployee() {
    let myEmployee = new Employee(
      this.inputName,
      this.inputLastName,
      this.inputPosition,
      this.inputSalary
    );
    // this.employees.push(myEmployee);
    if (this.accion == 1) {
      this.empleadoService.editEmployee(myEmployee, this.indice);
      this.router.navigate(['']);
    } else {
      this.empleadoService.eliminarEmployee(this.indice);
      this.router.navigate(['']);
    }
  }

  inputName: string = '';
  inputLastName: string = '';
  inputPosition: string = '';
  inputSalary: number = 0;

  indice: number;
}
