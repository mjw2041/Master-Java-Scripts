var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("camiseta estampada con el logo de: " + logo);
        };
    };
}
var Camiseta = /** @class */ (function () {
    /*
         constructor( color, modelo, marca, talla, precioPublico) {
              this.color = color;
              this.modelo = modelo;
              this.marca = marca;
              this.talla = talla;
              this.precioPublico = precioPublico;
         }
    */
    function Camiseta() {
        this.estaReservada = false; /* Valor por defecto */
    }
    Camiseta.prototype.modificarReserva = function () {
        this.estaReservada = !this.estaReservada;
    };
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar("Gucci Gang")
    ], Camiseta);
    return Camiseta;
}());
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
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
console.log("color playera: " + playera.getColor());
var sudadera = new Sudadera();
sudadera.color = "Verde";
sudadera.modelo = "Manga Corta";
sudadera.marca = "ADIDAS";
sudadera.talla = "S";
sudadera.precioPublico = 80;
sudadera.setCapucha(true);
console.log(sudadera);
