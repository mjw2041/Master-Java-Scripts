import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatillas.service';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css'],
  providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit {

  public titulo:string;
  public zapatillas:  Array<Zapatilla>
  public zapatilla:  Zapatilla;
  public color:string = 'orange'
  public miMarca:String;

  public marcas: String[];

  constructor(
      private _zapatillaService: ZapatillaService ) {
    this.marcas =   new Array();
    this.titulo = 'Listado de Zapatillas'
    this.zapatillas = this._zapatillaService.getZapatilla();


    this.zapatilla = new Zapatilla ('Adidas Yezzy ', 'Adidas', 'Gris', 180, false);
   }



  ngOnInit() {
    console.log(this.zapatillas);
    console.log(this.zapatilla);

    this.getMarcas();
  }

  getMarcas(){
    this.zapatillas.forEach((zapatilla, index) => {

    if(this.marcas.indexOf(zapatilla.marca) < 0 ){
        this.marcas.push(zapatilla.marca);
      }
    })
    console.log(this.marcas);
  }

  getMarca(){
    alert(this.miMarca);
  }

  addMarca(){
    this.marcas.push(this.miMarca);
  }

  borrarMarca(indice) {
    this.marcas.splice(indice,1);
    alert("Se elimino el indice: " + indice);
  }

  onBlur(){
    console.log("Ha salido del input");
  }

  mostrarPalabra(){
    console.log("La palabra ingresada es: " + this.miMarca);
  }

}
