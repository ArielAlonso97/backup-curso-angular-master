import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Registro de Usuarios';
  name: string = '';
  lastName: string = '';
  position: string = '';
  message = '';
  registered = false;
  entries: any;

  constructor() {
    this.entries = [
      {
        title: 'Python',
      },
      {
        title: 'Java',
      },
      {
        title: 'JavaScript',
      },
      {
        title: 'C#',
      },
      {
        title: 'C++',
      },
      {
        title: 'C',
      }
    ];
  }

  setRegister() {
    this.registered = true;
    this.message = 'Registro exitoso';
  }
}
