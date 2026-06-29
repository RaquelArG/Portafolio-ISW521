export class Animal{
    constructor(pEspecie, pEdad, pColor, pOnomatopella){
        this.especie = pEspecie;
        this.edad = pEdad;
        this.color = pColor;
        this.onomatopella = pOnomatopella;

    }
    Onomatopella() {
        console.log(this.onomatopella);}
}