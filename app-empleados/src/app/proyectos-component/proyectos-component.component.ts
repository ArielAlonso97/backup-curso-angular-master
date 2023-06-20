import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmpleadosService } from '../Servicios/empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  constructor(private router:Router, private empleadoService:EmpleadosService) { }

  ngOnInit(): void {
  }

  volverHome(){
    this.router.navigate([''])
  }

  employees:Employee[]=[
  ];

  addEmployee() {
    let myEmployee = new Employee(this.inputName, this.inputLastName, this.inputPosition, this.inputSalary);
    // this.employees.push(myEmployee);
    this.empleadoService.addEmployee(myEmployee);
    this.router.navigate([''])
  }

  inputName:string='';
  inputLastName:string='';
  inputPosition:string='';
  inputSalary:number=0;
}
