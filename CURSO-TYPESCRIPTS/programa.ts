module Tienda {
    export class  Ropa {
        constructor( public titulo: string) {
            alert (titulo);
        }
    }

    export class  Informatica {
        constructor( public titulo: string) {
            alert ('tienda de tecnologia ' + titulo);
        }
    }
}

import Informatica = Tienda.Informatica;
let cargarInformatica = new Informatica("FOX Informatica");

function arranque(lanzar: string ) {
    return function(target: Function) { 
        target.prototype.lanzamiento = function():void {
                console.log(lanzar);                
        }        
    }
}

/*@arranque("Lanzamiento del Curso del NODE JS y ANGULAR 2")*/
class Programa {
    public nombre: string;
    public version: number;
    
    getNombre(){
        return this.nombre;
    }

    setNombre (nombre: string) {
        this.nombre = nombre;
    }

    getVersion() {
        return this.version;
    }

    setVersion( version: number) {
        this.version = version;
    }
}

class EditorVideo extends Programa {
    public timeline:  number;

    setTimeline ( timeline: number) {
        this.timeline = timeline;
    }

    getTimeline(){
        return this.timeline;
    }

    getAllData():string{
        return this.getNombre() + ' - ' + this.getVersion() + ' - ' + this.getTimeline();
    }
}

var programa = new Programa();


var editor = new EditorVideo();
editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeline(4000);
console.log(editor.getAllData());

// Logica del formulario

var programas: Array<Programa> = [];

function guardar(){
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

    var programa = new Programa();
    programa.setNombre(nombre);
    
    programas.push(programa);

    console.log(programas);
    

    var list = "";
    for( var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";        
        console.log(list);
    }

    var listado = <HTMLElement> document.getElementById("listado");
    listado.innerHTML = list; 

    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value = " ";


}

