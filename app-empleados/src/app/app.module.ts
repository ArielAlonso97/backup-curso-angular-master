import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeSonComponent } from './employee-son/employee-son.component';
import { PropertyEmployeeComponent } from './property-employee/property-employee.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';

const appRoutes: Routes = [
  {path:'',component:HomeComponentComponent},
  {path:'proyectos',component:ProyectosComponentComponent},
  {path:'quienes',component:QuienesComponentComponent},
  {path:'contacto',component:ContactoComponentComponent},
  {path:'actualiza/:id',component:ActualizaComponentComponent},
  {path:'**',component:ErrorPersonalizadoComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSonComponent,
    PropertyEmployeeComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
