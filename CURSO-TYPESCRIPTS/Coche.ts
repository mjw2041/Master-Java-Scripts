interface CocheBase{
    getModelo():string;
    getVelocidad():number;
}

class Coche implements CocheBase{
    public color:string;
    public modelo: string;
    public velocidad: number = 0;

    constructor( modelo:any = null) {
        
        this.color = "Blanco";
        this.velocidad = 0;
        if (modelo == null) {
            this.modelo = "BMW Generico";        
        } else {
            this.modelo = modelo;
        }        
    }

    public getColor():string{
        return this.color;
    }

    public getModelo():string{
        return this.modelo;
    }

    public getVelocidad():number{
        return this.velocidad;
    }

    public setColor(color: string){
        this.color = color;
    
    }

    public setModelor(modelo: string){
        this.modelo = modelo;
    
    }

    public acelerar(){
        this.velocidad = this.velocidad + 1;
    }

    public frenar() {
        this.velocidad = this.velocidad - 1;
    }
}

var coche = new Coche('Renault Clio');

coche.setColor("ROJO");
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("El coche es de color: " + coche.getColor() + " Modelo " + coche.getModelo()+ " velocidad " + coche.getVelocidad());
coche.frenar();
console.log( " velocidad " + coche.getVelocidad());




