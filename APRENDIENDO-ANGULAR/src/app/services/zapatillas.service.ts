import { Zapatilla } from './../models/zapatilla';
import { Injectable } from "@angular/core";


@Injectable()
export class ZapatillaService{
  public zapatillas: Array<Zapatilla>;

  constructor(){
    console.log("Hola Mundo");
  }

  getTexto():String{
    return "Hola Mundo Desde un Servicio";
  }
  getZapatilla(): Array<Zapatilla> {
    return this.zapatillas;
  }


}
