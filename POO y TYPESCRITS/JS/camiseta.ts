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
 
class Camiseta {

     public color: string;
     public modelo: string;
     public marca: string;
     public talla: string;
     public precioPublico: number;
     private estaReservada: boolean = false;  /* Valor por defecto */

     modificarReserva () {
          this.estaReservada = !this.estaReservada;  
     }

     
 }


 var miCamiseta = new Camiseta();
 miCamiseta.color = "Rojo";
 miCamiseta.modelo = "Manga Larga";
 miCamiseta.marca = "Nike";
 miCamiseta.talla = "XL";
 miCamiseta.precioPublico = 1500; 
 miCamiseta.modificarReserva();

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
 