import { Component } from "@angular/core";

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html'

})
export class CiudadesComponent {

ciudades:string[] = [];
borradas:string[] = [];

mostrar():void{

this.ciudades = ["Avilés", "Langreo", "Pola de Lena", "Busdongo", "Piniella", "Collía"];

}

borrar():void{

  this.borradas.push(this.ciudades[this.ciudades.length-1]);
  this.ciudades.pop();

}



}
