import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  name = 'John';
  lastName = 'Doe';
  age = 20;
  company = 'Google';

  /* setCompany(event: Event) {
    this.company = (<HTMLInputElement>event.target).value;
  } */

  show = true;
  registered = false;

  textRegister = 'No hay usuarios registrados.';

  getRegistered() {
    this.registered = false;
  }

  setUserRegistered(event: Event) {
    if ((<HTMLInputElement>event.target).value === '1') {
      this.textRegister = 'Usuario registrado.';
    } else {
      this.textRegister = 'No hay usuarios registrados.';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
