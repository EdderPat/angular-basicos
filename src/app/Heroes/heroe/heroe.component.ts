import { Component } from "@angular/core";


@Component ({
selector: 'app-heroe',
templateUrl: 'heroe.component.html'

})
export class HeroeComponent{
nombre: string = 'Ironman';
Edad: number = 45 

get nombreCapitalizado(): string {
    return this.nombre.toLocaleUpperCase();

}
 


obtenerNombre(): string {
    return` ${this.nombre}- ${this.Edad}`;  
}

cambiarNombre():void{
    this.nombre = 'spiderman';

} 

cambiarEdad():void {
    console.log('Hey...');
    this.Edad = 30; 
}

}