/**
 * 
 *  Objeto: Molde
 *  Propiedades ( caracteristca del objeto)
 *  Metodo funciones o acciones del objeto
 *  public es visibles desde todos los lugares.
 *  private: El campo o método sólo es visible dentro de la clase donde se define
 *  protected: El campo o método es visible en la clase en donde se define y en cualquiera de sus subclases.
 * 
 */ 
/** 
 * Decorador
 */
function estampar( logo: string){
     return function(target: Function){
          target.prototype.estampacion = function():void{
               console.log("camiseta estampada con el logo de: " + logo);
          }
     }
} 
interface camisetaBase {
     setColor(color: string);
     
     getColor()

}

@estampar("Gucci Gang")
class Camiseta implements camisetaBase{
/*export class Camiseta {*/

     public color: string;
     public modelo: string;
     public marca: string;
     public talla: string;
     public precioPublico: number;
     public estaReservada: boolean = false;  /* Valor por defecto */
/*
     constructor( color, modelo, marca, talla, precioPublico) {
          this.color = color;
          this.modelo = modelo;
          this.marca = marca;
          this.talla = talla;
          this.precioPublico = precioPublico;
     }     
*/     
     constructor( ) {
     
     }     
     modificarReserva () {
          this.estaReservada = !this.estaReservada;  
     }

     setColor(color: string) {
         this.color = color; 
     }

     getColor(){
          return this.color;
     }     
 }

 class Sudadera extends Camiseta{
     public capucha: boolean;

     setCapucha( capucha: boolean) {
          this.capucha = capucha;
     }

     getCapucha():boolean{
          return this.capucha;
     }
 }


 var miCamiseta = new Camiseta();
 miCamiseta.color = "Rojo";
 miCamiseta.modelo = "Manga Larga";
 miCamiseta.marca = "Nike";
 miCamiseta.talla = "XL";
 miCamiseta.precioPublico = 1500; 
 miCamiseta.modificarReserva();
 miCamiseta.estampar();

 /* Ver todo el objeto */
 console.log(miCamiseta);
 
 /* Mostar un atributo del objeto */
 console.log("Color de mi camiseta: " + miCamiseta.color);

 var playera = new Camiseta();
 playera.color = "Verde";
 playera.modelo = "Manga Corta";
 playera.marca = "ADIDAS";
 playera.talla = "S";
 playera.precioPublico = 80;
 
 console.log(playera);
 console.log("color playera: " + playera.getColor());

 var sudadera = new Sudadera();
 sudadera.color = "Verde";
 sudadera.modelo = "Manga Corta";
 sudadera.marca = "ADIDAS";
 sudadera.talla = "S";
 sudadera.precioPublico = 80;
 sudadera.setCapucha(true);

 console.log(sudadera);


 