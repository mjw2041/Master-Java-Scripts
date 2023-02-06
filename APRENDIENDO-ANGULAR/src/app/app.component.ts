import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public descripcion: string;
  public mostrarVideoJuego :boolean = true;
  public configuracion;

  constructor(){
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion
    this.configuracion = Configuracion;

  }

  ocultarVideoJuego(value){
    this.mostrarVideoJuego = value;
    console.log(this.mostrarVideoJuego);
  }
}
