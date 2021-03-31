import { Component } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {


  Heroes: string [] = ['Spiderman','Batman','Superman', 'Hulk'];
  heroeBorrado:string ='' ; 

  borrarHeroe(){
  this.heroeBorrado = this.Heroes.shift() || '';
   
  }

}
 