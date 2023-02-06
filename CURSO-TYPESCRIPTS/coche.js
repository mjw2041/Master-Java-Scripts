
var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0;
        this.color = "Blanco";
        this.velocidad = 0;
        if (modelo == null) {
            this.modelo = "BMW Generico";
        }
        else {
            this.modelo = modelo;
        }
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.setModelor = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad = this.velocidad + 1;
    };
    Coche.prototype.frenar = function () {
        this.velocidad = this.velocidad - 1;
    };
    return Coche;
}());
var coche = new Coche('Renault Clio');
coche.setColor("ROJO");
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("El coche es de color: " + coche.getColor() + " Modelo " + coche.getModelo() + " velocidad " + coche.getVelocidad());
coche.frenar();
console.log(" velocidad " + coche.getVelocidad());
