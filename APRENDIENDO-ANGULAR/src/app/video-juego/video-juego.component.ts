import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-juego',
  templateUrl:'./video-juego.component.html',
  /*template: `
              <h2>Listado de Video Juegos</h2>
            <ul>
              <li>Taken</li>
              <li>GTA</li>
              <li>Prince of Persia</li>

            </ul>
              `,
  */
  styleUrls: ['./video-juego.component.css']
})
export class VideoJuegoComponent implements OnInit, DoCheck {
  titulo: string;
  listado: string;

  constructor() {
        this.titulo = 'Componentes Video Juego';
        this.listado = 'Listado de los videos juegos mas populares'
        console.log('Estoy cargando video juego')


  }

  ngOnInit() {
    console.log("Oninit Componentes Video Juego")
  }

  ngDoCheck(){
    console.log("DoCheck Componentes Video Juego")
  }

  ngOnDestroy(): void {
    console.log("OnDesctroy Componentes Video Juego")


  }

  cambiarTitulo(){
    this.titulo = "Nuevo Titulo";
  }

}
